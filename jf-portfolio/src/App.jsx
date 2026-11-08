import { useEffect, useState, useCallback } from 'react'
import { List, X } from '@phosphor-icons/react'
import Sidebar from './components/Sidebar'
import Marquee from './components/Marquee'
import { Hero, IntroCard, Projects, Credentials, About, Services, Contact } from './components/Sections'
import { Button } from '@/components/ui/button'
import { NAV, TOOLS } from './data'

export default function App() {
  const [active, setActive] = useState('home')
  const [dark, setDark] = useState(false)
  const [open, setOpen] = useState(false)

  const navigate = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  // Scroll reveal animation
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  // Active nav highlighting
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' }
    )
    NAV.forEach((n) => {
      const el = document.getElementById(n.id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  return (
    <div className="min-h-screen">
      <Button
        size="icon"
        className="fixed left-3.5 top-3.5 z-50 rounded-xl lg:hidden"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? <X size={22} /> : <List size={22} />}
      </Button>

      <Sidebar
        nav={NAV}
        active={active}
        onNavigate={navigate}
        dark={dark}
        onToggleTheme={() => setDark((d) => !d)}
        open={open}
      />

      <main className="mx-auto max-w-[1400px] px-5 pb-12 pt-20 lg:ml-[280px] lg:px-12 lg:pb-16 lg:pt-10">
        <Hero onNavigate={navigate} />
        <Marquee tools={TOOLS} />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          <IntroCard onNavigate={navigate} />
          <Projects />
          <Credentials />
          <About />
          <Services />
          <Contact />
        </div>
      </main>
    </div>
  )
}
