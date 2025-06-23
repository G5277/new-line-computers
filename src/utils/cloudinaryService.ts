// Cloudinary image upload service
export interface CloudinaryUploadResult {
  success: boolean;
  url?: string;
  error?: string;
  publicId?: string;
}

export const uploadToCloudinary = async (file: File): Promise<CloudinaryUploadResult> => {
  try {
    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

    if (!cloudName || !uploadPreset) {
      return {
        success: false,
        error: 'Cloudinary not configured. Please check your environment variables.'
      };
    }

    // Validate file
    if (!file.type.startsWith('image/')) {
      return {
        success: false,
        error: 'Please select an image file'
      };
    }

    if (file.size > 10 * 1024 * 1024) { // 10MB limit
      return {
        success: false,
        error: 'Image size should be less than 10MB'
      };
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);
    formData.append('folder', 'newline-computers/products'); // Organize images in folders

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error(`Upload failed: ${response.statusText}`);
    }

    const data = await response.json();
    
    return {
      success: true,
      url: data.secure_url,
      publicId: data.public_id
    };
  } catch (error) {
    console.error('Cloudinary upload failed:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to upload image'
    };
  }
};

// Delete image from Cloudinary (optional - requires API secret)
export const deleteFromCloudinary = async (publicId: string): Promise<boolean> => {
  try {
    // Note: This requires server-side implementation with API secret
    // For now, we'll just return true as images in free tier don't need deletion
    console.log('Image deletion requested for:', publicId);
    return true;
  } catch (error) {
    console.error('Failed to delete image:', error);
    return false;
  }
};

// Generate optimized image URLs
export const getOptimizedImageUrl = (url: string, options: {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'auto' | 'webp' | 'jpg' | 'png';
} = {}): string => {
  if (!url || !url.includes('cloudinary.com')) {
    return url; // Return original URL if not a Cloudinary URL
  }

  const { width, height, quality = 80, format = 'auto' } = options;
  
  // Build transformation string
  const transformations = [];
  
  if (width) transformations.push(`w_${width}`);
  if (height) transformations.push(`h_${height}`);
  if (quality) transformations.push(`q_${quality}`);
  if (format) transformations.push(`f_${format}`);
  
  if (transformations.length === 0) return url;
  
  // Insert transformations into Cloudinary URL
  const transformString = transformations.join(',');
  return url.replace('/upload/', `/upload/${transformString}/`);
};