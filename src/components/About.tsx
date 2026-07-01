import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../data';
import aboutImg from '../assets/images/about_me_1782585861310.jpg';

export default function About() {
  return (
    <section id="about" className="py-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden glass-card">
              <div className="absolute inset-0 border border-white/10 rounded-lg z-10 pointer-events-none" />
              <img
                src={aboutImg}
                alt="Gaurav Sharma filming"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent z-0" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-[#f43f5e] font-bold text-[10px] uppercase tracking-widest mb-2">About Me</h2>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#ffffff] mb-6 uppercase">
                Hi, I'm {BUSINESS_INFO.founder}
              </h1>
            </div>

            <div className="space-y-6 text-neutral-400 text-base leading-relaxed">
              <p>
                I'm a passionate videographer and content creator specializing in cinematic reels, wedding films, social media content, and promotional videos.
              </p>
              <p>
                Over the years, I've worked with influencers, local businesses, wedding couples, and brands to create engaging visual stories that drive attention and engagement.
              </p>
              <p className="text-[#ffffff] font-medium pl-6 border-l-2 border-[#f43f5e]">
                My goal is simple: create content that looks professional, feels authentic, and delivers results.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/10 mt-6">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-[#ffffff]">{BUSINESS_INFO.experience}</span>
                <span className="text-[9px] uppercase tracking-wider text-neutral-500 font-bold">Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-[#ffffff]">{BUSINESS_INFO.projectsCompleted}</span>
                <span className="text-[9px] uppercase tracking-wider text-neutral-500 font-bold">Projects</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-[#ffffff]">{BUSINESS_INFO.happyClients}</span>
                <span className="text-[9px] uppercase tracking-wider text-neutral-500 font-bold">Clients</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
