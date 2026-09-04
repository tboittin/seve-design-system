import type { Meta } from '@storybook/react'
import { Navigation } from '../../components/Navigation'
import { Hero } from '../../components/Hero'
import { Timeline } from '../../components/Timeline'
import { Projects } from '../../components/Projects'
import { Skills } from '../../components/Skills'
import { Contact } from '../../components/Contact'
import { Footer } from '../../components/Footer'

const meta: Meta = {
  title: 'Patterns/Page complète',
  parameters: { layout: 'fullscreen' },
}

export default meta

/** Rendu complet de la page d'accueil Sève avec navigation et toutes les sections. */
export const Accueil = () => (
  <div className="min-h-screen">
    <Navigation />
    <main>
      <Hero />
      <Timeline />
      <Projects />
      <Skills />
      <Contact />
    </main>
    <Footer />
  </div>
)