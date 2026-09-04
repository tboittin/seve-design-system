import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../../components/ui/Button'
import { SproutIcon, SendIcon } from '../../lib/icons'

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'accent', 'soft', 'outline', 'ghost'],
    },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: { children: 'Voir mes projets', variant: 'primary' },
}

export const Accent: Story = {
  args: { children: 'Me contacter', variant: 'accent' },
}

export const Soft: Story = {
  args: { children: 'En savoir plus', variant: 'soft' },
}

export const Outline: Story = {
  args: { children: 'Télécharger', variant: 'outline' },
}

export const Ghost: Story = {
  args: { children: 'Annuler', variant: 'ghost' },
}

export const WithIconLeft: Story = {
  args: { children: 'Greffer', icon: <SproutIcon /> },
}

export const WithIconRight: Story = {
  args: { children: 'Envoyer', iconRight: <SendIcon />, variant: 'accent' },
}

export const Disabled: Story = {
  args: { children: 'Indisponible', disabled: true },
}

export const Sizes = () => (
  <div className="flex items-end gap-4">
    <Button size="sm">Petit</Button>
    <Button size="md">Moyen</Button>
    <Button size="lg">Grand</Button>
  </div>
)

export const AllVariants = () => (
  <div className="flex flex-wrap gap-3">
    <Button variant="primary">Primary</Button>
    <Button variant="accent">Accent</Button>
    <Button variant="soft">Soft</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>
  </div>
)