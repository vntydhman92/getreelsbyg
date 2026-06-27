import { Helmet } from 'react-helmet-async';
import { BUSINESS_INFO } from '../data';
import { motion } from 'motion/react';

export default function Blog() {
  return (
    <div className="pt-20 min-h-[80vh] flex flex-col pt-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <Helmet>
        <title>Blog & Insights | {BUSINESS_INFO.name}</title>
        <meta name="description" content="Read the latest tips, updates, and behind-the-scenes stories from GetReelsByG on video editing, graphic design, and content creation." />
        <link rel="canonical" href="https://getreelsbyg.vercel.app/blog" />
      </Helmet>
      
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#ffffff] uppercase mb-4">
          Latest Stories
        </h1>
        <p className="text-neutral-400 max-w-2xl text-lg">
          Insights, tips, and behind-the-scenes magic from my creative journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder blog posts */}
        {[1, 2, 3].map((post, i) => (
          <motion.article 
            key={post}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white/5 border border-white/10 rounded-lg overflow-hidden group flex flex-col"
          >
            <div className="aspect-[16/9] bg-neutral-900 overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-neutral-600 font-mono text-sm">
                coming soon
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="text-[10px] text-[#f43f5e] font-bold uppercase tracking-widest mb-3">
                Cinematography
              </div>
              <h2 className="text-lg font-bold text-[#ffffff] mb-3">
                How to Capture the Perfect Wedding Highlight
              </h2>
              <p className="text-sm text-neutral-400 mb-6 flex-1">
                A brief overview of managing lighting, audio, and storytelling to deliver an unforgettable cinematic wedding feature...
              </p>
              <div className="mt-auto text-[10px] uppercase font-bold tracking-widest text-neutral-500">
                Read Article &rarr;
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
