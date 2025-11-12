import { Github, Linkedin, Mail } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="relative bg-[#0f261f] text-[#f3ead7] py-20">
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop')",
        backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div className="relative container mx-auto px-6">
        <h2 className="font-display text-3xl md:text-4xl text-center">The Curator's Note</h2>
        <p className="mt-3 max-w-3xl mx-auto text-center text-[#e8deca]/90 font-serif">
          I am a data scientist focused on shaping decisions through experimental rigor and clear storytelling. My craft blends statistical design, modern ML, and a lab-notebook mindset—every result traceable, every claim testable.
        </p>

        <div className="mt-10 mx-auto max-w-xl grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="group rounded-lg border border-[#b58b57]/40 bg-[#102821]/70 px-5 py-4 text-center hover:bg-[#132f27] transition-colors">
            <Linkedin className="w-6 h-6 mx-auto text-[#b58b57]" />
            <div className="mt-2 font-serif">LinkedIn</div>
          </a>
          <a href="mailto:your@email" className="group rounded-lg border border-[#b58b57]/40 bg-[#102821]/70 px-5 py-4 text-center hover:bg-[#132f27] transition-colors">
            <Mail className="w-6 h-6 mx-auto text-[#b58b57]" />
            <div className="mt-2 font-serif">Email</div>
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="group rounded-lg border border-[#b58b57]/40 bg-[#102821]/70 px-5 py-4 text-center hover:bg-[#132f27] transition-colors">
            <Github className="w-6 h-6 mx-auto text-[#b58b57]" />
            <div className="mt-2 font-serif">GitHub</div>
          </a>
        </div>

        <div className="mt-8 max-w-3xl mx-auto text-center text-sm text-[#e8deca]/70 font-serif">
          Available for research-heavy product work, experimentation platforms, and ML systems translating analysis into action.
        </div>
      </div>
    </section>
  )
}
