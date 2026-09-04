import type { Meta } from '@storybook/react'

/* ------------------------------------------------------------------ */
/*  Tokens visuels du design system Sève                               */
/* ------------------------------------------------------------------ */

const meta: Meta = {
  title: 'Fondations/Tokens',
  parameters: {
    layout: 'centered',
    docs: { source: { type: 'dynamic' } },
  },
}

export default meta

/* ---------- Palette ---------- */

const palettes = [
  {
    name: 'Cream',
    description: 'Blanc cassé — fond de page',
    colors: [
      ['50', '#ffffff'],
      ['100', '#fdfbf7'],
      ['200', '#f8f2e8'],
      ['300', '#f0e7d6'],
      ['400', '#e4d5ba'],
    ],
  },
  {
    name: 'Forest',
    description: 'Vert profond — texte, fonds foncés',
    colors: [
      ['50', '#f2f5f2'],
      ['100', '#e3eae3'],
      ['200', '#c6d3c6'],
      ['300', '#a3b6a4'],
      ['400', '#7d967f'],
      ['500', '#5e7a61'],
      ['600', '#49604c'],
      ['700', '#3c4e3f'],
      ['800', '#334135'],
      ['900', '#2b3a2b'],
      ['950', '#18201a'],
    ],
  },
  {
    name: 'Sauge',
    description: 'Vert doux — accent, fond contact',
    colors: [
      ['50', '#f1f5f1'],
      ['100', '#e0e9e0'],
      ['200', '#c2d4c2'],
      ['300', '#a0bba2'],
      ['400', '#83a385'],
      ['500', '#6b8e6b'],
      ['600', '#577657'],
      ['700', '#465f47'],
      ['800', '#3a4e3b'],
      ['900', '#314033'],
      ['950', '#1b241c'],
    ],
  },
  {
    name: 'Moutarde',
    description: 'Jaune chaleureux — accent principal',
    colors: [
      ['50', '#faf6e8'],
      ['100', '#f4ebc9'],
      ['200', '#e9d993'],
      ['300', '#ddc364'],
      ['400', '#cfb349'],
      ['500', '#c2a53d'],
      ['600', '#a98931'],
      ['700', '#8a6d2b'],
      ['800', '#715729'],
      ['900', '#5f4926'],
      ['950', '#372718'],
    ],
  },
  {
    name: 'Terracotta',
    description: 'Rouge-orangé — accent secondaire',
    colors: [
      ['50', '#fcf2ee'],
      ['100', '#f8e2d8'],
      ['200', '#f0c3b0'],
      ['300', '#e79f82'],
      ['400', '#df835f'],
      ['500', '#d96c4a'],
      ['600', '#c6532f'],
      ['700', '#a44226'],
      ['800', '#833824'],
      ['900', '#6b3223'],
      ['950', '#3a180f'],
    ],
  },
  {
    name: 'Hiver',
    description: 'Teinte froide — quatrième saison',
    colors: [
      ['50', '#f2f5f4'],
      ['100', '#e0e8e7'],
      ['200', '#c3d1d0'],
      ['300', '#a0b5b4'],
      ['400', '#7e9897'],
      ['500', '#678180'],
      ['600', '#4f6a69'],
      ['700', '#435857'],
      ['800', '#39494a'],
      ['900', '#323f40'],
      ['950', '#1e2627'],
    ],
  },
]

export const Palette = () => (
  <div style={{ fontFamily: 'Karla, sans-serif', maxWidth: 880 }}>
    <h2 style={{ fontFamily: 'Baloo 2, sans-serif', fontSize: 28, fontWeight: 800, marginBottom: 8, color: '#2B3A2B' }}>
      Palette Sève
    </h2>
    <p style={{ color: '#5e7a61', marginBottom: 32, fontSize: 15 }}>
      Six gammes de couleurs, de 50 (la plus claire) à 950 (la plus foncée).
    </p>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {palettes.map((p) => (
        <div key={p.name}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 6 }}>
            <span style={{ fontFamily: 'Baloo 2', fontWeight: 700, fontSize: 18, color: '#2B3A2B' }}>{p.name}</span>
            <span style={{ fontSize: 13, color: '#7d967f' }}>{p.description}</span>
          </div>
          <div style={{ display: 'flex', gap: 4, borderRadius: 12, overflow: 'hidden' }}>
            {p.colors.map(([shade, hex]) => (
              <div
                key={shade}
                title={`${p.name}-${shade}  ·  ${hex}`}
                style={{
                  flex: 1,
                  height: 56,
                  backgroundColor: hex,
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  paddingBottom: 4,
                  fontSize: 10,
                  fontWeight: 600,
                  color: /^[0-4]$/.test(shade) ? '#2B3A2B' : '#FDFBF7',
                  border: '1px solid rgba(43,58,43,0.06)',
                }}
              >
                {shade}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
)

/* ---------- Typographie ---------- */

export const Typographie = () => (
  <div style={{ fontFamily: 'Karla, sans-serif', maxWidth: 640, color: '#2B3A2B' }}>
    <h2 style={{ fontFamily: 'Baloo 2, sans-serif', fontSize: 28, fontWeight: 800, marginBottom: 8, color: '#2B3A2B' }}>
      Typographie
    </h2>
    <p style={{ color: '#5e7a61', marginBottom: 32, fontSize: 15 }}>
      Baloo 2 pour les titres (gras, généreux), Karla pour le corps de texte.
    </p>

    <section style={{ marginBottom: 32 }}>
      <h3 style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#6b8e6b', marginBottom: 12 }}>
        Display — Baloo 2
      </h3>
      <div style={{ fontFamily: 'Baloo 2, sans-serif', display: 'flex', flexDirection: 'column', gap: 4 }}>
        <span style={{ fontSize: 56, fontWeight: 800, lineHeight: 1.05 }}>La tech prend racine</span>
        <span style={{ fontSize: 36, fontWeight: 700 }}>Quatre saisons, une même sève</span>
        <span style={{ fontSize: 24, fontWeight: 600 }}>Des graines bien semées</span>
        <span style={{ fontSize: 18, fontWeight: 500 }}>Envie de cultiver un projet ?</span>
      </div>
    </section>

    <section>
      <h3 style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#6b8e6b', marginBottom: 12 }}>
        Corps — Karla
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <p style={{ fontSize: 16, lineHeight: 1.6 }}>
          Développeur web, ingénieur agronome. Je crée des outils numériques qui poussent — du champ de maïs au champ de code.
        </p>
        <p style={{ fontSize: 14, lineHeight: 1.6, color: '#5e7a61' }}>
          Chaque outil est choisi comme une variété : pour qu'il s'enracine bien dans vos projets.
        </p>
        <p style={{ fontSize: 12, lineHeight: 1.5, color: '#7d967f' }}>
          Réponse sous 48h · hello@seve.dev
        </p>
      </div>
    </section>
  </div>
)

/* ---------- Ombres ---------- */

export const Ombres = () => (
  <div style={{ fontFamily: 'Karla, sans-serif', maxWidth: 640, color: '#2B3A2B' }}>
    <h2 style={{ fontFamily: 'Baloo 2, sans-serif', fontSize: 28, fontWeight: 800, marginBottom: 8, color: '#2B3A2B' }}>
      Ombres portées
    </h2>
    <p style={{ color: '#5e7a61', marginBottom: 32, fontSize: 15 }}>
      Douces et organiques, utilisant le vert forest comme teinte d'ombre.
    </p>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {([
        ['organic-sm', 'Petite — cartes, badges'],
        ['organic', 'Moyenne — cartes interactives'],
        ['organic-lg', 'Grande — sections, modales'],
        ['organic-glow', 'Lueur moutarde — boutons accent'],
      ] as const).map(([name, desc]) => (
        <div
          key={name}
          className={`shadow-${name}`}
          style={{
            borderRadius: 20,
            background: 'white',
            border: '1px solid #e3eae3',
            padding: '20px 28px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div>
            <div style={{ fontFamily: 'Baloo 2', fontWeight: 700, fontSize: 16 }}>shadow-{name}</div>
            <div style={{ fontSize: 13, color: '#7d967f', marginTop: 2 }}>{desc}</div>
          </div>
          <code style={{ fontSize: 11, color: '#6b8e6b', background: '#e0e9e0', padding: '4px 8px', borderRadius: 6 }}>
            {name}
          </code>
        </div>
      ))}
    </div>
  </div>
)