// Image storage utilities
export interface ImageUploadResult {
  success: boolean;
  url?: string;
  error?: string;
}

// Option 1: Upload to Cloudinary (free tier available)
export const uploadToCloudinary = async (file: File): Promise<ImageUploadResult> => {
  try {
    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

    if (!cloudName || !uploadPreset) {
      return {
        success: false,
        error: 'Cloudinary not configured. Check environment variables.'
      };
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error('Upload failed');
    }

    const data = await response.json();
    return {
      success: true,
      url: data.secure_url
    };
  } catch (error) {
    console.error('Cloudinary upload failed:', error);
    return {
      success: false,
      error: 'Failed to upload image'
    };
  }
};

// Option 2: Upload to ImgBB (free tier available)
export const uploadToImgBB = async (file: File): Promise<ImageUploadResult> => {
  try {
    const apiKey = import.meta.env.VITE_IMGBB_API_KEY;

    if (!apiKey) {
      return {
        success: false,
        error: 'ImgBB not configured. Check environment variables.'
      };
    }

    const formData = new FormData();
    formData.append('image', file);

    const response = await fetch(
      `https://api.imgbb.com/1/upload?key=${apiKey}`,
      {
        method: 'POST',
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error('Upload failed');
    }

    const data = await response.json();
    return {
      success: true,
      url: data.data.url
    };
  } catch (error) {
    console.error('ImgBB upload failed:', error);
    return {
      success: false,
      error: 'Failed to upload image'
    };
  }
};

// Option 3: Convert to base64 and store in localStorage (temporary solution)
export const storeImageLocally = async (file: File): Promise<ImageUploadResult> => {
  try {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64 = e.target?.result as string;
        
        // Store in localStorage with timestamp
        const imageData = {
          data: base64,
          timestamp: Date.now(),
          filename: file.name
        };
        
        const imageId = `product_image_${Date.now()}`;
        localStorage.setItem(imageId, JSON.stringify(imageData));
        
        resolve({
          success: true,
          url: base64
        });
      };
      reader.onerror = () => {
        resolve({
          success: false,
          error: 'Failed to read file'
        });
      };
      reader.readAsDataURL(file);
    });
  } catch (error) {
    return {
      success: false,
      error: 'Failed to process image'
    };
  }
};

// Clean up old localStorage images (call this periodically)
export const cleanupOldImages = () => {
  const oneWeekAgo = Date.now() - (7 * 24 * 60 * 60 * 1000);
  
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key?.startsWith('product_image_')) {
      try {
        const imageData = JSON.parse(localStorage.getItem(key) || '{}');
        if (imageData.timestamp < oneWeekAgo) {
          localStorage.removeItem(key);
        }
      } catch (error) {
        // Remove corrupted entries
        localStorage.removeItem(key!);
      }
    }
  }
};