import type { Meta, StoryObj } from '@storybook/react'
import { SectionHeader } from '../../components/ui/SectionHeader'

const meta: Meta<typeof SectionHeader> = {
  title: 'UI/SectionHeader',
  component: SectionHeader,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    align: { control: 'select', options: ['left', 'center'] },
    tone: { control: 'select', options: ['sage', 'mustard', 'terracotta', 'winter', 'forest'] },
  },
}

export default meta
type Story = StoryObj<typeof SectionHeader>

export const Center: Story = {
  args: {
    kicker: 'Projets',
    title: 'Quelques pousses au soleil',
    description: 'Des outils nés d\'un besoin réel, cultivés avec soin.',
  },
}

export const LeftAligned: Story = {
  args: {
    kicker: 'Mon parcours',
    title: 'Quatre saisons, une même sève',
    description: 'De l\'agronomie au code, chaque étape cultive la suivante.',
    align: 'left',
  },
}

export const MustardTone: Story = {
  args: {
    kicker: 'Contact',
    title: 'Semons ensemble',
    tone: 'mustard',
  },
}