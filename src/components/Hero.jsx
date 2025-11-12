import { motion } from 'framer-motion'
import { Compass } from 'lucide-react'

export default function Hero({ name = "Your Name" }) {
  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#0b1f1a] text-[#f3ead7]">
      {/* Background textures */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, #e0d6bd 1px, transparent 0)",
        backgroundSize: '22px 22px'
      }} />
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]" style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(224,214,189,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(224,214,189,0.3) 1px, transparent 1px)",
        backgroundSize: '80px 80px'
      }} />

      <div className="relative container mx-auto px-6 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight">
          {name}, <span className="text-[#b58b57]">Alchemist of Information</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed text-[#e8deca] font-serif">
          Transforming raw data into actionable insight through meticulous research.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 flex items-center justify-center">
          <a href="#projects" className="group inline-flex items-center gap-4 rounded-full border border-[#b58b57]/60 bg-[#102821]/80 px-6 py-3 text-[#f3ead7] shadow-[inset_0_0_0_1px_rgba(181,139,87,0.25)] hover:bg-[#132f27] transition-colors">
            <span className="font-serif">Enter the Research Notebook</span>
            <motion.span
              whileHover={{ rotate: 180 }}
              whileTap={{ scale: 0.95 }}
              className="relative">
              <Compass className="h-6 w-6 text-[#b58b57]" />
              <span className="absolute inset-0 rounded-full blur-md opacity-30" style={{ boxShadow: '0 0 20px #b58b57' }} />
            </motion.span>
          </a>
        </motion.div>
      </div>

      {/* Ornamental corners */}
      <div className="pointer-events-none absolute inset-6 sm:inset-10 border border-[#b58b57]/40 rounded-[18px]" style={{ boxShadow: '0 0 0 1px rgba(181,139,87,0.25), inset 0 0 60px rgba(181,139,87,0.08)'}} />
    </section>
  )
}
