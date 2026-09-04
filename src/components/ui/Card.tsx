import type { HTMLAttributes, ReactNode } from 'react'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  interactive?: boolean
}

export function Card({ children, interactive = false, className = '', ...props }: CardProps) {
  return (
    <div
      className={`rounded-3xl border border-forest-100 bg-white shadow-organic ${
        interactive
          ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-organic-lg'
          : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}