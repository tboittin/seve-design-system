import type { Tone } from '../../lib/tokens'
import { toneStyles } from '../../lib/tokens'

export interface SectionHeaderProps {
  kicker: string
  title: string
  description?: string
  align?: 'left' | 'center'
  tone?: Tone
}

export function SectionHeader({
  kicker,
  title,
  description,
  align = 'center',
  tone: t = 'sage',
}: SectionHeaderProps) {
  const s = toneStyles[t]

  return (
    <header
      className={`mb-12 ${align === 'center' ? 'mx-auto max-w-2xl text-center' : ''}`}
    >
      <p className={`mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] ${s.text}`}>
        <span className={`inline-block size-2 rounded-full ${s.dot}`} />
        {kicker}
      </p>
      <h2 className="font-display text-3xl font-extrabold text-forest-900 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-forest-500">
          {description}
        </p>
      )}
    </header>
  )
}