export default function Marquee({ tools }) {
  // Duplicate the list so the loop is seamless (track animates -50%)
  const loop = [...tools, ...tools]
  return (
    <section
      aria-label="Tools I work with"
      className="reveal mb-7 flex flex-col gap-4 rounded-lg border bg-secondary p-3.5 lg:flex-row lg:items-center lg:gap-5"
    >
      <div className="flex shrink-0 flex-col px-2 leading-tight lg:border-r lg:pr-5">
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary dark:text-secondary-foreground">
          Daily drivers
        </span>
        <strong className="text-lg font-semibold">Tools I work with</strong>
      </div>

      <div className="group min-w-0 flex-1 overflow-hidden rounded-xl bg-card [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <ul className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {loop.map((t, i) => {
            const Icon = t.icon
            return (
              <li
                key={`${t.name}-${i}`}
                aria-hidden={i >= tools.length}
                className="flex items-center gap-2.5 whitespace-nowrap px-7 py-3.5 text-sm font-medium"
              >
                <Icon size={22} weight="duotone" className="text-primary" />
                {t.name}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
