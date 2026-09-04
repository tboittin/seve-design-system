import type { Meta } from '@storybook/react'
import { Projects } from '../../components/Projects'

const meta: Meta<typeof Projects> = {
  title: 'Patterns/Projets',
  component: Projects,
  parameters: { layout: 'fullscreen' },
}

export default meta

export const Default = {} as const