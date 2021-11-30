<p align="center">
  <img src="https://nomad.ads31.com/static/media/logo.add6073d.svg" alt="Nomad Messagerie">
</p>

<br />

<div align="center"><strong>Ajout de message dans la messagerie Nomad</strong></div>

<br />

## Features

- ⚡️ Next.js 12
- ⚛️ React 17
- ⛑ TypeScript
- 🏪 Redux Toolkit - State management
- 🚀 RTK Query - Powerful data fetching and caching tool
- 📏 ESLint — Find and fix problems in your code
- 💖 Prettier — Code Formatter for consistent style
- 🐶 Husky — For running scripts before committing
- 📄 Commitizen — To define a standard way of committing rules
- 🚓 Commitlint — Make sure your commit messages follow the convention
- 🖌 Renovate — Keep your dependencies up to date
- 🚫 lint-staged — To run ESLint and Prettier against staged Git files
- 👷 PR Workflow — Run Type Check & Linters on all Pull Requests
- ⚙️ EditorConfig - Maintain consistent coding styles across editors and IDEs
- 🗂 Path Mapping — Import components or images using the `@` prefix

## Demarrer le projet

Pour demarrer le projet:

```bash
yarn dev
```

Ouvrir `http://localhost:3000` dans votre navigateur.

## Documentation

### Requirements

- Node.js >= 12.22.0
- Yarn 1 (Classic)

### Structure des dossiers

#### Dossiers principaux

- [`.github`](.github) — GitHub configuration including the CI workflow.<br>
- [`.husky`](.husky) — Husky configuration and hooks.<br>
- [`public`](./public) — Static assets such as robots.txt, images, and favicon.<br>
- [`src`](./src) — Application source code, including pages, components, styles.
- [`src/app`](./src/app) — Fichiers globaux à l'application comme la definition du store.
- [`src/components`](./src/components) — Composants génériques à l'application. Ex: Header.
- [`src/features`](./src/features) — Logiques liées à une feature, ex la messagerie, la tournée, la fiche appareil etc... Chaque feature dispose de 3 dossiers
  - `api` - Appels backend avec les adapters lié à la feature.
  - `components` - Composants liés à la feature.
  - `interfaces`- Interfaces liées à la feature.
- [`src/interfaces`](./src/components) - Interfaces globales à l'application
- [`src/libs`](./src/libs) - Librairies externe
- [`src/pages`](./src/pages) - Router NextJS
- [`src/services`](./src/pages) - Appels backend génériques à l'application, ex: les tiers
- [`src/styles`](./src/styles) - Styles génériques de l'application, `theme`, `globalStyle` etc..

### Scripts

- `yarn dev` — Starts the application in development mode at `http://localhost:3000`.
- `yarn build` — Creates an optimized production build of your application.
- `yarn start` — Starts the application in production mode.
- `yarn type-check` — Validate code using TypeScript compiler.
- `yarn lint` — Runs ESLint for all files in the `src` directory.
- `yarn format` — Runs Prettier for all files in the `src` directory.
- `yarn commit` — Run commitizen. Alternative to `git commit`.

### Path Mapping

TypeScript est pre-configure avec un mapping custom.Pour importer des composants ou des fichiers, utiliser le `@` prefix.

```tsx
import { Button } from '@/components/Button';

// Importer des images ou d'autres fichiers du dossier public
import avatar from '@/public/avatar.png';
```
