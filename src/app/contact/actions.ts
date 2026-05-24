'use server';

import { createContactMessage } from '@/lib/data';

export interface ActionResponse {
  success: boolean;
  message: string;
}

export async function submitContactFormAction(
  prevState: any,
  formData: FormData
): Promise<ActionResponse> {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const subject = formData.get('subject') as string;
  const message = formData.get('message') as string;

  // Simple server side validation
  if (!name || !email || !message) {
    return {
      success: false,
      message: 'Name, email, and message are required fields.'
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: 'Please enter a valid email address.'
    };
  }

  // Submit to data service
  const res = await createContactMessage(name, email, subject || 'General Inquiry', message);

  if (res.success) {
    if (res.fromDb) {
      return {
        success: true,
        message: 'Thank you! Your message has been received and saved. We will get back to you shortly.'
      };
    } else {
      return {
        success: true,
        message: 'Thank you! Your message was received (running in offline demo mode).'
      };
    }
  } else {
    return {
      success: false,
      message: res.error || 'Failed to submit form. Please try again.'
    };
  }
}
