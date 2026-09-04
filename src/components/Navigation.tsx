import { useMemo } from 'react'
import { navItems } from '../data/content'
import { useActiveSection } from '../hooks/useActiveSection'
import type { IconComponent } from '../lib/icons'

export function Navigation() {
  const ids = useMemo(() => navItems.map((n) => n.id), [])
  const activeId = useActiveSection(ids)

  return (
    <>
      {/* Desktop — latéral discret */}
      <nav
        className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
        aria-label="Navigation principale"
      >
        <ul className="flex flex-col gap-1.5 rounded-full border border-forest-100 bg-white/80 p-2.5 shadow-organic-sm backdrop-blur-lg">
          {navItems.map(({ id, label, icon: Icon }) => (
            <NavPill
              key={id}
              id={id}
              label={label}
              icon={Icon}
              isActive={activeId === id}
            />
          ))}
        </ul>
      </nav>

      {/* Mobile — barre flottante en bas */}
      <nav
        className="fixed inset-x-0 bottom-4 z-40 flex justify-center lg:hidden"
        aria-label="Navigation principale"
      >
        <ul className="mx-auto flex items-center gap-1 rounded-full border border-forest-100 bg-white/85 p-1.5 shadow-organic-lg backdrop-blur-lg">
          {navItems.map(({ id, label, icon: Icon }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`flex flex-col items-center gap-0.5 rounded-full px-3 py-1.5 text-[10px] font-bold transition-all duration-200 ${
                  activeId === id
                    ? 'bg-forest-900 text-cream-50 shadow-sm'
                    : 'text-forest-500 hover:bg-forest-50 hover:text-forest-800'
                }`}
                aria-current={activeId === id ? 'true' : undefined}
              >
                <span className="grid size-7 place-items-center">
                  <Icon className="size-4" />
                </span>
                <span className="truncate leading-none">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

/* ------------------------------------------------------------------ */
/*  Pilulier de navigation desktop                                     */
/* ------------------------------------------------------------------ */

function NavPill({
  id,
  label,
  icon: Icon,
  isActive,
}: {
  id: string
  label: string
  icon: IconComponent
  isActive: boolean
}) {
  return (
    <li className="relative">
      <a
        href={`#${id}`}
        aria-label={label}
        className={`group relative grid size-11 place-items-center rounded-full transition-all duration-300 ${
          isActive
            ? 'bg-forest-900 text-cream-50 shadow-sm'
            : 'text-forest-500 hover:bg-forest-50/80 hover:text-forest-800'
        }`}
        aria-current={isActive ? 'true' : undefined}
      >
        <Icon className="size-5" />

        {/* Libellé flottant — visible pour la section active, au survol sinon */}
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute left-full top-1/2 ml-3 -translate-y-1/2 whitespace-nowrap rounded-full bg-forest-900 px-3 py-1.5 font-display text-xs font-bold text-cream-50 shadow-organic-sm transition-all duration-300 ${
            isActive
              ? 'translate-x-0 opacity-100'
              : 'translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
          }`}
        >
          {label}
        </span>
      </a>
    </li>
  )
}