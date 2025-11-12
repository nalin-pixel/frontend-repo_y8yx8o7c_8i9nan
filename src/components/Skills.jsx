import { motion } from 'framer-motion'

const skills = [
  { name: 'Python', level: 0.95 },
  { name: 'SQL', level: 0.9 },
  { name: 'PyTorch', level: 0.85 },
  { name: 'Scikit-learn', level: 0.9 },
  { name: 'Pandas', level: 0.92 },
  { name: 'NumPy', level: 0.9 },
  { name: 'NLP', level: 0.8 },
  { name: 'Time Series', level: 0.82 },
  { name: 'Experiment Design', level: 0.88 },
]

export default function Skills() {
  return (
    <section id="skills" className="relative bg-[#0f261f] text-[#f3ead7] py-16">
      <div className="absolute inset-0 opacity-[0.06]" style={{backgroundImage: "url('https://images.unsplash.com/photo-1524638431109-93d95c968f03?q=80&w=1200&auto=format&fit=crop')", backgroundSize: 'cover', backgroundPosition: 'center'}} />
      <div className="relative container mx-auto px-6">
        <h2 className="font-display text-3xl md:text-4xl text-center">Tools & Techniques</h2>
        <p className="text-center text-[#e8deca]/90 mt-2 font-serif">A curated selection from the cabinet of practice</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((s, i) => (
            <motion.div key={s.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="relative rounded-xl border border-[#b58b57]/40 bg-[#102821]/70 p-5 shadow-[inset_0_0_0_1px_rgba(181,139,87,0.15)]">
              <div className="flex items-center justify-between">
                <span className="font-serif text-lg">{s.name}</span>
                <span className="text-[#b58b57] font-mono">{Math.round(s.level*100)}%</span>
              </div>
              {/* Vintage gauge */}
              <div className="mt-4 h-3 rounded-full bg-[#0b1f1a] border border-[#b58b57]/30 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#7a1e23] via-[#b58b57] to-[#d6c39a]" style={{ width: `${s.level*100}%` }} />
              </div>
              <div className="mt-3 text-xs text-[#e8deca]/70 font-serif">Calibration complete</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
