// Email service using EmailJS (no backend needed)
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';

if (EMAILJS_PUBLIC_KEY) {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface RepairFormData {
  name: string;
  phone: string;
  email: string;
  deviceType: string;
  issue: string;
  urgency: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
      console.warn('EmailJS not configured. Check environment variables.');
      return false;
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      to_email: import.meta.env.VITE_EMAIL || 'info@newlinecomputers.com',
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    return response.status === 200;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};

export const sendRepairRequestEmail = async (formData: RepairFormData): Promise<boolean> => {
  try {
    if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
      console.warn('EmailJS not configured. Check environment variables.');
      return false;
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      device_type: formData.deviceType,
      issue_description: formData.issue,
      urgency_level: formData.urgency,
      to_email: `repairs@${(import.meta.env.VITE_EMAIL || 'info@newlinecomputers.com').split('@')[1]}`,
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      'template_repair_request', // Different template for repair requests
      templateParams
    );

    return response.status === 200;
  } catch (error) {
    console.error('Failed to send repair request:', error);
    return false;
  }
};