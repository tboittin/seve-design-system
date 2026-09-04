import type { Meta } from '@storybook/react'
import { Timeline } from '../../components/Timeline'

const meta: Meta<typeof Timeline> = {
  title: 'Patterns/Timeline',
  component: Timeline,
  parameters: { layout: 'fullscreen' },
}

export default meta

export const Default = {} as const