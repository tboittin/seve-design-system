import { ArrowRightIcon, SproutIcon } from '../lib/icons'
import { LinkButton } from './ui/Button'

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative scroll-mt-24 overflow-hidden pt-28 pb-20 lg:pt-36"
    >
      {/* Blobs de fond */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -top-32 -right-32 size-[28rem] rounded-full bg-mustard-200/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 size-80 rounded-full bg-sage-200/30 blur-3xl" />
        <div className="paper-dots absolute inset-0 opacity-40" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-16 px-6 lg:flex-row lg:items-center">
        {/* Texte */}
        <div className="flex-1 text-center lg:text-left">
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-sage-600">
            <span className="inline-block size-2 rounded-full bg-sage-500" />
            Développeur web · Ingénieur agronome
          </p>

          <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-forest-900 sm:text-6xl lg:text-7xl">
            La tech prend{' '}
            <span className="text-gradient-organic">racine</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-forest-500 lg:mx-0">
            Développeur web, ingénieur agronome. Je crée des outils numériques
            qui poussent — du champ de maïs au champ de code.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <LinkButton
              href="#projets"
              iconRight={<ArrowRightIcon />}
              variant="primary"
              size="lg"
            >
              Voir mes projets
            </LinkButton>
            <LinkButton href="#contact" variant="outline" size="lg">
              Me contacter
            </LinkButton>
          </div>

          {/* Disponibilité */}
          <p className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-forest-500">
            <span className="relative flex size-3">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-sage-400 opacity-75" />
              <span className="relative inline-flex size-3 rounded-full bg-sage-500" />
            </span>
            Disponible pour de nouvelles pousses
          </p>
        </div>

        {/* Illustration */}
        <div className="flex-1">
          <HeroIllustration />
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Illustration animée — la scène                                     */
/* ------------------------------------------------------------------ */

function HeroIllustration() {
  return (
    <div className="relative">
      {/* Conteneur de l'illustration */}
      <div className="relative mx-auto aspect-[5/4] w-full max-w-[460px] overflow-hidden rounded-[32px] bg-gradient-to-br from-cream-50 via-cream-50 to-sage-100/60 shadow-organic-lg ring-1 ring-forest-100/50">
        {/* Blobs décoratifs dans la scène */}
        <div
          className="absolute top-6 right-6 size-32 rounded-full bg-mustard-200/40 blur-xl"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-8 left-6 size-24 rounded-full bg-terracotta-200/30 blur-lg"
          aria-hidden="true"
        />

        {/* Soleil */}
        <svg
          className="absolute top-4 right-8 size-12 animate-pulse-soft text-mustard-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>

        {/* Scène SVG principale */}
        <svg
          viewBox="0 0 400 320"
          className="absolute inset-0 size-full"
          aria-hidden="true"
        >
          {/* Sol / butte */}
          <rect x="90" y="258" width="220" height="54" rx="27" fill="#f0e7d6" />
          <rect
            x="90"
            y="258"
            width="220"
            height="54"
            rx="27"
            fill="url(#soilStripe)"
            opacity="0.5"
          />
          {/* Cailloux dans la terre */}
          <circle cx="120" cy="282" r="4" fill="#e4d5ba" />
          <circle cx="270" cy="276" r="3" fill="#dccfaf" />
          <circle cx="190" cy="290" r="5" fill="#e0d4b8" />

          {/* Racines */}
          <path
            d="M200 258 C190 278, 178 285, 160 300"
            fill="none"
            stroke="#c6532f"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.55"
          />
          <path
            d="M200 258 C212 280, 224 286, 240 302"
            fill="none"
            stroke="#c6532f"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.55"
          />
          <path
            d="M200 258 C198 272, 202 280, 200 290"
            fill="none"
            stroke="#a98931"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.5"
          />
          <path
            d="M195 262 C186 270, 172 276, 155 282"
            fill="none"
            stroke="#a98931"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.4"
          />
          <path
            d="M205 264 C218 274, 232 278, 248 284"
            fill="none"
            stroke="#a98931"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.4"
          />

          {/* Tige principale */}
          <path
            d="M200 258 C199 215, 198 185, 200 148"
            fill="none"
            stroke="#577657"
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* Feuille gauche (bas) */}
          <path
            d="M200 240 C170 232, 148 218, 144 198 C172 200, 192 214, 200 240Z"
            fill="#6B8E6B"
          />
          <path
            d="M200 240 C175 233, 155 218, 144 198"
            fill="none"
            stroke="#577657"
            strokeWidth="1.5"
            opacity="0.4"
          />

          {/* Feuille droite (haut) */}
          <path
            d="M200 202 C234 196, 254 176, 256 152 C228 156, 206 174, 200 202Z"
            fill="#577657"
          />
          <path
            d="M200 202 C232 196, 250 178, 256 152"
            fill="none"
            stroke="#3c4e3f"
            strokeWidth="1.5"
            opacity="0.3"
          />

          {/* Pousse terminale — deux mini-feuilles */}
          <path
            d="M200 148 C188 138, 176 126, 175 114 C190 120, 198 132, 200 148Z"
            fill="#C2A53D"
          />
          <path
            d="M200 148 C212 140, 226 128, 228 116 C210 122, 202 134, 200 148Z"
            fill="#a98931"
          />

          {/* Goutte flottante */}
          <g className="animate-float" style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
            <path
              d="M270 130 C272 126, 274 124, 274 121 C274 119, 272 117, 270 117 C268 117, 266 119, 266 121 C266 124, 268 126, 270 130Z"
              fill="#6B8E6B"
              opacity="0.7"
            />
          </g>

          {/* Graine flottante */}
          <circle cx="130" cy="120" r="5" fill="#C2A53D" className="animate-float-slow" style={{ transformBox: 'fill-box' }} />
          <circle cx="308" cy="90" r="4" fill="#D96C4A" className="animate-drift" style={{ transformBox: 'fill-box' }} />
          <circle cx="60" cy="180" r="3.5" fill="#6B8E6B" className="animate-float-slow" style={{ transformBox: 'fill-box' }} />

          {/* Petite feuille flottante */}
          <g className="animate-sway" style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
            <path
              d="M145 86 C140 82, 135 78, 136 74 C140 75, 144 78, 148 80 C146 82, 145 84, 145 86Z"
              fill="#a0bba2"
              opacity="0.8"
            />
          </g>

          {/* Glyphe de code flottant */}
          <g className="animate-float-slow" style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
            <rect x="82" y="72" width="36" height="24" rx="12" fill="white" stroke="#e3eae3" strokeWidth="1.5" />
            <text
              x="100"
              y="88"
              textAnchor="middle"
              fontFamily="monospace"
              fontSize="14"
              fill="#2B3A2B"
              fontWeight="bold"
            >
              &lt;/&gt;
            </text>
          </g>

          {/* Définitions des dégradés */}
          <defs>
            <linearGradient id="soilStripe" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e0d4b8" stopOpacity="0" />
              <stop offset="30%" stopColor="#dccfaf" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#d4c5a0" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>

        {/* Cartes flottantes HTML par-dessus */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2">
          <span className="inline-flex animate-float items-center gap-1.5 rounded-full bg-white/85 px-3 py-1.5 text-xs font-bold text-forest-700 shadow-organic-sm backdrop-blur-sm">
            <SproutIcon className="size-3.5 text-sage-500" />
            git commit -m &ldquo;🌱 on sème&rdquo;
          </span>
        </div>
        <div className="absolute bottom-3 right-3">
          <span className="inline-flex animate-float-slow items-center gap-1.5 rounded-full bg-white/85 px-3 py-1.5 text-xs font-bold text-forest-600 shadow-organic-sm backdrop-blur-sm">
            npm run irriguer ✓
          </span>
        </div>
      </div>
    </div>
  )
}