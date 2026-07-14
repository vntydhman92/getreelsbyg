import { motion } from 'motion/react';
import { PRICING } from '../data';
import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-transparent border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <h4 className="text-xs font-bold uppercase tracking-widest text-[#f43f5e] border-b border-white/10 pb-2 mb-4 inline-block">Pricing Plans</h4>
          <h3 className="text-4xl md:text-5xl font-black tracking-tight text-[#ffffff] mb-6">
            Transparent Pricing
          </h3>
          <p className="text-sm text-neutral-400">
            Choose the package that best fits your content needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PRICING.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white/5 rounded-lg border ${
                plan.popular ? 'border-[#f43f5e]' : 'border-white/10'
              } p-8 flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[rgba(217,119,6,0.1)] border border-[rgba(217,119,6,0.3)] text-[#F59E0B] font-bold px-4 py-1 rounded-full text-[10px] uppercase tracking-widest backdrop-blur-sm">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8 border-b border-white/10 pb-6">
                <h4 className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-2">{plan.name}</h4>
                <div className="text-4xl font-mono font-bold text-[#ffffff]">{plan.price}</div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-[#ffffff]">
                    <Check className="w-4 h-4 text-[#f43f5e] mr-3 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`w-full py-3 rounded-sm font-bold text-xs uppercase tracking-widest transition-colors flex justify-center items-center ${
                  plan.popular
                    ? 'bg-white text-black hover:bg-[#f43f5e] hover:text-white'
                    : 'border border-neutral-700 text-white hover:bg-neutral-800'
                }`}
              >
                Choose Plan
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
