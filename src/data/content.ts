import type { SVGProps } from 'react'
import type { Tone } from '../lib/tokens'
import {
  CodeIcon,
  DropletIcon,
  FileTextIcon,
  FlowerIcon,
  GaugeIcon,
  GreenhouseIcon,
  LayersIcon,
  LeafIcon,
  MapPinIcon,
  RootsIcon,
  SnowflakeIcon,
  SproutIcon,
  SunIcon,
  MailIcon,
} from '../lib/icons'

type IconComponent = (props: SVGProps<SVGSVGElement>) => React.ReactNode

/* ------------------------------------------------------------
   Mon parcours — les quatre saisons
   ------------------------------------------------------------ */

export interface Season {
  id: string
  name: string
  /** Étiquette de la saison : formation, expériences… */
  theme: string
  period: string
  description: string
  tags: string[]
  tone: Tone
  icon: IconComponent
}

export const seasons: Season[] = [
  {
    id: 'printemps',
    name: 'Printemps',
    theme: 'Formation',
    period: '2014 — 2018',
    tone: 'sage',
    icon: SproutIcon,
    description:
      "Cinq années au contact du vivant : agronomie, écophysiologie des cultures, gestion de l'eau. En parallèle, les premières lignes de code pour automatiser des relevés de terrain.",
    tags: ['Agronomie', 'Premiers scripts'],
  },
  {
    id: 'ete',
    name: 'Été',
    theme: 'Expériences',
    period: '2018 — 2022',
    tone: 'mustard',
    icon: SunIcon,
    description:
      "Ingénieur terrain puis chef de projet dans l'agritech : capteurs, données de parcelles, tableaux de bord. Le terrain me manque ? Alors je le code.",
    tags: ['Agritech', 'Données'],
  },
  {
    id: 'automne',
    name: 'Automne',
    theme: 'Reconversion',
    period: '2022 — 2023',
    tone: 'terracotta',
    icon: LeafIcon,
    description:
      "Reconversion assumée vers le développement web : formation intensive React & Node, projets concrets, et la conviction que la tech cultive aussi du sens.",
    tags: ['React', 'Node.js'],
  },
  {
    id: 'hiver',
    name: 'Hiver',
    theme: 'Projets',
    period: '2024 — aujourd’hui',
    tone: 'winter',
    icon: SnowflakeIcon,
    description:
      "La saison des racines : je cultive mes propres outils. Applications qui poussent doucement, code propre et documenté, et un design system à la sève généreuse.",
    tags: ['SaaS', 'Open source'],
  },
]

/* ------------------------------------------------------------
   Projets — quelques pousses au soleil
   ------------------------------------------------------------ */

export interface Project {
  id: string
  title: string
  tagline: string
  description: string
  badges: { label: string; tone: Tone }[]
  icon: IconComponent
  /** Dégradé du visuel circulaire (classes Tailwind littérales) */
  visual: string
}

export const projects: Project[] = [
  {
    id: 'dripflow',
    title: 'DripFlow',
    tagline: 'L’irrigation qui dose comme un agronome.',
    description:
      'Pilotage d’un réseau d’irrigation connecté : météo locale, humidité du sol et seuils par culture.',
    badges: [
      { label: 'Irrigation', tone: 'sage' },
      { label: 'IoT', tone: 'winter' },
    ],
    icon: DropletIcon,
    visual: 'from-sage-400 to-forest-700',
  },
  {
    id: 'parcelle',
    title: 'Parcelle',
    tagline: 'Votre exploitation sur une carte.',
    description:
      'Suivi des parcelles, assolement et historique culturaux dans une interface simple comme un champ.',
    badges: [
      { label: 'Gestion de parcelle', tone: 'mustard' },
      { label: 'Cartographie', tone: 'terracotta' },
    ],
    icon: MapPinIcon,
    visual: 'from-mustard-400 to-terracotta-600',
  },
  {
    id: 'greffe',
    title: 'Greffe',
    tagline: 'Des composants qui repoussent partout.',
    description:
      'Design system React + Storybook : tokens, composants et thèmes, greffés sur tous vos projets.',
    badges: [
      { label: 'UI', tone: 'terracotta' },
      { label: 'Open source', tone: 'sage' },
    ],
    icon: LayersIcon,
    visual: 'from-terracotta-400 to-mustard-600',
  },
  {
    id: 'serre',
    title: 'Serre 2.0',
    tagline: 'La serre sous surveillance douce.',
    description:
      'Télémétrie d’une serre expérimentale : température, hygrométrie, alertes et historique.',
    badges: [
      { label: 'Télémétrie', tone: 'winter' },
      { label: 'Dashboard', tone: 'sage' },
    ],
    icon: GaugeIcon,
    visual: 'from-winter-400 to-sage-600',
  },
  {
    id: 'moisson',
    title: 'Moisson',
    tagline: 'Vos rapports, récoltés automatiquement.',
    description:
      'Génération de rapports .docx à partir de données de terrain — pensez à semer, je m’occupe de la récolte.',
    badges: [
      { label: 'Rapports', tone: 'forest' },
      { label: 'Automatisation', tone: 'mustard' },
    ],
    icon: FileTextIcon,
    visual: 'from-forest-400 to-forest-800',
  },
  {
    id: 'racines',
    title: 'Racines',
    tagline: 'La donnée agri, en ligne de commande.',
    description:
      'CLI open source d’analyse de données agronomiques : parcours de fichiers, agrégations, exports.',
    badges: [
      { label: 'CLI', tone: 'winter' },
      { label: 'Open source', tone: 'terracotta' },
    ],
    icon: RootsIcon,
    visual: 'from-terracotta-500 to-forest-700',
  },
]

/* ------------------------------------------------------------
   Compétences — des graines bien semées
   ------------------------------------------------------------ */

export interface Skill {
  name: string
  metaphor: string
  tone: Tone
  icon: IconComponent
}

export const skills: Skill[] = [
  { name: 'React', metaphor: 'la greffe', tone: 'sage', icon: SproutIcon },
  { name: 'TypeScript', metaphor: 'le terreau', tone: 'forest', icon: CodeIcon },
  { name: 'Node.js', metaphor: 'l’irrigation', tone: 'winter', icon: DropletIcon },
  { name: 'UI / UX', metaphor: 'la pollinisation', tone: 'mustard', icon: FlowerIcon },
  { name: 'PostgreSQL', metaphor: 'les racines', tone: 'terracotta', icon: RootsIcon },
  { name: 'CI / CD', metaphor: 'la serre', tone: 'sage', icon: GreenhouseIcon },
]

/* ------------------------------------------------------------
   Navigation — libellés identiques aux titres de sections
   ------------------------------------------------------------ */

export interface NavItem {
  id: string
  label: string
  icon: IconComponent
}

export const navItems: NavItem[] = [
  { id: 'accueil', label: 'Accueil', icon: SproutIcon },
  { id: 'parcours', label: 'Mon parcours', icon: SunIcon },
  { id: 'projets', label: 'Projets', icon: LayersIcon },
  { id: 'competences', label: 'Compétences', icon: FlowerIcon },
  { id: 'contact', label: 'Contact', icon: MailIcon },
]