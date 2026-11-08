import {
  House,
  FolderOpen,
  Stack,
  User,
  ChatCircle,
  FacebookLogo,
  LinkedinLogo,
  GithubLogo,
  Moon,
  Sun,
  SealCheck,
} from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import profile from '../assets/face.jpg'

const ICONS = { House, FolderOpen, Stack, User, ChatCircle }

const SOCIALS = [
  { label: 'Facebook', href: 'https://facebook.com/johngan345', icon: FacebookLogo },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/john-fuentes-2b7aa73a4/', icon: LinkedinLogo },
  { label: 'GitHub', href: 'https://github.com/supremogan', icon: GithubLogo },
]

export default function Sidebar({ nav, active, onNavigate, dark, onToggleTheme, open }) {
  return (
    <aside
      aria-label="Primary"
      className={cn(
        'fixed inset-y-0 left-0 z-40 flex w-[280px] flex-col border-r bg-card px-6 pb-6 pt-8 transition-transform duration-300',
        open ? 'translate-x-0 shadow-2xl' : '-translate-x-full lg:translate-x-0'
      )}
    >
      <div className="border-b pb-6 text-center">
        <div
          aria-hidden="true"
          className="mx-auto mb-4 grid size-28 animate-float place-items-center rounded-full bg-gradient-to-br from-primary to-[#5b8bff] text-4xl font-bold text-white shadow-lg ring-[6px] ring-secondary"
        >
          <img src={profile} alt="profile" className="h-full w-full rounded-full object-cover"/>
        </div>
        <h1 className="flex items-center justify-center gap-1.5 text-xl font-bold">
          John Fuentes <SealCheck weight="fill" className="size-5 text-primary" aria-label="Verified" />
        </h1>
        <p className="mt-0.5 text-sm text-muted-foreground">Web Developer · React</p>

        <div className="mt-4 flex justify-center gap-2.5">
          {SOCIALS.map(({ label, href, icon: Icon }) => (
            <Button key={label} asChild variant="outline" size="icon" className="size-10 rounded-full">
              <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <Icon weight="fill" size={20} />
              </a>
            </Button>
          ))}
          <Button variant="outline" size="icon" onClick={onToggleTheme} aria-label="Toggle dark mode">
            {dark ? <Sun weight="fill" size={20} /> : <Moon weight="fill" size={20} />}
          </Button>
        </div>
      </div>

      <nav className="mt-6 flex-1" aria-label="Sections">
        <ul className="grid gap-1.5">
          {nav.map((item) => {
            const Icon = ICONS[item.icon]
            const isActive = active === item.id
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={(e) => {
                    e.preventDefault()
                    onNavigate(item.id)
                  }}
                  className={cn(
                    'flex items-center gap-3.5 rounded-xl px-4 py-3 font-medium text-muted-foreground transition-all duration-300 hover:translate-x-1 hover:bg-accent hover:text-accent-foreground',
                    isActive && 'bg-accent font-semibold text-accent-foreground'
                  )}
                >
                  <Icon size={22} weight={isActive ? 'fill' : 'regular'} />
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>

      <footer className="border-t pt-4 text-xs text-muted-foreground">
        <p>© 2026 John Fuentes.</p>
        <p>All rights reserved.</p>
      </footer>
    </aside>
  )
}
