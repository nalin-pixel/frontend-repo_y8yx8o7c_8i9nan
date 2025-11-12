import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import About from './components/About'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = '#0b1f1a'
    return () => { document.body.style.backgroundColor = '' }
  }, [])

  return (
    <div className="min-h-screen font-serif" style={{ color: '#f3ead7' }}>
      <Hero name="Your Name" />
      <Skills />
      <Projects />
      <About />

      <footer className="bg-[#0b1f1a] text-center py-8 text-[#e8deca]/70 border-t border-[#b58b57]/30">
        <div className="container mx-auto px-6">
          <div className="text-sm">© {new Date().getFullYear()} Alchemist of Information · Crafted with care</div>
        </div>
      </footer>
    </div>
  )
}

export default App
