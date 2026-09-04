import { skills } from '../data/content'
import { toneStyles } from '../lib/tokens'
import { SectionHeader } from './ui/SectionHeader'

export function Skills() {
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
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
            {skills.map((skill) => {
              const s = toneStyles[skill.tone]

              return (
                <div
                  key={skill.name}
                  className="group flex flex-col items-center gap-3 rounded-3xl p-5 text-center transition-all duration-300 hover:bg-white hover:shadow-organic"
                >
                  {/* Pastille icône */}
                  <span
                    className={`grid size-16 place-items-center rounded-full ${s.solid} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <skill.icon className="size-8" />
                  </span>

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
            })}
          </div>
        </div>
      </div>
    </section>
  )
}