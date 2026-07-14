import { motion } from 'motion/react';
import { INSTAGRAM_REELS } from '../data';
import { Instagram } from 'lucide-react';

export default function InstagramReels() {
  return (
    <section className="py-24 bg-[#000000] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#f43f5e] mb-2 flex items-center gap-2">
              <Instagram className="w-4 h-4" />
              On Instagram
            </h4>
            <h3 className="text-4xl md:text-5xl font-black tracking-tight text-[#ffffff]">
              Latest Reels
            </h3>
          </div>
          <p className="text-neutral-400 max-w-sm text-sm">
            Check out some of our most engaging reels on Instagram. Follow @getreelsbyg for more!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTAGRAM_REELS.map((shortcode, index) => {
            const cleanShortcode = shortcode.split('/')[0].split('?')[0].trim();
            return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full bg-white/5 border border-white/10 rounded-xl overflow-hidden aspect-[9/16] relative flex items-center justify-center group"
            >
              <iframe
                src={`https://www.instagram.com/p/${cleanShortcode}/embed/captioned`}
                className="w-full h-full border-none absolute inset-0 bg-white"
                scrolling="no"
                allowtransparency="true"
                allow="encrypted-media"
                title={`Instagram Reel ${index + 1}`}
              />
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#f43f5e]/50 rounded-xl pointer-events-none transition-colors z-10" />
            </motion.div>
          )})}
        </div>
        
        <div className="mt-12 text-center">
          <a
            href="https://instagram.com/getreelsbyg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold text-xs uppercase tracking-widest rounded-sm hover:bg-[#f43f5e] hover:text-white transition-colors"
          >
            <Instagram className="w-4 h-4" />
            Follow @getreelsbyg
          </a>
        </div>
      </div>
    </section>
  );
}
