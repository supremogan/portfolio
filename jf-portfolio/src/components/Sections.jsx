import { useState } from 'react'
import {
  FolderOpen,
  Stack,
  User,
  ChatCircle,
  ArrowUpRight,
  PaperPlaneTilt,
  EnvelopeSimple,
  MapPin,
  CheckCircle,
  Play,
  Handshake,
  Certificate,
  Images,
} from '@phosphor-icons/react'
import ProjectModal from './ProjectModal'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input, Textarea } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { PROJECTS, SERVICES } from '../data'
import profile from "../assets/face.jpg"

function IconChip({ children }) {
  return (
    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
      {children}
    </span>
  )
}

export function Hero({ onNavigate }) {
  return (
    <header id="home" className="reveal mb-7 flex flex-col items-start justify-between gap-6 md:flex-row">
      <div>
        <h2 className="text-[clamp(2.2rem,5vw,4rem)] font-extrabold leading-[1.08] tracking-tight">
          Build it clean.
          <br />
          Ship it{' '}
          <span className="animate-shine bg-gradient-to-r from-primary via-[#6b93ff] to-primary bg-[length:200%_auto] bg-clip-text text-transparent">
            fast.
          </span>
        </h2>
        <p className="mt-3.5 max-w-xl text-base text-muted-foreground">
          I'm John, a web developer crafting fast, accessible and modern websites and web apps with React.
        </p>
      </div>
      <Button size="lg" onClick={() => onNavigate('contact')}>
        <Handshake size={18} weight="fill" /> Hire me
      </Button>
    </header>
  )
}

export function IntroCard({ onNavigate }) {
  return (
    <Card className="reveal flex flex-col items-center bg-gradient-to-b from-secondary to-card text-center md:col-span-2 xl:col-span-1 xl:row-span-2">
      <Badge variant="default" className="self-start">
        <Play size={12} weight="fill" className="animate-pulse-soft" /> Available for work
      </Badge>
      <div
        aria-hidden="true"
        className="relative my-5 grid h-[220px] w-[190px] place-items-center rounded-[20px] border-[3px] border-card bg-gradient-to-br from-[#5b8bff] to-primary text-6xl font-bold text-white shadow-lg"
      >
        <img src={profile} alt='profile' className="w-full h-full object-cover rounded-[15px]"/>
        <i className="absolute -bottom-3 -right-3 grid size-9 place-items-center rounded-full bg-card text-primary">
          <CheckCircle size={24} weight="fill" />
        </i>
      </div>
      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Hi, I'm</p>
      <h3 className="mt-1 text-[clamp(1.8rem,3vw,2.4rem)] font-extrabold leading-tight">John Fuentes</h3>
      <div className="my-3.5 h-0.5 w-[70%] rounded bg-primary" />
      <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">Web Developer · React · UI</p>
      <p className="mt-4 text-lg">
        Design it well.
        <br />
        <strong>Code it better.</strong>
      </p>
      <Button variant="link" className="mt-auto pt-5" onClick={() => onNavigate('contact')}>
        Let's work together <ArrowUpRight size={16} />
      </Button>
    </Card>
  )
}

export function Projects() {
  const [selected, setSelected] = useState(null)
  return (
    <>
      <ProjectsCard onSelect={setSelected} />
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  )
}

function ProjectsCard({ onSelect }) {
  return (
    <Card id="projects" className="reveal md:col-span-2" aria-labelledby="projects-h">
      <CardHeader>
        <IconChip><FolderOpen size={22} weight="fill" /></IconChip>
        <div>
          <CardTitle id="projects-h">Projects</CardTitle>
          <CardDescription>Websites and apps built to solve real problems.</CardDescription>
        </div>
      </CardHeader>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {PROJECTS.map((p) => (
          <button
            type="button"
            key={p.title}
            onClick={() => onSelect(p)}
            aria-haspopup="dialog"
            aria-label={`View ${p.title} screenshots`}
            className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border bg-background text-left transition-all duration-300 hover:-translate-y-1.5 hover:border-primary"
          >
            <div className="relative h-28 overflow-hidden bg-gradient-to-br from-primary to-[#5b8bff]">
              <img
                src={p.screenshots[0].src}
                alt=""
                loading="lazy"
                className="size-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 grid place-items-center bg-primary/70 text-sm font-semibold text-white opacity-0 transition group-hover:opacity-100">
                <span className="flex items-center gap-2">
                  <Images size={20} weight="fill" /> {p.screenshots.length} screenshots
                </span>
              </span>
            </div>
            <div className="p-4">
              <small className="text-[11px] font-semibold uppercase tracking-wider text-primary">{p.type}</small>
              <h4 className="mb-1 mt-0.5 flex items-center justify-between text-base font-semibold">
                {p.title} <ArrowUpRight size={16} />
              </h4>
              <p className="text-[13px] text-muted-foreground">{p.desc}</p>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <Badge key={t} className="px-2.5 py-0.5 text-[11px]">{t}</Badge>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>
    </Card>
  )
}

export function Credentials() {
  const stats = [
    ['3+', 'Years building'],
    ['2', 'Projects finished'],
    ['100%', 'Responsive'],
  ]
  return (
    <Card className="reveal" aria-labelledby="cred-h">
      <CardHeader>
        <IconChip><Certificate size={22} weight="fill" /></IconChip>
        <div>
          <CardTitle id="cred-h">Focus</CardTitle>
          <CardDescription>Frontend developer · React specialist.</CardDescription>
        </div>
      </CardHeader>
      <ul className="grid gap-2.5">
        {stats.map(([n, label]) => (
          <li key={label} className="flex items-center gap-3.5 rounded-2xl bg-background px-3.5 py-3">
            <strong className="min-w-[70px] text-2xl font-bold text-primary">{n}</strong>
            <span className="text-[13px] text-muted-foreground">{label}</span>
          </li>
        ))}
      </ul>
    </Card>
  )
}

export function About() {
  return (
    <Card id="about" className="reveal" aria-labelledby="about-h">
      <CardHeader>
        <IconChip><User size={22} weight="fill" /></IconChip>
        <div>
          <CardTitle id="about-h">About</CardTitle>
          <CardDescription>A little about me.</CardDescription>
        </div>
      </CardHeader>
      <p className="mb-3 text-sm text-muted-foreground">
        I'm John Fuentes, a web developer who loves turning ideas into clean, fast and user-friendly
        products. I work mainly with React, JavaScript and modern CSS, and I care about accessibility,
        performance and good SEO from day one.
      </p>
      <p className="mb-3 text-sm text-muted-foreground">
        When I'm not coding, I'm exploring new tools and helping small businesses get online.
      </p>
      <div className="flex flex-wrap gap-1.5">
        {['React', 'Tailwind', 'shadcn/ui', 'JavaScript', 'Vite', 'Git', 'SEO'].map((t) => (
          <Badge key={t} className="px-3.5 py-1.5 text-[13px]">{t}</Badge>
        ))}
      </div>
    </Card>
  )
}

export function Services() {
  return (
    <Card id="services" className="reveal md:col-span-2 xl:col-span-3" aria-labelledby="services-h">
      <CardHeader>
        <IconChip><Stack size={22} weight="fill" /></IconChip>
        <div>
          <CardTitle id="services-h">Services</CardTitle>
          <CardDescription>What I build for businesses and creators.</CardDescription>
        </div>
      </CardHeader>
      <ul className="grid gap-3.5 sm:grid-cols-2 xl:grid-cols-3">
        {SERVICES.map((s, i) => {
          const Icon = s.icon
          return (
            <li
              key={s.title}
              className="relative flex items-start gap-3.5 rounded-2xl border border-transparent bg-background p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary"
            >
              <span className="grid size-[42px] shrink-0 place-items-center rounded-xl bg-secondary text-secondary-foreground">
                <Icon size={22} weight="duotone" />
              </span>
              <div>
                <h4 className="text-[15px] font-semibold">{s.title}</h4>
                <p className="text-[13px] text-muted-foreground">{s.desc}</p>
              </div>
              <em className="absolute right-3.5 top-3 text-[11px] not-italic text-muted-foreground">
                {String(i + 1).padStart(2, '0')}
              </em>
            </li>
          )
        })}
      </ul>
    </Card>
  )
}

export function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const subject = encodeURIComponent(`Portfolio inquiry from ${f.get('name')}`)
    const body = encodeURIComponent(`${f.get('message')}\n\nFrom: ${f.get('name')} (${f.get('email')})`)
    window.location.href = `mailto:ganjohn417@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <Card
      id="contact"
      className="reveal grid gap-8 md:col-span-2 lg:grid-cols-[1fr_1.2fr] xl:col-span-3"
      aria-labelledby="contact-h"
    >
      <div>
        <CardHeader>
          <IconChip><ChatCircle size={22} weight="fill" /></IconChip>
          <div>
            <CardTitle id="contact-h">Contact</CardTitle>
            <CardDescription>Have a project in mind? Let's talk.</CardDescription>
          </div>
        </CardHeader>
        <ul className="grid gap-3 text-sm text-muted-foreground">
          <li className="flex items-center gap-2.5">
            <EnvelopeSimple size={20} weight="duotone" className="text-primary" /> ganjohn417@gmail.com
          </li>
          <li className="flex items-center gap-2.5">
            <MapPin size={20} weight="duotone" className="text-primary" /> Philippines · Open to remote
          </li>
        </ul>
      </div>

      <form onSubmit={onSubmit} className="grid gap-3.5">
        <div className="grid gap-1.5">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required autoComplete="name" placeholder="Your name" />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required autoComplete="email" placeholder="you@email.com" />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" name="message" rows={4} required placeholder="Tell me about your project" />
        </div>
        <Button type="submit" size="lg" className="w-full">
          <PaperPlaneTilt size={18} weight="fill" /> {sent ? 'Opening your email app…' : 'Send message'}
        </Button>
      </form>
    </Card>
  )
}
