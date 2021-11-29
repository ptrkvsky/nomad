<p align="center">
  <img src="https://nomad.ads31.com/static/media/logo.add6073d.svg" alt="Nomad Messagerie">
</p>

<br />

<div align="center"><strong>Refonte de la messsagerie Nomad</strong></div>

<br />

## Features

- ⚡️ Next.js 12
- ⚛️ React 17
- ⛑ TypeScript
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

#### Dossiers principau
- [`.github`](.github) — GitHub configuration including the CI workflow.<br>
- [`.husky`](.husky) — Husky configuration and hooks.<br>
- [`public`](./public) — Static assets such as robots.txt, images, and favicon.<br>
- [`src`](./src) — Application source code, including pages, components, styles.

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

// To import images or other files from the public folder
import avatar from '@/public/avatar.png';
```


