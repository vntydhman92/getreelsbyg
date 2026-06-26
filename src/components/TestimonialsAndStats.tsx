import { motion } from 'motion/react';
import { TESTIMONIALS, STATS } from '../data';
import { Star } from 'lucide-react';

export default function TestimonialsAndStats() {
  return (
    <section className="py-24 bg-transparent border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-24 pb-24 border-b border-white/10">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center flex flex-col bg-white/5 p-6 rounded-lg border border-white/10"
            >
              <div className="text-4xl md:text-5xl font-black text-[#ffffff] mb-2">
                {stat.value}
              </div>
              <div className="text-[9px] text-neutral-500 uppercase tracking-widest font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500 border-b border-white/10 pb-2 mb-4 inline-block">Client Feedback</h4>
          <h3 className="text-4xl font-black tracking-tight text-[#ffffff]">
            What They Say
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 p-8 rounded-lg border border-white/10 flex flex-col h-full"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#f43f5e] text-[#f43f5e]" />
                ))}
              </div>
              <p className="text-neutral-300 text-sm leading-relaxed mb-8 flex-grow font-serif italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 bg-[#000000] border border-white/10 rounded-sm flex items-center justify-center text-[#f43f5e] font-bold text-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-[#ffffff] font-bold text-sm uppercase tracking-wider">{testimonial.name}</h4>
                  <span className="text-neutral-500 text-[10px] uppercase font-bold tracking-widest">Client</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
