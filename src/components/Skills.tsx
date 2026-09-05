import { animated } from '@react-spring/web'
import { skills } from '../data/content'
import { toneStyles } from '../lib/tokens'
import { useStaggeredSlideIn, useOscillate } from '../hooks'
import { SectionHeader } from './ui/SectionHeader'
import type { Skill } from '../data/content'

/* ============================================================================
   Skills — « Des graines bien semées ».
   Les cartes entrent en cascade au scroll ; chaque pastille d'icône
   oscille doucement (React Spring), comme une graine qui germe.
   ========================================================================== */

export function Skills() {
  const [gridRef, cardSprings] = useStaggeredSlideIn<HTMLDivElement>(skills.length, {
    y: 24,
    stagger: 90,
    config: { mass: 1, tension: 240, friction: 28 },
  })

  return (
    <section
      id="competences"
      className="relative scroll-mt-24 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          kicker="Compétences"
          title="Des graines bien semées"
          description="Chaque outil est choisi comme une variété : pour qu'il s'enracine bien dans vos projets."
        />

        {/* Champ de graines */}
        <div className="mx-auto max-w-4xl rounded-[32px] border border-cream-200 bg-white/60 p-8 sm:p-12 paper-dots">
          <div ref={gridRef} className="grid grid-cols-2 gap-6 sm:grid-cols-3">
            {skills.map((skill, i) => (
              <animated.div style={cardSprings[i]} key={skill.name}>
                <SkillCard skill={skill} />
              </animated.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* Une graine : pastille qui oscille + nom + métaphore */
function SkillCard({ skill }: { skill: Skill }) {
  const s = toneStyles[skill.tone]
  const iconSpring = useOscillate({ range: 3, axis: 'rotate', mass: 0.5 })

  return (
    <div className="group flex flex-col items-center gap-3 rounded-3xl p-5 text-center transition-all duration-300 hover:bg-white hover:shadow-organic">
      {/* Pastille icône */}
      <animated.span
        style={{ ...iconSpring, transformBox: 'fill-box' }}
        className={`grid size-16 place-items-center rounded-full ${s.solid} transition-transform duration-300 group-hover:scale-110`}
      >
        <skill.icon className="size-8" />
      </animated.span>

      {/* Nom */}
      <p className="font-display text-lg font-bold text-forest-900">
        {skill.name}
      </p>

      {/* Métaphore */}
      <p className={`-mt-2 text-sm italic ${s.text}`}>
        — {skill.metaphor}
      </p>
    </div>
  )
}