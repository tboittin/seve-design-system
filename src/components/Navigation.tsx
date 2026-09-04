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
    <li>
      <a
        href={`#${id}`}
        className={`group flex items-center gap-3 rounded-full py-1.5 pl-1.5 pr-1.5 transition-all duration-300 ${
          isActive
            ? 'bg-forest-900 text-cream-50 shadow-sm'
            : 'text-forest-500 hover:bg-forest-50/80 hover:text-forest-800'
        }`}
        aria-current={isActive ? 'true' : undefined}
      >
        <span className="grid size-10 place-items-center">
          <Icon className="size-5" />
        </span>
        <span
          className={`overflow-hidden whitespace-nowrap text-sm font-bold transition-all duration-300 ${
            isActive
              ? 'max-w-40 pr-3 opacity-100'
              : 'max-w-0 opacity-0 group-hover:max-w-40 group-hover:opacity-100 group-hover:pr-3'
          }`}
        >
          {label}
        </span>
      </a>
    </li>
  )
}