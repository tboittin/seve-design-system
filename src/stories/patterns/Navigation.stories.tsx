import type { Meta } from '@storybook/react'
import { Navigation } from '../../components/Navigation'

const meta: Meta<typeof Navigation> = {
  title: 'Patterns/Navigation',
  component: Navigation,
  parameters: {
    layout: 'fullscreen',
    docs: { source: { type: 'auto' } },
  },
}

export default meta

/**
 * Pilulier latéral (desktop) / barre flottante basse (mobile).
 * Les libellés apparaissent au survol, et restent affichés
 * pour la section active.
 */
export const Default = () => (
  <div className="min-h-[200vh] bg-cream-100">
    <div className="pt-10 text-center text-sm text-forest-400">
      Faites défiler et survolez les pastilles — la section active est signalée.
    </div>
    <Navigation />
  </div>
)