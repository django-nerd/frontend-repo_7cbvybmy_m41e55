import React, { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';

export default function ContactCTA() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="w-full py-20 md:py-24 bg-white border-t border-neutral-200">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Get in Touch with Me!</h2>
            <p className="mt-3 text-neutral-700">
              I’m open to opportunities in digital marketing and project handling across startups,
              edtech, and creative tech brands.
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <a href="mailto:faisalmuhamad654@gmail.com" className="flex items-center gap-2 text-neutral-800 hover:text-orange-600">
                <Mail size={18} /> faisalmuhamad654@gmail.com
              </a>
              <a href="tel:085171069692" className="flex items-center gap-2 text-neutral-800 hover:text-orange-600">
                <Phone size={18} /> 085171069692
              </a>
              <a
                href="https://linktr.ee/"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-2 underline underline-offset-2 text-neutral-800 hover:text-orange-600"
              >
                Linktree / Social Links
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <form onSubmit={onSubmit} className="rounded-xl border border-neutral-200 p-6 bg-white shadow-sm">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    required
                    className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    required
                    className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-neutral-700">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={onChange}
                  required
                  className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <button
                type="submit"
                className="mt-4 inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-5 py-3 rounded-md font-semibold shadow-lg shadow-orange-500/20"
              >
                <Send size={18} /> Send Message
              </button>
              {submitted && (
                <p className="mt-3 text-sm text-green-700">Thanks! Your message has been captured locally for this demo.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
