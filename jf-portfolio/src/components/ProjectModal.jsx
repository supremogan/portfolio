import { useEffect, useState } from 'react'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function ProjectModal({ project, onClose }) {
  const [index, setIndex] = useState(0)
  const shots = project?.screenshots ?? []

  useEffect(() => setIndex(0), [project])

  const go = (d) => setIndex((i) => (i + d + shots.length) % shots.length)

  useEffect(() => {
    if (!project) return
    const onKey = (e) => {
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  return (
    <Dialog open={!!project} onOpenChange={(o) => !o && onClose()}>
      <DialogContent>
        {project && (
          <>
            <div className="pr-12">
              <small className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                {project.type}
              </small>
              <DialogTitle>{project.title}</DialogTitle>
              <DialogDescription className="mt-1">{project.desc}</DialogDescription>
            </div>

            <div className="relative mt-4 overflow-hidden rounded-xl border bg-background">
              <img
                key={shots[index].src}
                src={shots[index].src}
                alt={shots[index].alt}
                className="aspect-[16/10] w-full animate-[fade-in_0.35s_ease] object-cover"
              />
              {shots.length > 1 && (
                <>
                  <Button
                    variant="secondary"
                    size="icon"
                    aria-label="Previous screenshot"
                    onClick={() => go(-1)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 shadow-md"
                  >
                    <CaretLeft size={20} weight="bold" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    aria-label="Next screenshot"
                    onClick={() => go(1)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 shadow-md"
                  >
                    <CaretRight size={20} weight="bold" />
                  </Button>
                  <span className="absolute bottom-3 right-3 rounded-full bg-[#0b1437]/75 px-3 py-1 text-xs font-medium text-white">
                    {index + 1} / {shots.length}
                  </span>
                </>
              )}
            </div>

            <div className="mt-3 flex gap-2.5 overflow-x-auto pb-1" role="tablist" aria-label="Screenshots">
              {shots.map((s, i) => (
                <button
                  key={s.src}
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Show screenshot ${i + 1}: ${s.caption}`}
                  onClick={() => setIndex(i)}
                  className={cn(
                    'w-28 shrink-0 cursor-pointer overflow-hidden rounded-lg border-2 transition sm:w-32',
                    i === index ? 'border-primary' : 'border-transparent opacity-60 hover:opacity-100'
                  )}
                >
                  <img src={s.src} alt="" className="aspect-[16/10] w-full object-cover" />
                </button>
              ))}
            </div>

            <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm font-medium">{shots[index].caption}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
