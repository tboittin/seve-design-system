import { useState } from 'react'
import { MailIcon, MapPinIcon, ClockIcon, SendIcon, SproutIcon } from '../lib/icons'
import { Button } from './ui/Button'
import { SectionHeader } from './ui/SectionHeader'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name && email && message) {
      setSent(true)
    }
  }

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 py-24 lg:py-32"
    >
      {/* Fond décoratif */}
      <div className="pointer-events-none absolute inset-0 paper-dots opacity-40" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeader
          kicker="Contact"
          title="Semons ensemble"
          description="Vous avez une idée qui germe ? Parlons-en autour d'un café (ou d'une binette)."
        />

        {/* Carte contact — fond vert sauge */}
        <div className="relative overflow-hidden rounded-[36px] bg-sage-600 p-8 text-cream-50 shadow-organic-lg sm:p-14">
          {/* Blobs décoratifs */}
          <div className="pointer-events-none absolute -top-12 -right-12 size-52 rounded-full bg-white/5 blur-2xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-10 -left-10 size-40 rounded-full bg-white/5 blur-2xl" aria-hidden="true" />

          {/* Feuilles flottantes */}
          <SproutIcon className="pointer-events-none absolute top-6 left-8 size-8 animate-float-slow text-white/10" aria-hidden="true" />
          <SproutIcon className="pointer-events-none absolute bottom-8 right-10 size-6 animate-float text-white/10" aria-hidden="true" />

          <div className="relative grid gap-12 lg:grid-cols-[1fr_1.1fr]">
            {/* Colonne infos */}
            <div className="flex flex-col justify-center">
              <p className="mb-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-sage-200">
                <span className="inline-block size-2 rounded-full bg-sage-300" />
                Envie d'échanger ?
              </p>
              <h2 className="font-display text-3xl font-extrabold leading-[1.1] sm:text-4xl">
                Envie de cultiver un projet&nbsp;?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-sage-100">
                Que vous ayez une idée précise ou simplement envie de discuter,
                je suis preneur. Réponse sous 48h, promis.
              </p>

              <ul className="mt-8 space-y-4">
                <li className="flex items-center gap-3 text-sm font-medium text-cream-50">
                  <span className="grid size-9 place-items-center rounded-full bg-white/10 text-sage-200 backdrop-blur-sm">
                    <MailIcon className="size-4" />
                  </span>
                  hello@seve.dev
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-cream-50">
                  <span className="grid size-9 place-items-center rounded-full bg-white/10 text-sage-200 backdrop-blur-sm">
                    <MapPinIcon className="size-4" />
                  </span>
                  Nantes, entre Loire et vignes
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-cream-50">
                  <span className="grid size-9 place-items-center rounded-full bg-white/10 text-sage-200 backdrop-blur-sm">
                    <ClockIcon className="size-4" />
                  </span>
                  Réponse sous 48h{' '}
                  <span role="img" aria-label="pousse">
                    🌱
                  </span>
                </li>
              </ul>
            </div>

            {/* Formulaire */}
            <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/20 backdrop-blur-sm sm:p-8">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 text-center animate-grow">
                  <div className="mb-5 grid size-16 place-items-center rounded-full bg-sage-400 text-cream-50">
                    <SproutIcon className="size-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold">
                    Votre message a germé&nbsp;!
                  </h3>
                  <p className="mt-2 text-sage-100">
                    Je vous réponds sous 48h.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-bold text-sage-100">
                      Nom <span className="text-mustard-300">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Votre nom"
                      className="w-full rounded-2xl border-0 bg-white/10 px-4 py-3 text-cream-50 placeholder-cream-50/50 ring-1 ring-white/25 transition-all duration-200 focus:bg-white/15 focus:ring-2 focus:ring-mustard-300 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-bold text-sage-100">
                      Email <span className="text-mustard-300">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="vous@exemple.fr"
                      className="w-full rounded-2xl border-0 bg-white/10 px-4 py-3 text-cream-50 placeholder-cream-50/50 ring-1 ring-white/25 transition-all duration-200 focus:bg-white/15 focus:ring-2 focus:ring-mustard-300 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-bold text-sage-100">
                      Message <span className="text-mustard-300">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Parlons de votre projet…"
                      className="w-full resize-none rounded-2xl border-0 bg-white/10 px-4 py-3 text-cream-50 placeholder-cream-50/50 ring-1 ring-white/25 transition-all duration-200 focus:bg-white/15 focus:ring-2 focus:ring-mustard-300 focus:outline-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="accent"
                    size="lg"
                    className="w-full"
                    iconRight={<SendIcon />}
                  >
                    Envoyer
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}