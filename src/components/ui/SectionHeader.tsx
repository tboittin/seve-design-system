import { animated } from '@react-spring/web'
import type { Tone } from '../../lib/tokens'
import { toneStyles } from '../../lib/tokens'
import { useSlideIn } from '../../hooks'

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

  /* Entrée en trois temps : kicker → titre → description */
  const [kickerRef, kickerSpring] = useSlideIn<HTMLParagraphElement>({ y: 16, config: { mass: 1, tension: 260, friction: 30 } })
  const [titleRef, titleSpring] = useSlideIn<HTMLHeadingElement>({ y: 20, delay: 80 })
  const [descRef, descSpring] = useSlideIn<HTMLParagraphElement>({ y: 16, delay: 150, config: { mass: 1, tension: 200, friction: 28 } })

  return (
    <header
      className={`mb-12 ${align === 'center' ? 'mx-auto max-w-2xl text-center' : ''}`}
    >
      <animated.p
        ref={kickerRef}
        style={kickerSpring}
        className={`mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] ${s.text}`}
      >
        <span className={`inline-block size-2 rounded-full ${s.dot}`} />
        {kicker}
      </animated.p>
      <animated.h2 ref={titleRef} style={titleSpring} className="font-display text-3xl font-extrabold text-forest-900 sm:text-4xl lg:text-5xl">
        {title}
      </animated.h2>
      {description && (
        <animated.p ref={descRef} style={descSpring} className="mt-4 text-lg leading-relaxed text-forest-500">
          {description}
        </animated.p>
      )}
    </header>
  )
}