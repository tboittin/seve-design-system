import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from '../../components/ui/Badge'
import { SproutIcon } from '../../lib/icons'

const meta: Meta<typeof Badge> = {
  title: 'UI/Badge',
  component: Badge,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    tone: {
      control: 'select',
      options: ['sage', 'mustard', 'terracotta', 'winter', 'forest'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Sage: Story = {
  args: { children: 'Irrigation', tone: 'sage' },
}

export const Mustard: Story = {
  args: { children: 'Cartographie', tone: 'mustard' },
}

export const Terracotta: Story = {
  args: { children: 'Open source', tone: 'terracotta' },
}

export const Winter: Story = {
  args: { children: 'IoT', tone: 'winter' },
}

export const Forest: Story = {
  args: { children: 'CLI', tone: 'forest' },
}

export const WithCustomIcon: Story = {
  args: { children: 'UI Kit', icon: <SproutIcon className="size-3" />, tone: 'sage' },
}

export const AllTones = () => (
  <div className="flex flex-wrap gap-2">
    <Badge tone="sage">Sauge</Badge>
    <Badge tone="mustard">Moutarde</Badge>
    <Badge tone="terracotta">Terracotta</Badge>
    <Badge tone="winter">Hiver</Badge>
    <Badge tone="forest">Forêt</Badge>
  </div>
)