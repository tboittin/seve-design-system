import type { Meta, StoryObj } from '@storybook/react'
import { Card } from '../../components/ui/Card'
import { SproutIcon } from '../../lib/icons'

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    interactive: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  args: {
    children: (
      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-forest-900">Carte simple</h3>
        <p className="mt-2 text-forest-500">Une carte arrondie avec ombre organique douce.</p>
      </div>
    ),
  },
}

export const Interactive: Story = {
  args: {
    interactive: true,
    children: (
      <div className="p-6">
        <div className="mb-4 grid size-14 place-items-center rounded-full bg-gradient-to-br from-sage-400 to-forest-600 text-cream-50">
          <SproutIcon className="size-7" />
        </div>
        <h3 className="font-display text-xl font-bold text-forest-900">Carte interactive</h3>
        <p className="mt-2 text-forest-500">Survolez-moi — je m'élève et mon ombre s'adoucit.</p>
      </div>
    ),
  },
}

export const WithBorder = () => (
  <div className="flex flex-wrap gap-4">
    <Card>
      <div className="p-6 text-center">
        <p className="text-forest-500">Carte par défaut</p>
      </div>
    </Card>
    <Card interactive>
      <div className="p-6 text-center">
        <p className="text-forest-500">Carte interactive</p>
      </div>
    </Card>
  </div>
)