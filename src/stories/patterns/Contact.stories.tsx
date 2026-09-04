import type { Meta } from '@storybook/react'
import { Contact } from '../../components/Contact'

const meta: Meta<typeof Contact> = {
  title: 'Patterns/Contact',
  component: Contact,
  parameters: { layout: 'fullscreen' },
}

export default meta

export const Default = {} as const