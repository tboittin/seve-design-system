# Sève — Design System

**« La tech prend racine »**

Un design system React/TypeScript construit avec Tailwind CSS v4, Storybook et React Spring — pensé pour des applications web à l'esprit organique et végétal.

## Thème

- **Palette** : Cream, Forest, Sage, Mustard, Terracotta, Winter
- **Typographie** : Baloo 2 (titres), Karla (corps)
- **Ombres** : douces et organiques, teintées de vert forest
- **Animations** : React Spring pour les entrées au scroll, keyframes CSS décoratives (float, sway, grow, drift…)

## Documentation du thème

Le Storybook documente les fondations visuelles, les composants et les motifs de page du design system :

→ **[Storybook du thème Sève](/storybook/)**

## Développement

```bash
# Démarrer le dev
pnpm dev

# Lancer Storybook
pnpm storybook

# Builder le Storybook (dans public/storybook/)
pnpm build-storybook

# Builder l'app + Storybook
pnpm build
```

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4 (`@theme` tokens)
- Storybook 10
- React Spring v10