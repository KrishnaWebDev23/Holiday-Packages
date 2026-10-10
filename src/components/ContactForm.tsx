import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import type { ContactFormData } from '../types';

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error';

const INITIAL_FORM_DATA: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  destination: '',
  message: '',
};

const DESTINATIONS = [
  { value: 'bali', label: 'Bali, Indonesia' },
  { value: 'switzerland', label: 'Zermatt, Switzerland' },
  { value: 'kyoto', label: 'Kyoto, Japan' },
  { value: 'paris', label: 'Paris, France' },
  { value: 'maldives', label: 'Maldives' },
  { value: 'himalayas', label: 'Manali, India' },
];

const CONTACT_INFO = [
  { icon: '📍', label: 'Visit us', value: 'Connaught Place, New Delhi, India' },
  { icon: '📞', label: 'Call us', value: '+91 98765 43210' },
  { icon: '✉️', label: 'Email us', value: 'info@wanderlustco.com' },
  { icon: '🕘', label: 'Working hours', value: 'Mon - Sat, 9:00 AM - 7:00 PM' },
];

const inputClass =
  'mt-1.5 w-full rounded-lg border border-slate-700 bg-slate-800/60 px-4 py-3 text-sm text-white placeholder-slate-500 transition focus:border-blue-500 focus:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-blue-500/20';

const labelClass = 'block text-sm font-medium text-slate-300';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA);
  const [status, setStatus] = useState<SubmitStatus>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const destinationLabel =
      DESTINATIONS.find((d) => d.value === formData.destination)?.label ||
      'Not specified';

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          destination: destinationLabel,
          message: formData.message,
        },
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );

      setStatus('success');
      setFormData(INITIAL_FORM_DATA);
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Email send failed:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="scroll-mt-20 bg-slate-950 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Contact Us
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let&apos;s plan your next getaway
          </h2>
          <p className="mt-4 text-slate-400">
            Tell us where you want to go and our travel experts will get back to you within 24
            hours.
          </p>
        </div>

        {/* Card */}
        <div className="mt-10 overflow-hidden  rounded-2xl bg-slate-900 shadow-2xl ring-1 ring-slate-800 lg:grid lg:grid-cols-5">
          {/* Left: Info panel */}
          <div className="bg-linear-to-br from-blue-900 to-indigo-900 p-8 text-white sm:p-10 lg:col-span-2">
            <h3 className="text-xl font-semibold">Get in touch</h3>
            <p className="mt-2 text-sm text-blue-100">
              Have a question or want a custom package? We&apos;d love to hear from you.
            </p>

            <ul className="mt-8 space-y-6">
              {CONTACT_INFO.map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/15 text-lg">
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-blue-200">
                      {item.label}
                    </p>
                    <p className="mt-0.5 text-sm font-medium">{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Form */}
          <div className="p-8 sm:p-10 lg:col-span-3">
            {status === 'success' && (
              <div
                role="status"
                className="mb-6 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm font-medium text-emerald-400"
              >
                ✅ Thank you! Your inquiry has been sent. Our team will contact you shortly.
              </div>
            )}

            {status === 'error' && (
              <div
                role="alert"
                className="mb-6 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm font-medium text-red-400"
              >
                Something went wrong. Please try again in a moment.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Full Name <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your mobile number"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="destination" className={labelClass}>
                    Preferred Destination
                  </label>
                  <select
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select a destination</option>
                    {DESTINATIONS.map((d) => (
                      <option key={d.value} value={d.value}>
                        {d.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>
                  Message <span className="text-blue-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Trip dates, group size, budget or any special requirements..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full rounded-lg bg-blue-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/30 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'sending' ? 'Sending...' : 'Send Inquiry'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};