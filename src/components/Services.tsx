import { motion } from 'motion/react';
import { SERVICES } from '../data';
import { Check } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#000000] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h4 className="text-xs font-bold uppercase tracking-widest text-[#f43f5e] border-b border-white/10 pb-2 mb-4">Services & Packages</h4>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#ffffff] mb-6">
            Everything You Need for Outstanding Video Content
          </h1>
          <p className="text-base text-neutral-400 max-w-2xl">
            From short-form social media clips to full-scale event coverage, I offer end-to-end video production services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 p-8 rounded-lg hover:border-[#f43f5e]/50 transition-colors group flex flex-col"
              >
                <div className="w-12 h-12 bg-[#000000] border border-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#f43f5e]/10 transition-colors">
                  <Icon className="w-6 h-6 text-[#f43f5e]" />
                </div>
                <h4 className="text-xl font-bold text-[#ffffff] mb-2">{service.title}</h4>
                <p className="text-neutral-400 text-sm mb-6 min-h-[40px]">{service.description}</p>
                
                <ul className="space-y-3 mb-8 flex-1">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-[#ffffff]">
                      <Check className="w-4 h-4 text-[#f43f5e] mr-3 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                  <span className="text-[10px] uppercase font-bold text-neutral-500 tracking-wider">Starting Rate</span>
                  <span className="text-lg font-mono font-bold text-[#ffffff]">{service.price.replace('Starting from', '')}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
