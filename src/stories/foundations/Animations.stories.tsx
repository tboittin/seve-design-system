import { animated } from '@react-spring/web'
import type { Meta } from '@storybook/react'
import { useOscillate, useOscillate2D, useSlideIn, useSpringBar, useStaggeredSlideIn } from '../../hooks'

/* ============================================================================
   Fondations — Animations (React Spring)
   Les quatre hooks du design system : useSlideIn, useStaggeredSlideIn,
   useOscillate, useSpringBar — avec le style Sève (organique, « la tech
   prend racine »).
   ========================================================================== */

const meta: Meta = {
  title: 'Fondations/Animations',
  parameters: { layout: 'padded' },
}
export default meta

/* ---------- useSlideIn : apparition au scroll ---------- */

export function SlideIn() {
  const [ref, spring] = useSlideIn({ y: 40 })
  return (
    <div className="flex flex-col gap-4">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-sage-600">useSlideIn — apparition au scroll</p>
      <p className="text-sm text-forest-500">
        Faites défiler jusqu'à la carte : elle pousse vers le haut avec un ressort naturel.
      </p>
      <div className="flex min-h-[70vh] items-end">
        <animated.div
          ref={ref}
          style={spring}
          className="w-full rounded-3xl border border-forest-100 bg-white p-8 shadow-organic"
        >
          <p className="font-display text-2xl font-extrabold text-forest-900">Une carte qui pousse</p>
          <p className="mt-2 text-sm text-forest-500">
            Config par défaut : masse 1, tension 220, friction 26 — un élan souple.
          </p>
        </animated.div>
      </div>
    </div>
  )
}

/* ---------- useStaggeredSlideIn : cascade ---------- */

export function Staggered() {
  const [ref, springs] = useStaggeredSlideIn<HTMLUListElement>(5, { y: 20, stagger: 90 })
  const items = [
    'React — la greffe',
    'TypeScript — le terreau',
    'Node.js — l’irrigation',
    'PostgreSQL — les racines',
    'CI / CD — la serre',
  ]
  return (
    <div className="flex flex-col gap-4">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-sage-600">useStaggeredSlideIn — cascade d’enfants</p>
      <ul ref={ref} className="flex flex-col gap-3">
        {items.map((item, i) => (
          <animated.li
            key={item}
            style={springs[i]}
            className="flex items-center gap-3 rounded-2xl border border-cream-200 bg-white px-5 py-4 text-sm font-semibold text-forest-700 shadow-organic-sm"
          >
            <span className="grid size-7 place-items-center rounded-full bg-sage-100 text-xs font-bold text-sage-700">
              {i + 1}
            </span>
            {item}
          </animated.li>
        ))}
      </ul>
    </div>
  )
}

/* ---------- useOscillate : balancement continu ---------- */

export function Oscillations() {
  const xSpring = useOscillate({ range: 5, axis: 'x' })
  const ySpring = useOscillate({ range: 6, axis: 'y', mass: 0.7 })
  const rotSpring = useOscillate({ range: 6, axis: 'rotate' })
  const twoDSpring = useOscillate2D({ xRange: 3, yRange: 4, rotateRange: 3 })

  const items = [
    { spring: xSpring, label: 'axe x — feuille qui oscille' },
    { spring: ySpring, label: 'axe y — flottement vertical' },
    { spring: rotSpring, label: 'rotation — pousse qui balance' },
    { spring: twoDSpring, label: '2D — balancement naturel (feuille au vent)' },
  ]

  return (
    <div className="flex flex-col gap-6">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-sage-600">useOscillate — balancement continu</p>
      <div className="grid gap-6 sm:grid-cols-2">
        {items.map(({ spring, label }) => (
          <div key={label} className="flex items-center gap-5 rounded-3xl border border-forest-100 bg-white p-6 shadow-organic-sm">
            <animated.div
              style={spring}
              className="grid size-14 shrink-0 place-items-center rounded-full bg-sage-100 text-sage-600"
              aria-hidden="true"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="size-7">
                <path d="M12 22V9" />
                <path d="M12 9c0-2.4 1.6-4 4-4 .1 2.4-1.6 4-4 4Z" />
                <path d="M12 13c0-2.4-1.6-4-4-4 0 2.4 1.6 4 4 4Z" />
              </svg>
            </animated.div>
            <div>
              <p className="text-sm font-bold text-forest-800">{label}</p>
              <p className="mt-1 text-xs text-forest-400">
                {label.includes('2D') ? 'translate + rotation combinés' : 'boucle infinie, inversion douce'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ---------- useSpringBar : remplissage physique ---------- */

export function SpringBars() {
  const levels = [30, 55, 75, 90]
  return (
    <div className="flex flex-col gap-4">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-sage-600">useSpringBar — remplissage par ressort</p>
      <p className="text-sm text-forest-500">
        La barre se remplit avec une physique de ressort : élan au départ, ralentissement progressif.
      </p>
      <div className="flex flex-col gap-6 rounded-3xl border border-forest-100 bg-white p-6 shadow-organic">
        {levels.map((level, i) => (
          <SpringBarDemo key={level} level={level} delay={i * 150} />
        ))}
      </div>
    </div>
  )
}

function SpringBarDemo({ level, delay }: { level: number; delay: number }) {
  const [ref, spring] = useSpringBar<HTMLDivElement>(level, { delay, config: { mass: 0.9, tension: 200, friction: 28 } })
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <span className="text-sm font-bold text-forest-800">Graines germées — {level}%</span>
        <span className="text-sm font-bold tabular-nums text-sage-600">{level}%</span>
      </div>
      <div ref={ref} className="mt-2 h-3 overflow-hidden rounded-full bg-forest-100">
        <animated.div style={spring} className="h-full rounded-full bg-gradient-to-r from-sage-400 to-forest-600" />
      </div>
    </div>
  )
}