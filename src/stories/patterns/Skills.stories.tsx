import type { Meta } from '@storybook/react'
import { Skills } from '../../components/Skills'

const meta: Meta<typeof Skills> = {
  title: 'Patterns/Compétences',
  component: Skills,
  parameters: { layout: 'fullscreen' },
}

export default meta

export const Default = {} as const