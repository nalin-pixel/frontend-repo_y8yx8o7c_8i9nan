import { motion } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: 'Experiment 1: Customer Churn Prediction',
    summary: 'Built a gradient boosting model to predict churn with interpretable SHAP insights.',
    metric: 'Model F1 Score: 0.88',
    link: 'https://github.com/'
  },
  {
    id: 2,
    title: 'Experiment 2: Demand Forecasting',
    summary: 'Hierarchical time-series model forecasting SKU-level demand across regions.',
    metric: 'MAPE: 7.4%',
    link: 'https://github.com/'
  },
  {
    id: 3,
    title: 'Experiment 3: Topic Modeling for Research Papers',
    summary: 'BERTopic pipeline to cluster and label emerging themes from 50k abstracts.',
    metric: 'Coherence: 0.62',
    link: 'https://github.com/'
  }
]

function Stamp({ text }) {
  return (
    <div className="inline-block rotate-[-6deg] border-2 border-[#7a1e23] text-[#7a1e23] px-3 py-1 font-mono text-xs tracking-widest uppercase rounded" style={{ boxShadow: '0 0 0 3px rgba(122,30,35,0.2) inset' }}>
      {text}
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative bg-[#0b1f1a] text-[#f3ead7] py-20">
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: "linear-gradient(180deg, rgba(181,139,87,0.25) 1px, transparent 1px)",
        backgroundSize: '56px 56px'
      }} />
      <div className="relative container mx-auto px-6">
        <h2 className="font-display text-3xl md:text-4xl text-center">Research Notebook</h2>
        <p className="text-center text-[#e8deca]/90 mt-2 font-serif">Selected investigations and their verified results</p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.article key={p.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative rounded-xl bg-[#102821]/70 border border-[#b58b57]/40 shadow-[0_10px_30px_rgba(0,0,0,0.25),inset_0_0_0_1px_rgba(181,139,87,0.15)] overflow-hidden">
              {/* Notebook paper texture */}
              <div className="absolute inset-0 opacity-[0.08]" style={{
                backgroundImage: "repeating-linear-gradient(#d6c39a1a, #d6c39a1a 1px, transparent 1px, transparent 28px)",
              }} />
              <div className="relative p-6">
                <header className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl">{p.title}</h3>
                  <Stamp text="Verified" />
                </header>
                <p className="mt-3 text-[#e8deca]/90 font-serif">{p.summary}</p>

                <div className="mt-5">
                  <Stamp text={p.metric} />
                </div>

                <div className="mt-6">
                  <a className="inline-flex items-center gap-2 rounded-md border border-[#b58b57]/50 bg-[#132f27] px-4 py-2 text-sm text-[#f3ead7] hover:bg-[#17372e] transition-colors" href={p.link} target="_blank" rel="noreferrer">
                    View Full Report
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M7 17L17 7M7 7h10v10"/></svg>
                  </a>
                </div>
              </div>

              {/* Ornamental border */}
              <div className="pointer-events-none absolute inset-4 rounded-lg border border-[#b58b57]/30" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
