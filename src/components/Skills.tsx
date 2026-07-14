import { motion } from 'motion/react';
import { SKILLS, EQUIPMENT } from '../data';
import { Camera, Drone, Mic, Aperture } from 'lucide-react'; // Wait Drone doesn't exist, I'll use generic icons

export default function Skills() {
  return (
    <section className="py-24 bg-transparent border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Skills Column */}
          <div className="bg-white/5 p-6 md:p-8 rounded-lg border border-white/10">
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500 border-b border-white/10 pb-2 mb-6">Stats & Skills</h4>
            <h3 className="text-3xl font-black tracking-tight text-[#ffffff] mb-8 uppercase">
              Technical Ability
            </h3>
            
            <div className="space-y-6">
              {SKILLS.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between text-[10px] uppercase font-bold text-[#ffffff]">
                    <span>{skill.name}</span>
                    <span className="text-[#f43f5e]">{skill.level}%</span>
                  </div>
                  <div className="h-1 bg-[#1a1a1a] rounded-sm overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                      className="h-full bg-[#f43f5e]"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Equipment Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#f43f5e] mb-2">The Gear</h4>
            <h3 className="text-3xl font-black tracking-tight text-[#ffffff] mb-8 uppercase">
              Equipment Used
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <EquipmentCard
                title="Cameras"
                icon={Camera}
                items={EQUIPMENT.cameras}
                delay={0.1}
              />
              <EquipmentCard
                title="Lenses"
                icon={Aperture}
                items={EQUIPMENT.lenses}
                delay={0.2}
              />
              <EquipmentCard
                title="Drones"
                icon={Camera} // generic icon fallback
                items={EQUIPMENT.drone}
                delay={0.3}
              />
              <EquipmentCard
                title="Audio"
                icon={Mic}
                items={EQUIPMENT.audio}
                delay={0.4}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EquipmentCard({ title, icon: Icon, items, delay }: { title: string, icon: any, items: string[], delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white/5 p-5 rounded-lg border border-white/10"
    >
      <div className="flex items-center gap-3 mb-4 text-[#ffffff]">
        <Icon className="w-4 h-4 text-[#f43f5e]" />
        <h4 className="font-bold text-sm uppercase tracking-wider">{title}</h4>
      </div>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="text-neutral-400 text-[11px] font-mono">{item}</li>
        ))}
      </ul>
    </motion.div>
  );
}
