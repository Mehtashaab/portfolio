"use client";
import React, { useState } from 'react';
import Swal from 'sweetalert2';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Send the form data to the backend API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        // Show success message with SweetAlert
        Swal.fire({
          title: 'Success!',
          text: result.message,
          icon: 'success',
          confirmButtonText: 'Great!',
        });

        // Reset form data
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Show error message with SweetAlert
        Swal.fire({
          title: 'Oops!',
          text: result.error || 'Something went wrong, please try again.',
          icon: 'error',
          confirmButtonText: 'Retry',
        });
      }
    } catch (error) {
      // Handle unexpected errors (e.g., network issues)
      Swal.fire({
        title: 'Error',
        text: 'Something went wrong, please try again.',
        icon: 'error',
        confirmButtonText: 'Retry',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
        className="w-full px-4 py-2 border rounded"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your Email"
        className="w-full px-4 py-2 border rounded"
        required
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your Message"
        className="w-full px-4 py-2 border rounded"
        rows={5}
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
