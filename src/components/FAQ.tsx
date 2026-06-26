import { motion } from 'motion/react';
import { FAQS } from '../data';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  return (
    <section className="py-24 bg-transparent border-b border-white/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 flex flex-col items-center">
          <h4 className="text-xs font-bold uppercase tracking-widest text-[#f43f5e] border-b border-white/10 pb-2 mb-4 inline-block">Common Questions</h4>
          <h3 className="text-3xl md:text-4xl font-black tracking-tight text-[#ffffff]">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQItem: React.FC<{ faq: { question: string, answer: string }, index: number }> = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white/5 border border-white/10 rounded-sm overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none hover:bg-white/5 transition-colors"
      >
        <span className="text-sm font-bold text-[#ffffff] pr-4">{faq.question}</span>
        <ChevronDown
          className={`w-4 h-4 text-neutral-500 transition-transform duration-300 shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-6 pt-0 text-neutral-400 text-sm leading-relaxed border-t border-white/5 mt-2">
          {faq.answer}
        </div>
      </div>
    </motion.div>
  );
}
