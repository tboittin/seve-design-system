import { forwardRef } from 'react'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

export type ButtonVariant = 'primary' | 'accent' | 'soft' | 'outline' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  /** Icône affichée à gauche (ou à droite si iconRight est défini) */
  icon?: ReactNode
  /** Icône affichée à droite. Sa seule présence (truthy) déplace l'icône à droite */
  iconRight?: ReactNode
}

/** Classes partagées par le <button> et le lien <a>. */
export function buttonClasses(variant: ButtonVariant = 'primary', size: ButtonSize = 'md'): string {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full font-display font-bold transition-all duration-200 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mustard-400 focus-visible:ring-offset-2'

  const variants: Record<ButtonVariant, string> = {
    primary:
      'bg-forest-900 text-cream-50 shadow-organic hover:bg-forest-800 hover:shadow-organic-lg',
    accent:
      'bg-mustard-500 text-forest-950 shadow-organic hover:bg-mustard-400 hover:shadow-organic-glow',
    soft: 'bg-sage-100 text-sage-700 hover:bg-sage-200 hover:text-sage-800',
    outline:
      'border-2 border-forest-200 text-forest-800 hover:border-forest-400 hover:bg-forest-50',
    ghost: 'text-forest-600 hover:bg-forest-50',
  }

  const sizes: Record<ButtonSize, string> = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg',
  }

  return [base, variants[variant], sizes[size]].join(' ')
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', icon, iconRight, children, className = '', ...props }, ref) => (
    <button ref={ref} className={`${buttonClasses(variant, size)} ${className}`} {...props}>
      {icon && !iconRight && <span className="size-5">{icon}</span>}
      {children}
      {icon && iconRight && <span className="size-5">{icon}</span>}
    </button>
  ),
)
Button.displayName = 'Button'

/* ------------------------------------------------------------------ */
/*  Lien stylisé comme un bouton                                       */
/* ------------------------------------------------------------------ */

export interface LinkButtonProps {
  href: string
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: ReactNode
  iconRight?: ReactNode
  children: ReactNode
  className?: string
}

export function LinkButton({
  href,
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  children,
  className = '',
}: LinkButtonProps) {
  return (
    <a href={href} className={`${buttonClasses(variant, size)} ${className}`}>
      {icon && !iconRight && <span className="size-5">{icon}</span>}
      {children}
      {icon && iconRight && <span className="size-5">{icon}</span>}
    </a>
  )
}