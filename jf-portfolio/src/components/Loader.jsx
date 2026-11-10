import { useEffect, useState } from 'react'
import { Lightbulb, PencilRuler, Code, RocketLaunch, Check } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'

const MIN_MS = 2600 // minimum time the loader stays visible
const EXIT_MS = 600 // fade-out duration (keep in sync with duration-[600ms] below)

const STEPS = [
  { label: 'Idea', icon: Lightbulb },
  { label: 'Design', icon: PencilRuler },
  { label: 'Code', icon: Code },
  { label: 'Launch', icon: RocketLaunch },
]
const SEG = 100 / (STEPS.length - 1) // progress covered by each connecting line

const clamp = (n) => Math.min(Math.max(n, 0), 1)

export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    const start = performance.now()
    let loaded = document.readyState === 'complete'
    let raf
    let finished = false

    const onLoad = () => (loaded = true)
    if (!loaded) window.addEventListener('load', onLoad)

    const tick = (now) => {
      const t = Math.min((now - start) / MIN_MS, 1)
      // Linear-ish run; hold at 92% until the page (fonts, images) has fully loaded
      const target = loaded && t >= 1 ? 100 : Math.min(t * 100, 92)
      setProgress((p) => Math.max(p, target))

      if (loaded && t >= 1 && !finished) {
        finished = true
        setProgress(100)
        setTimeout(() => setLeaving(true), 900) // let the success message be read
        setTimeout(onDone, 900 + EXIT_MS)
        return
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    // Lock scroll while the loader is visible
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('load', onLoad)
      document.body.style.overflow = prev
    }
  }, [onDone])

  const done = progress >= 100
  // Step i is complete once the line before it is full (first step completes almost immediately)
  const stepDone = (i) => (i === 0 ? progress > 6 : progress >= i * SEG)

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading John Fuentes portfolio"
      className={cn(
        'fixed inset-0 z-[100] overflow-hidden bg-background transition-all duration-[600ms] ease-in-out',
        leaving ? 'pointer-events-none -translate-y-6 opacity-0' : 'opacity-100'
      )}
    >
      {/* Decorative organic outlines */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1000 600"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 size-full text-primary/25"
      >
        <g fill="none" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke">
          <path vectorEffect="non-scaling-stroke" d="M300 -20 C 420 160, 620 230, 760 190 C 900 150, 940 60, 900 -20" />
          <path vectorEffect="non-scaling-stroke" d="M120 180 C 140 60, 260 40, 330 110 C 400 180, 380 290, 270 310 C 170 330, 100 270, 120 180 Z" />
          <path vectorEffect="non-scaling-stroke" d="M640 470 C 640 380, 760 330, 850 380 C 940 430, 930 540, 820 570 C 720 595, 640 550, 640 470 Z" />
          <path vectorEffect="non-scaling-stroke" d="M-20 420 C 80 480, 150 560, 190 640" />
          <path vectorEffect="non-scaling-stroke" d="M960 120 C 990 200, 1010 260, 1030 330" />
        </g>
      </svg>

      <div className="relative mx-auto flex h-full max-w-[1500px] flex-col justify-center px-[7vw]">
        <h2 className="text-[clamp(2.4rem,7.4vw,6.4rem)] font-extrabold leading-[1.05] tracking-tight text-foreground">
          Build it clean.
          <br className="sm:hidden" /> Deploy it <span className="text-primary">smooth.</span>
        </h2>

        {/* Workflow */}
        <div className="mt-[clamp(2rem,7vh,4.5rem)]">
          <div className="flex items-center">
            {STEPS.map((s, i) => {
              const Icon = s.icon
              const ok = stepDone(i)
              return (
                <div key={s.label} className="contents">
                  <div className="relative shrink-0">
                    <div
                      className={cn(
                        'relative grid size-14 place-items-center rounded-[1.1rem] border-2 bg-card transition-all duration-500 sm:size-20 sm:rounded-3xl',
                        ok
                          ? 'border-primary text-foreground shadow-[0_8px_24px_rgba(0,56,255,0.22)]'
                          : 'border-border text-muted-foreground'
                      )}
                    >
                      <Icon className="size-6 sm:size-8" weight={ok ? 'bold' : 'regular'} />
                      {/* connector dots */}
                      {i > 0 && (
                        <i className={cn('absolute -left-1.5 top-1/2 size-3 -translate-y-1/2 rounded-full border-2 bg-card transition-colors duration-500', ok ? 'border-primary' : 'border-border')} />
                      )}
                      {i < STEPS.length - 1 && (
                        <i className={cn('absolute -right-1.5 top-1/2 size-3 -translate-y-1/2 rounded-full border-2 bg-card transition-colors duration-500', ok ? 'border-primary' : 'border-border')} />
                      )}
                    </div>
                    {/* check badge */}
                    <span
                      className={cn(
                        'absolute -right-2 -top-2 grid size-6 place-items-center rounded-full bg-primary text-primary-foreground shadow-md transition-all duration-300 sm:-right-3 sm:-top-3 sm:size-7',
                        ok ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                      )}
                    >
                      <Check className="size-3.5 sm:size-4" weight="bold" />
                    </span>
                    <span className="absolute left-1/2 top-full mt-2.5 -translate-x-1/2 whitespace-nowrap text-xs font-medium sm:mt-3 sm:text-sm">
                      {s.label}
                    </span>
                  </div>

                  {i < STEPS.length - 1 && (
                    <div className="mx-0 h-[3px] flex-1 overflow-hidden rounded-full bg-border">
                      <div className="h-full rounded-full bg-primary" style={{ width: `${clamp((progress - i * SEG) / SEG) * 100}%` }} />
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <p
            className={cn(
              'mt-14 flex items-center gap-3 text-base font-medium transition-colors duration-500 sm:mt-16 sm:text-lg',
              done ? 'text-primary' : 'text-muted-foreground'
            )}
          >

          </p>
        </div>
      </div>
    </div>
  )
}
