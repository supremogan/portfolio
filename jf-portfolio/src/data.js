import {
  GitBranch,
  GithubLogo,
  Code,
  Sparkle,
  Atom,
  FileJs,
  FileHtml,
  FileCss,
  FigmaLogo,
  TerminalWindow,
  Database,
  Rocket,
  Browser,
  DeviceMobile,
  MagnifyingGlass,
  PaintBrush,
  Wrench,
  Lightning,
} from '@phosphor-icons/react'

export const NAV = [
  { id: 'home', label: 'Home', icon: 'House' },
  { id: 'projects', label: 'Projects', icon: 'FolderOpen' },
  { id: 'services', label: 'Services', icon: 'Stack' },
  { id: 'about', label: 'About', icon: 'User' },
  { id: 'contact', label: 'Contact', icon: 'ChatCircle' },
]

export const TOOLS = [
  { name: 'Git', icon: GitBranch },
  { name: 'GitHub', icon: GithubLogo },
  { name: 'Claude', icon: Sparkle },
  { name: 'VS Code', icon: Code },
  { name: 'React', icon: Atom },
  { name: 'JavaScript', icon: FileJs },
  { name: 'HTML5', icon: FileHtml },
  { name: 'CSS3', icon: FileCss },
  { name: 'Figma', icon: FigmaLogo },
  { name: 'Terminal', icon: TerminalWindow },
  { name: 'Vite', icon: Lightning },
  { name: 'REST APIs', icon: Database },
]

// Replace the files in /public/projects with your real screenshots (png/jpg/webp/svg),
// or point `src` to any image URL. Add or remove entries freely.
export const PROJECTS = [
  {
    title: 'Kasalukuyan',
    type: 'Web Application',
    desc: 'A fast, responsive web-based LMS that utilizes AI algorithms',
    tags: ['React', 'Vite', 'TailwindCSS', 'REST API', 'Supabase'],
    screenshots: [
      { src: '/projects/web1.png', alt: 'landing page', caption: 'Landing' },
      { src: '/projects/web2.png', alt: 'login popup', caption: 'Login' },
      { src: '/projects/web3.png', alt: 'dashboard', caption: 'Dashboard' },
    ],
  },
  {
    title: 'Kasalukuyan',
    type: '2.5D Game Ap',
    desc: 'Analytics dashboard with live charts and clean data tables.',
    tags: ['Unity', 'REST API'],
    screenshots: [
      { src: '/projects/game1.jpg', alt: 'main', caption: 'Main' },
      { src: '/projects/game2.jpg', alt: 'login popup', caption: 'Login' },
      { src: '/projects/game3.jpg', alt: 'starting', caption: 'Game Landing' },
      { src: '/projects/game4.png', alt: 'fighting', caption: 'Turn Based' },
    ],
  },
]

export const SERVICES = [
  { title: 'Website Development', desc: 'Custom, fast websites built with React and modern tooling.', icon: Browser },
  { title: 'Web Apps', desc: 'Interactive apps and dashboards connected to your APIs.', icon: Rocket },
  { title: 'Responsive Design', desc: 'Pixel-clean layouts that look great on every screen.', icon: DeviceMobile },
  { title: 'SEO Optimization', desc: 'Semantic markup, meta tags and performance for better ranking.', icon: MagnifyingGlass },
  { title: 'UI Implementation', desc: 'Turn your Figma designs into polished, accessible interfaces.', icon: PaintBrush },
  { title: 'Maintenance', desc: 'Bug fixes, updates and improvements after launch.', icon: Wrench },
]
