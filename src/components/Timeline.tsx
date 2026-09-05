import { animated } from '@react-spring/web'
import { seasons } from '../data/content'
import { SectionHeader } from './ui/SectionHeader'
import { useStaggeredSlideIn } from '../hooks'

/* ============================================================================
   Timeline — « Quatre saisons, une même sève ».
   Chaque saison entre en cascade quand elle apparaît au scroll, alternée
   gauche / droite sur desktop.
   ========================================================================== */

export function Timeline() {
  const [listRef, seasonSprings] = useStaggeredSlideIn<HTMLOListElement>(seasons.length, {
    y: 28,
    stagger: 120,
    config: { mass: 1, tension: 220, friction: 28 },
  })

  return (
    <section
      id="parcours"
      className="relative scroll-mt-24 overflow-hidden py-24 lg:py-32"
    >
      {/* Fond discret */}
      <div className="pointer-events-none absolute inset-0 paper-dots opacity-30" aria-hidden="true" />

      <div className="relative mx-auto max-w-5xl px-6">
        <SectionHeader
          kicker="Mon parcours"
          title="Quatre saisons, une même sève"
          description="De l'agronomie au code, chaque étape cultive la suivante."
        />

        {/* Timeline verticale */}
        <div className="relative">
          {/* Ligne centrale */}
          <div
            className="absolute left-6 top-0 h-full w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-sage-300 via-mustard-300 via-terracotta-300 to-winter-300 max-lg:hidden lg:left-1/2"
            aria-hidden="true"
          />

          {/* Éléments */}
          <ol ref={listRef} className="space-y-14 lg:space-y-24">
            {seasons.map((season, index) => {
              const isLeft = index % 2 === 0
              const sideClasses = isLeft
                ? 'lg:col-start-1 lg:pr-16 lg:text-right'
                : 'lg:col-start-2 lg:pl-16'
              const s = season

              return (
                <animated.li
                  key={s.id}
                  style={seasonSprings[index]}
                  className="relative grid lg:grid-cols-2"
                >
                  {/* Point sur la ligne */}
                  <span
                    className={`absolute left-6 top-2 z-10 size-5 -translate-x-1/2 rounded-full border-[4px] border-cream-100 shadow-organic-sm max-lg:hidden lg:left-1/2`}
                    style={{ backgroundColor: `var(--color-${s.tone}-500)` }}
                    aria-hidden="true"
                  />

                  {/* Carte */}
                  <div className={`pl-16 lg:pl-0 ${sideClasses}`}>
                    <div className="rounded-3xl border border-forest-100 bg-white p-6 shadow-organic transition-all duration-300 hover:shadow-organic-lg sm:p-8">
                      {/* En-tête */}
                      <div className="mb-4 flex flex-wrap items-center gap-4">
                        {/* Icône */}
                        <span
                          className={`grid size-12 shrink-0 place-items-center rounded-full ${s.tone === 'sage' ? 'bg-sage-100 text-sage-600' : s.tone === 'mustard' ? 'bg-mustard-100 text-mustard-700' : s.tone === 'terracotta' ? 'bg-terracotta-100 text-terracotta-600' : 'bg-winter-100 text-winter-600'}`}
                        >
                          <s.icon className="size-6" />
                        </span>

                        <div>
                          <h3 className="font-display text-xl font-bold text-forest-900">
                            {s.name}
                            <span className="font-medium text-forest-400">
                              {' · '}
                            </span>
                            <span
                              className={
                                s.tone === 'sage'
                                  ? 'text-sage-600'
                                  : s.tone === 'mustard'
                                    ? 'text-mustard-600'
                                    : s.tone === 'terracotta'
                                      ? 'text-terracotta-600'
                                      : 'text-winter-600'
                              }
                            >
                              {s.theme}
                            </span>
                          </h3>
                          <span className="text-xs font-semibold text-forest-400">
                            {s.period}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-forest-600 leading-relaxed">
                        {s.description}
                      </p>

                      {/* Tags */}
                      {s.tags.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {s.tags.map((tag) => (
                            <span
                              key={tag}
                              className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${
                                s.tone === 'sage'
                                  ? 'bg-sage-100 text-sage-700'
                                  : s.tone === 'mustard'
                                    ? 'bg-mustard-100 text-mustard-800'
                                    : s.tone === 'terracotta'
                                      ? 'bg-terracotta-100 text-terracotta-700'
                                      : 'bg-winter-100 text-winter-700'
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </animated.li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}