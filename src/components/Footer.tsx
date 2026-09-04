import { SproutIcon, GithubIcon, ArrowRightIcon } from '../lib/icons'

const FOOTER_LINKS = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#parcours', label: 'Parcours' },
  { href: '#projets', label: 'Projets' },
  { href: '#competences', label: 'Compétences' },
  { href: '#contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="border-t border-forest-100 pb-28 pt-10 lg:pb-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center gap-1 sm:items-start">
            <span className="inline-flex items-center gap-2 font-display text-xl font-extrabold text-forest-900">
              <SproutIcon className="size-6 text-sage-500" />
              Sève
            </span>
            <p className="text-xs text-forest-400">
              La tech prend racine
            </p>
          </div>

          {/* Navigation secondaire */}
          <nav aria-label="Navigation secondaire" className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-sm font-semibold text-forest-500">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-forest-800"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social + copyright */}
          <div className="flex flex-col items-center gap-3 sm:items-end">
            <a
              href="https://github.com/tboittin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest-500 transition-colors hover:text-forest-800"
            >
              <GithubIcon className="size-4" />
              tboittin
              <ArrowRightIcon className="size-3 -rotate-45" />
            </a>
            <p className="text-xs text-forest-400">
              &copy; {new Date().getFullYear()} Sève — semé, arrosé, poussé{' '}
              <span role="img" aria-label="amour">❤️</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}