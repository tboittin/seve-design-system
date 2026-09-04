import type { ReactNode } from 'react'
import type { Tone } from '../../lib/tokens'
import { toneStyles } from '../../lib/tokens'

export interface BadgeProps {
  children: ReactNode
  tone?: Tone
  icon?: ReactNode
}

export function Badge({ children, tone = 'sage', icon }: BadgeProps) {
  const s = toneStyles[tone]

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${s.soft}`}
    >
      {icon ?? <span className={`size-1.5 rounded-full ${s.dot}`} />}
      {children}
    </span>
  )
}