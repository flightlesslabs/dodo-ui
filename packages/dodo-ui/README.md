# Dodo UI

Opinionated UI framework for Svelte, based on [Bits UI](https://bits-ui.com/)

[Github](https://github.com/flightlesslabs/dodo-ui) - [npm](https://www.npmjs.com/package/@flightlesslabs/dodo-ui) - [Changelog](https://github.com/flightlesslabs/dodo-ui/blob/main/packages/dodo-ui/CHANGELOG.md)

## 🚀 Installation

```bash
pnpm add bits-ui @flightlesslabs/dodo-ui
```

## 🎨 Add Styles

Import global styles in your root component. use the root layout (`+layout.svelte`) for SvelteKit.

```ts
import '@flightlesslabs/dodo-ui/styles/global.css';
import '@flightlesslabs/dodo-ui/styles/components.css';
```

or scss

```ts
import '@flightlesslabs/dodo-ui/styles/global/index.scss';
import '@flightlesslabs/dodo-ui/styles/components.scss';
```

## 🌗 Theme Setup

Wrap your application with the [Theme](?path=/docs/components-layout-theme--docs) component at the root level.

```ts
import { Theme } from '@flightlesslabs/dodo-ui';

<Theme global>
  <!-- Your app -->
</Theme>
```

Recommended: Place this in your root layout (`+layout.svelte`) for SvelteKit.

## ✨ Usage

Start by importing components like Button.

```ts
import { Button } '@flightlesslabs/dodo-ui';

<Button>Hello</Button>
```

[Dodo UI](https://flightlesslabs.github.io/dodo-ui)
