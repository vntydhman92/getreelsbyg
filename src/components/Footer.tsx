import { useState } from 'react';
import { BUSINESS_INFO } from '../data';
import Logo from './Logo';
import { Instagram, Youtube, Twitter, Facebook, Mail, Phone, MapPin, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('submitting');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });
      
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <footer className="bg-[#050505] pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#f43f5e] to-transparent opacity-5 blur-[100px] rounded-full pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Col */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <Logo className="w-10 h-10" />
              <span className="font-sans font-black text-2xl tracking-tighter uppercase text-[#ffffff]">
                {BUSINESS_INFO.name}
              </span>
            </Link>
            <p className="text-sm text-neutral-400 leading-relaxed">
              We capture the magic of your special moments and craft cinematic stories that last a lifetime.
            </p>
            <div className="flex items-center gap-4">
              <a href={`https://instagram.com/${BUSINESS_INFO.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:bg-[#f43f5e] hover:border-[#f43f5e] hover:text-white transition-all group">
                <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
              <a href={`https://api.whatsapp.com/send?phone=${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:bg-[#f43f5e] hover:border-[#f43f5e] hover:text-white transition-all group">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 group-hover:scale-110 transition-transform">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:bg-[#f43f5e] hover:border-[#f43f5e] hover:text-white transition-all group">
                <Youtube className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:bg-[#f43f5e] hover:border-[#f43f5e] hover:text-white transition-all group">
                <Facebook className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-neutral-400 hover:text-white text-sm transition-colors block w-fit">About Me</Link></li>
              <li><Link to="/services" className="text-neutral-400 hover:text-white text-sm transition-colors block w-fit">Services</Link></li>
              <li><Link to="/blog" className="text-neutral-400 hover:text-white text-sm transition-colors block w-fit">Blog & Updates</Link></li>
              <li><Link to="/contact" className="text-neutral-400 hover:text-white text-sm transition-colors block w-fit">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-neutral-400 text-sm">
                <MapPin className="w-5 h-5 text-[#f43f5e] shrink-0" />
                <span>{BUSINESS_INFO.location}</span>
              </li>
              <li className="flex items-center gap-3 text-neutral-400 text-sm">
                <Phone className="w-5 h-5 text-[#f43f5e] shrink-0" />
                <span>{BUSINESS_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-neutral-400 text-sm">
                <Mail className="w-5 h-5 text-[#f43f5e] shrink-0" />
                <span>{BUSINESS_INFO.email}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-6">Newsletter</h4>
            <p className="text-sm text-neutral-400 leading-relaxed mb-4">
              Subscribe to get the latest updates, tips on video creation, and exclusive offers.
            </p>
            <form className="relative flex items-center" onSubmit={handleSubscribe}>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address" 
                className="w-full bg-white/5 border border-white/10 rounded-sm py-3 pl-4 pr-12 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#f43f5e] transition-colors disabled:opacity-50"
                required
                disabled={status === 'submitting' || status === 'success'}
              />
              <button 
                type="submit" 
                disabled={status === 'submitting' || status === 'success'}
                className={`absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-white rounded-sm transition-colors ${
                  status === 'success' ? 'bg-emerald-500' : 'bg-[#f43f5e] hover:bg-[#2dd4bf]'
                } disabled:cursor-not-allowed`}
              >
                {status === 'success' ? <Check className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </button>
            </form>
            {status === 'success' && <p className="text-emerald-500 text-xs mt-2 font-medium">Thanks for subscribing!</p>}
            {status === 'error' && <p className="text-red-500 text-xs mt-2 font-medium">Failed to subscribe. Try again.</p>}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-neutral-500 text-[10px] uppercase font-bold tracking-widest text-center md:text-left">
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-[10px] uppercase font-bold tracking-widest">
            <a href="#" className="text-neutral-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-neutral-500 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
