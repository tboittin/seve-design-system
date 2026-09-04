import type { Meta } from '@storybook/react'
import { Hero } from '../../components/Hero'

const meta: Meta<typeof Hero> = {
  title: 'Patterns/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
    docs: { source: { type: 'auto' } },
  },
}

export default meta

export const Default = {} as const

export const DansUnCadre = () => (
  <div className="mx-auto max-w-6xl overflow-hidden rounded-[24px] border border-forest-100 shadow-organic-lg">
    <Hero />
  </div>
)