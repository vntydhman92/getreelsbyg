import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Instagram } from 'lucide-react';
import { BUSINESS_INFO } from '../data';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'Instagram Reels',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    try {
      // 1. Save to Firebase Database
      try {
        await addDoc(collection(db, 'contacts'), {
          ...formData,
          createdAt: new Date().toISOString()
        });
      } catch (dbError) {
        console.error("Firebase Database Error:", dbError);
        // Continue to email even if DB fails
      }

      // 2. Send Email via EmailJS
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey && serviceId !== 'your_service_id') {
        if (form.current) {
          await emailjs.sendForm(
            serviceId,
            templateId,
            form.current,
            publicKey
          );
        }
      } else {
        console.warn('EmailJS configuration is missing or using default placeholders. Skipping email delivery.');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        type: 'Instagram Reels',
        message: ''
      });
    } catch (err: any) {
      console.error("Contact form error:", err);
      if (err?.text) {
        console.error("EmailJS Error details:", err.text);
      }
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-transparent border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#f43f5e] border-b border-white/10 pb-2 mb-4 inline-block">Get In Touch</h4>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#ffffff] mb-6">
              Let's Create Something Amazing
            </h1>
            <p className="text-sm text-neutral-400 mb-10 max-w-md leading-relaxed">
              Ready to elevate your brand's visual content? Fill out the form or reach out directly to discuss your project.
            </p>

            <div className="space-y-6">
              <ContactItem icon={Phone} label="Phone" value={BUSINESS_INFO.phone} />
              <ContactItem icon={Mail} label="Email" value={BUSINESS_INFO.email} />
              <ContactItem icon={MapPin} label="Location" value={BUSINESS_INFO.location} />
              <ContactItem icon={Instagram} label="Instagram" value={BUSINESS_INFO.instagram} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 p-8 rounded-lg border border-white/10"
          >
            <form ref={form} className="space-y-6" onSubmit={handleSubmit}>
              {status === 'success' && (
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-sm text-emerald-500 text-sm font-medium">
                  Thanks for reaching out! We'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-sm text-red-500 text-sm font-medium">
                  Oops, something went wrong. Please try again later.
                </div>
              )}
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-neutral-500 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#000000] border border-white/10 rounded-sm px-4 py-3 text-sm text-[#ffffff] focus:outline-none focus:border-[#f43f5e] transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-neutral-500 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#000000] border border-white/10 rounded-sm px-4 py-3 text-sm text-[#ffffff] focus:outline-none focus:border-[#f43f5e] transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-neutral-500 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#000000] border border-white/10 rounded-sm px-4 py-3 text-sm text-[#ffffff] focus:outline-none focus:border-[#f43f5e] transition-colors"
                    placeholder="+91"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-neutral-500 mb-2">Project Type</label>
                  <select 
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full bg-[#000000] border border-white/10 rounded-sm px-4 py-3 text-sm text-neutral-400 focus:outline-none focus:border-[#f43f5e] transition-colors appearance-none"
                  >
                    <option value="Instagram Reels">Instagram Reels</option>
                    <option value="Wedding Video">Wedding Video</option>
                    <option value="Brand Promo">Brand Promo</option>
                    <option value="Event Coverage">Event Coverage</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-neutral-500 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-[#000000] border border-white/10 rounded-sm px-4 py-3 text-sm text-[#ffffff] focus:outline-none focus:border-[#f43f5e] transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-white text-black font-bold text-xs uppercase tracking-widest rounded-sm hover:bg-[#f43f5e] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon: Icon, label, value }: { icon: any, label: string, value: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center shrink-0">
        <Icon className="w-4 h-4 text-[#f43f5e]" />
      </div>
      <div>
        <div className="text-[10px] uppercase font-bold tracking-widest text-neutral-500 block">{label}</div>
        <div className="text-[#ffffff] font-medium text-sm">{value}</div>
      </div>
    </div>
  );
}
