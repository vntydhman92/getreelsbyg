import { motion } from 'motion/react';
import { PORTFOLIO } from '../data';
import { PlayCircle } from 'lucide-react';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-transparent border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#f43f5e] mb-2">Featured Work</h4>
            <h3 className="text-4xl md:text-5xl font-black tracking-tight text-[#ffffff]">
              Selected Projects
            </h3>
          </div>
          <p className="text-neutral-400 max-w-sm text-sm">
            A showcase of recent work that highlights my ability to create engaging, cinematic, and results-driven video content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-lg overflow-hidden bg-white/5 border border-white/10 flex flex-col"
            >
              <div className="aspect-[16/9] relative overflow-hidden bg-neutral-900 flex-shrink-0 group">
                {project.videoUrl ? (
                  <video
                    src={project.videoUrl}
                    poster={project.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                )}
                {!project.videoUrl && (
                  <div className="absolute inset-0 bg-[#000000]/40 group-hover:bg-[#000000]/20 transition-colors flex items-center justify-center pointer-events-none">
                    <PlayCircle className="w-16 h-16 text-white opacity-0 group-hover:opacity-100 transition-opacity transform scale-50 group-hover:scale-100 duration-300 drop-shadow-lg" />
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-[rgba(217,119,6,0.1)] border border-[rgba(217,119,6,0.3)] text-[#F59E0B] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm pointer-events-none">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <h4 className="text-lg font-bold text-[#ffffff] mb-4">{project.title}</h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
                  <div>
                    <div className="text-[10px] text-neutral-500 mb-2 uppercase tracking-widest font-bold">Deliverables</div>
                    <ul className="space-y-1.5">
                      {project.deliverables.map((item, i) => (
                        <li key={i} className="text-[#ffffff] text-xs flex items-start gap-2">
                          <span className="w-1 h-1 bg-neutral-600 rounded-full mt-1.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-[10px] text-neutral-500 mb-2 uppercase tracking-widest font-bold">Results</div>
                    <ul className="space-y-1.5">
                      {project.result.map((res, i) => (
                        <li key={i} className="text-[#f43f5e] font-bold text-xs flex items-start gap-2">
                          <span className="w-1 h-1 bg-[#f43f5e] rounded-full mt-1.5 shrink-0" />
                          {res}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

          ))}
        </div>
      </div>
    </section>
  );
}
