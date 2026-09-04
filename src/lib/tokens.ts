/**
 * Tonalités du design system Sève.
 * Classes Tailwind écrites en toutes lettres (jamais construites
 * dynamiquement) pour rester détectables par le compilateur.
 */
export type Tone = 'sage' | 'mustard' | 'terracotta' | 'winter' | 'forest'

export interface ToneStyle {
  /** Pastille pleine (point, dot) */
  dot: string
  /** Fond doux + texte foncé (badges, pastilles) */
  soft: string
  /** Texte accentué */
  text: string
  /** Fond plein + texte clair (pastille d'icône) */
  solid: string
}

export const toneStyles: Record<Tone, ToneStyle> = {
  sage: {
    dot: 'bg-sage-500',
    soft: 'bg-sage-100 text-sage-700',
    text: 'text-sage-600',
    solid: 'bg-sage-500 text-cream-50',
  },
  mustard: {
    dot: 'bg-mustard-500',
    soft: 'bg-mustard-100 text-mustard-800',
    text: 'text-mustard-600',
    solid: 'bg-mustard-500 text-forest-950',
  },
  terracotta: {
    dot: 'bg-terracotta-500',
    soft: 'bg-terracotta-100 text-terracotta-700',
    text: 'text-terracotta-600',
    solid: 'bg-terracotta-500 text-cream-50',
  },
  winter: {
    dot: 'bg-winter-500',
    soft: 'bg-winter-100 text-winter-700',
    text: 'text-winter-600',
    solid: 'bg-winter-500 text-cream-50',
  },
  forest: {
    dot: 'bg-forest-500',
    soft: 'bg-forest-100 text-forest-700',
    text: 'text-forest-600',
    solid: 'bg-forest-900 text-cream-50',
  },
}