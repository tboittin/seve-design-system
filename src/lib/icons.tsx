import type { ReactNode, SVGProps } from 'react'

export type IconComponent = (props: SVGProps<SVGSVGElement>) => ReactNode

type IconProps = SVGProps<SVGSVGElement>

/**
 * Base d'icône Sève : trait rond, extrémités arrondies,
 * cohérent avec l'esprit organique du design system.
 */
function Base({ children, ...props }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  )
}

/** Pousse naissante — formation, débuts */
export const SproutIcon = (props: IconProps) => (
  <Base {...props}>
    <path d="M12 22v-10" />
    <path d="M12 12c0-3.2-2.5-5.4-5.5-5.4.2 3.1 2.6 5 5.5 5.4Z" />
    <path d="M12 9.5c0-2.8 2.2-4.7 4.8-4.7-.1 2.7-2.2 4.3-4.8 4.7Z" />
  </Base>
)

/** Feuille — automne, récolte */
export const LeafIcon = (props: IconProps) => (
  <Base {...props}>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </Base>
)

/** Soleil — été, chaleur */
export const SunIcon = (props: IconProps) => (
  <Base {...props}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </Base>
)

/** Flocon — hiver, repos végétatif */
export const SnowflakeIcon = (props: IconProps) => (
  <Base {...props}>
    <path d="M12 2v20" />
    <path d="m20 16-4-4 4-4" />
    <path d="m4 8 4 4-4 4" />
    <path d="m16 4-4 4-4-4" />
    <path d="m8 20 4-4 4 4" />
  </Base>
)

/** Goutte d'eau — irrigation (Node.js) */
export const DropletIcon = (props: IconProps) => (
  <Base {...props}>
    <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
  </Base>
)

/** Fleur — pollinisation (UI/UX) */
export const FlowerIcon = (props: IconProps) => (
  <Base {...props}>
    <circle cx="12" cy="12" r="2.3" />
    <path d="M12 9.7c-.6-2.7 1-4.4 2.9-4.4.7 2.5-.9 4.4-2.9 4.4Z" />
    <path d="M14.3 12c2.7-.6 4.4 1 4.4 2.9-2.5.7-4.4-.9-4.4-2.9Z" />
    <path d="M12 14.3c.6 2.7-1 4.4-2.9 4.4-.7-2.5.9-4.4 2.9-4.4Z" />
    <path d="M9.7 12c-2.7.6-4.4-1-4.4-2.9 2.5-.7 4.4.9 4.4 2.9Z" />
    <path d="M12 15.5v4.5" />
  </Base>
)

/** Racines — fondation de données */
export const RootsIcon = (props: IconProps) => (
  <Base {...props}>
    <path d="M12 3v5" />
    <path d="M12 8c-2.5 2.5-6.5 3.2-9 3.5" />
    <path d="M12 8c2.5 2.5 6.5 3.2 9 3.5" />
    <path d="M12 12.5c-2 2-5.5 3-8 3.5" />
    <path d="M12 12.5c2 2 5.5 3 8 3.5" />
  </Base>
)

/** Chevrons de code — développement */
export const CodeIcon = (props: IconProps) => (
  <Base {...props}>
    <path d="m16 18 6-6-6-6" />
    <path d="m8 6-6 6 6 6" />
  </Base>
)

/** Épingle — localisation / parcelle */
export const MapPinIcon = (props: IconProps) => (
  <Base {...props}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </Base>
)

/** Cadran — télémétrie / dashboard */
export const GaugeIcon = (props: IconProps) => (
  <Base {...props}>
    <path d="M4 14a8 8 0 0 1 16 0" />
    <path d="M12 14l3.5-4.5" />
    <circle cx="12" cy="14" r="1" fill="currentColor" stroke="none" />
  </Base>
)

/** Serre — environnement maîtrisé (CI/CD) */
export const GreenhouseIcon = (props: IconProps) => (
  <Base {...props}>
    <path d="M5 21V11a7 7 0 0 1 14 0v10" />
    <path d="M3 21h18" />
    <path d="M12 21v-9" />
    <path d="M12 16c0-2 1.5-3 3-3 0 2-1.5 3-3 3Z" />
    <path d="M12 13c0-2-1.5-3-3-3 0 2 1.5 3 3 3Z" />
  </Base>
)

/** Couches — composants réutilisables */
export const LayersIcon = (props: IconProps) => (
  <Base {...props}>
    <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
    <path d="m22 12-9.17 4.16a2 2 0 0 1-1.66 0L3 12" />
    <path d="m22 17-9.17 4.16a2 2 0 0 1-1.66 0L3 17" />
  </Base>
)

/** Document — rapports */
export const FileTextIcon = (props: IconProps) => (
  <Base {...props}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
    <path d="M14 2v6h6" />
    <path d="M8 13h8" />
    <path d="M8 17h5" />
  </Base>
)

/** Flèche — liens */
export const ArrowRightIcon = (props: IconProps) => (
  <Base {...props}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </Base>
)

/** Envoi — formulaire */
export const SendIcon = (props: IconProps) => (
  <Base {...props}>
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </Base>
)

/** Enveloppe — courriel */
export const MailIcon = (props: IconProps) => (
  <Base {...props}>
    <rect x="2" y="4" width="20" height="16" rx="3" />
    <path d="m22 7-10 6L2 7" />
  </Base>
)

/** Horloge — disponibilité */
export const ClockIcon = (props: IconProps) => (
  <Base {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Base>
)

/** Livre ouvert — documentation */
export const BookIcon = (props: IconProps) => (
  <Base {...props}>
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
  </Base>
)

/** GitHub, rempli — réseaux sociaux */
export const GithubIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <circle cx="17.5" cy="18.5" r="2.5" />
  </svg>
)