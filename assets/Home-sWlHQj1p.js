import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-6sF1Ejqi.js";import{r as n}from"./react-C6wZJlw-.js";import{t as r}from"./mdx-react-shim-w1JW0gnZ.js";var i,a=e((()=>{i=`{
  "name": "@documentation/docs",
  "version": "0.1.2",
  "private": true,
  "scripts": {
    "preview": "vite preview",
    "prepare": "svelte-kit sync || echo ''",
    "prepack": "svelte-kit sync && svelte-package && pnpm run scss && publint",
    "svelte-check": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json",
    "format": "prettier --write .",
    "lint": "prettier --check . && eslint .",
    "dev": "storybook dev -p 6006",
    "build": "storybook build && touch ./storybook-static/.nojekyll",
    "check": "pnpm run svelte-check && eslint . && pnpm run lint",
    "check:fix": "pnpm run svelte-check && eslint . && pnpm run format",
    "create:component": "node --experimental-strip-types scripts/create-component/create-component.ts"
  },
  "homepage": "https://flightlesslabs.github.io/dodo-ui",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/flightlesslabs/dodo-ui.git"
  },
  "license": "MIT",
  "files": [
    "dist",
    "!dist/**/*.test.*",
    "!dist/**/*.spec.*",
    "src/lib",
    "!src/lib/**/*.test.*",
    "!src/lib/**/*.spec.*",
    "!src/lib/stories/**/*.stories.*",
    "!src/lib/stories/**/*.mdx",
    "!src/lib/stories/assets/**/*.png",
    "!src/lib/stories/assets/**/*.jpg",
    "!src/lib/stories/philosophy"
  ],
  "sideEffects": [
    "**/*.css"
  ],
  "svelte": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "type": "module",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "svelte": "./dist/index.js"
    },
    "./styles/global.css": "./dist/styles/global.css",
    "./styles/components.css": "./dist/styles/components.css",
    "./styles/*": {
      "sass": "./dist/styles/*",
      "default": "./dist/styles/*"
    }
  },
  "devDependencies": {
    "@chromatic-com/storybook": "^5.1.1",
    "@eslint/compat": "^2.0.4",
    "@eslint/js": "^10.0.1",
    "@internationalized/date": "^3.12.0",
    "@storybook/addon-a11y": "^10.3.5",
    "@storybook/addon-docs": "^10.3.5",
    "@storybook/addon-svelte-csf": "^5.1.2",
    "@storybook/addon-vitest": "^10.3.5",
    "@storybook/sveltekit": "^10.3.5",
    "@sveltejs/adapter-auto": "^7.0.1",
    "@sveltejs/adapter-static": "^3.0.10",
    "@sveltejs/kit": "^2.57.0",
    "@sveltejs/package": "^2.5.7",
    "@sveltejs/vite-plugin-svelte": "^7.0.0",
    "@testing-library/jest-dom": "^6.9.1",
    "@testing-library/svelte": "^5.3.1",
    "@testing-library/user-event": "^14.6.1",
    "@types/file-saver": "^2.0.7",
    "@types/node": "^24",
    "@vitest/browser": "^4.1.3",
    "@vitest/browser-playwright": "^4.1.3",
    "@vitest/coverage-v8": "^4.1.3",
    "eslint": "^10.2.0",
    "eslint-config-prettier": "^10.1.8",
    "eslint-plugin-storybook": "^10.3.5",
    "eslint-plugin-svelte": "^3.17.0",
    "file-saver": "^2.0.5",
    "globals": "^17.4.0",
    "prettier": "^3.8.1",
    "prettier-plugin-svelte": "^3.5.1",
    "publint": "^0.3.18",
    "sass": "^1.99.0",
    "storybook": "^10.3.5",
    "svelte-check": "^4.4.6",
    "typescript": "^6.0.2",
    "typescript-eslint": "^8.58.1",
    "vite": "^8.0.7",
    "vitest": "^4.1.3"
  },
  "dependencies": {
    "@flightlesslabs/dodo-ui": "workspace:*",
    "bits-ui": "^2.17.2",
    "dayjs": "^1.11.20",
    "@iconify/svelte": "^5.2.1",
    "svelte": "^5.55.2",
    "esm-env": "^1.2.2"
  }
}
`}));function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(`main`,{style:{textAlign:`center`},children:[(0,c.jsx)(`img`,{src:`dodo-circle-6.png`,style:{width:200,height:`auto`}}),(0,c.jsx)(t.h1,{id:`dodo-ui`,children:`Dodo UI`}),(0,c.jsx)(`h3`,{style:{fontWeight:400},children:(0,c.jsxs)(t.p,{children:[`Opinionated UI framework for Svelte, based on `,(0,c.jsx)(t.a,{href:`https://bits-ui.com/`,rel:`nofollow`,children:`Bits UI`})]})}),(0,c.jsxs)(t.h3,{id:`github---npm---changelog`,children:[(0,c.jsx)(t.a,{href:`https://github.com/flightlesslabs/dodo-ui`,rel:`nofollow`,children:`Github`}),` - `,(0,c.jsx)(t.a,{href:`https://www.npmjs.com/package/@flightlesslabs/dodo-ui`,rel:`nofollow`,children:`npm`}),` - `,(0,c.jsx)(t.a,{href:`https://github.com/flightlesslabs/dodo-ui/blob/main/packages/dodo-ui/CHANGELOG.md`,rel:`nofollow`,children:`Changelog`})]})]}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(t.h2,{id:`-installation`,children:`🚀 Installation`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`pnpm add bits-ui @internationalized/date @flightlesslabs/dodo-ui
`})}),`
`,(0,c.jsxs)(t.p,{children:[`We are using `,(0,c.jsxs)(t.strong,{children:[`bits-ui@`,JSON.parse(i).dependencies[`bits-ui`]]}),` internally`]}),`
`,(0,c.jsx)(t.h2,{id:`-add-styles`,children:`🎨 Add Styles`}),`
`,(0,c.jsxs)(t.p,{children:[`Import global styles in your root component. use the root layout (`,(0,c.jsx)(t.code,{children:`+layout.svelte`}),`) for SvelteKit.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-ts`,children:`import '@flightlesslabs/dodo-ui/styles/global.css';
import '@flightlesslabs/dodo-ui/styles/components.css';
`})}),`
`,(0,c.jsx)(t.h2,{id:`-theme-setup`,children:`🌗 Theme Setup`}),`
`,(0,c.jsxs)(t.p,{children:[`Wrap your application with the `,(0,c.jsx)(t.a,{href:`?path=/docs/components-layout-theme--docs`,children:`Theme`}),` component at the root level.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-ts`,children:`import { Theme } from '@flightlesslabs/dodo-ui';

<Theme global>
  <!-- Your app -->
</Theme>
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Recommended: Place this in your root layout (`,(0,c.jsx)(t.code,{children:`+layout.svelte`}),`) for SvelteKit.`]}),`
`,(0,c.jsx)(t.p,{children:`✨ Usage`}),`
`,(0,c.jsxs)(t.p,{children:[`Start by importing components like `,(0,c.jsx)(t.a,{href:`?path=/docs/components-form-button--docs`,children:`Button`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-ts`,children:`import { Button } '@flightlesslabs/dodo-ui';

<Button>Hello</Button>
`})}),`
`,(0,c.jsx)(t.h2,{id:`explore-more`,children:`Explore more`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:`?path=/docs/components-form-button--docs`,children:`Button`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:`?path=/docs/components-form-textinput--docs`,children:`TextInput`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:`https://uicolors.app/generate/1cc049`,rel:`nofollow`,children:`Tailwind CSS Color Generator`})}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),r(),a()}))();export{s as default};