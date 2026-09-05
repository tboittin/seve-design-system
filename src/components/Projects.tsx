import { animated } from '@react-spring/web'
import { projects } from '../data/content'
import { ArrowRightIcon } from '../lib/icons'
import { Badge } from './ui/Badge'
import { Card } from './ui/Card'
import { SectionHeader } from './ui/SectionHeader'
import { useStaggeredSlideIn } from '../hooks'

/* ============================================================================
   Projects — « Quelques pousses au soleil ».
   Les cartes entrent en cascade quand la grille apparaît au scroll.
   ========================================================================== */

export function Projects() {
  const [gridRef, cardSprings] = useStaggeredSlideIn<HTMLDivElement>(projects.length, {
    y: 28,
    stagger: 100,
    config: { mass: 1, tension: 230, friction: 28 },
  })

  return (
    <section
      id="projets"
      className="relative scroll-mt-24 py-24 lg:py-32"
    >
      {/* Fond */}
      <div className="pointer-events-none absolute inset-0 bg-sage-50/30" aria-hidden="true" />
      <div className="pointer-events-none absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-cream-100 to-transparent" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-cream-100 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeader
          kicker="Projets"
          title="Quelques pousses au soleil"
          description="Des outils nés d'un besoin réel, cultivés avec soin."
        />

        <div ref={gridRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <animated.div style={cardSprings[i]} key={project.id} className="h-full">
              <Card interactive className="flex h-full flex-col p-6 sm:p-7">
                {/* Visuel circulaire */}
                <div className="mb-5 flex items-start justify-between">
                  <div
                    className={`grid size-20 shrink-0 place-items-center rounded-full bg-gradient-to-br ${project.visual} text-cream-50 shadow-organic-sm`}
                  >
                    <project.icon className="size-9" />
                  </div>
                </div>

                {/* Contenu */}
                <h3 className="font-display text-xl font-bold text-forest-900 transition-colors duration-200 group-hover:text-sage-700">
                  {project.title}
                </h3>
                <p className="mt-1.5 text-sm font-medium text-forest-500">
                  {project.tagline}
                </p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-forest-500">
                  {project.description}
                </p>

                {/* Badges + lien */}
                <div className="mt-6 flex flex-wrap items-center gap-2">
                  {project.badges.map((badge) => (
                    <Badge key={badge.label} tone={badge.tone}>
                      {badge.label}
                    </Badge>
                  ))}
                  <span className="ml-auto inline-flex size-8 items-center justify-center rounded-full text-forest-400 transition-colors group-hover:text-sage-600">
                    <ArrowRightIcon className="size-4" />
                  </span>
                </div>
              </Card>
            </animated.div>
          ))}
        </div>
      </div>
    </section>
  )
}