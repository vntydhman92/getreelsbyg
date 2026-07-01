import { motion } from 'motion/react';
import { ChevronRight, Play } from 'lucide-react';
import { BUSINESS_INFO } from '../data';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import heroBg from '../assets/images/hero_bg_1782585843756.jpg';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/80 via-[#000000]/60 to-[#000000] z-10" />
        <img
          src={heroBg}
          alt="Cinematic background"
          className="w-full h-full object-cover grayscale opacity-20"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 flex flex-col items-center"
        >
          <div className="mb-6">
            <Logo className="w-28 h-28" />
          </div>
          <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tight text-[#ffffff]">
            Turning Moments Into <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-[#2dd4bf] via-[#f43f5e] to-[#f97316] text-transparent bg-clip-text">
              Cinematic Stories.
            </span>
          </h1>

          <p className="text-neutral-400 max-w-xl mx-auto leading-relaxed mt-6">
            I'm {BUSINESS_INFO.founder}, specializing in high-impact Instagram Reels, wedding films, and brand visuals that command attention in seconds.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link
              to="/about"
              className="w-full sm:w-auto px-6 py-3 bg-white text-black font-bold text-sm rounded-sm hover:bg-[#f43f5e] hover:text-white transition-colors"
            >
              LEARN MORE
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-6 py-3 border border-neutral-700 font-bold text-sm rounded-sm hover:bg-neutral-800 transition-colors"
            >
              BOOK A SHOOT
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#2dd4bf] via-[#f43f5e] to-[#f97316] opacity-10 blur-[120px] rounded-full pointer-events-none z-0" />
    </section>
  );
}
