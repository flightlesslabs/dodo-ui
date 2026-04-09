import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-Dg5Q4cgl.js";import{a as n}from"./chunk-RD3KTAHR-BL94KM58.js";import{a as r,o as i}from"./blocks-B9R52yfl.js";import{t as a}from"./mdx-react-shim-CBLMQScp.js";var o,s=e((()=>{o=`{
  "name": "@flightlesslabs/dodo-ui",
  "version": "0.20.0",
  "scripts": {
    "scss:global": "sh -c \\"mkdir -p dist/styles && sass src/lib/styles/global/index.scss dist/styles/global.css\\"",
    "scss:components": "sh -c \\"mkdir -p dist/styles && sass src/lib/styles/components.scss dist/styles/components.css\\"",
    "scss": "pnpm scss:global && pnpm scss:components",
    "build": "vite build && pnpm run prepack",
    "preview": "vite preview",
    "prepare": "svelte-kit sync || echo ''",
    "prepack": "svelte-kit sync && svelte-package && pnpm run scss && publint",
    "svelte-check": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json",
    "format": "prettier --write .",
    "lint": "prettier --check . && eslint .",
    "dev": "storybook dev -p 6006",
    "build-storybook": "storybook build && touch ./storybook-static/.nojekyll",
    "check": "pnpm run svelte-check && eslint . && pnpm run lint",
    "check:fix": "pnpm run svelte-check && eslint . && pnpm run format",
    "create:component": "node --experimental-strip-types scripts/create-component/create-component.ts",
    "test": "vitest run"
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
    "./styles/components.css": "./dist/styles/components.css"
  },
  "peerDependencies": {
    "@internationalized/date": "^3.0.0",
    "bits-ui": "^2.0.0",
    "svelte": "^5.0.0"
  },
  "devDependencies": {
    "@chromatic-com/storybook": "^5.1.1",
    "@eslint/compat": "^2.0.4",
    "@eslint/js": "^10.0.1",
    "@iconify/svelte": "^5.2.1",
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
    "@types/node": "^22",
    "@vitest/browser": "^4.1.3",
    "@vitest/browser-playwright": "^4.1.3",
    "@vitest/coverage-v8": "^4.1.3",
    "bits-ui": "^2.17.2",
    "dayjs": "^1.11.20",
    "eslint": "^10.2.0",
    "eslint-config-prettier": "^10.1.8",
    "eslint-plugin-storybook": "^10.3.5",
    "eslint-plugin-svelte": "^3.17.0",
    "esm-env": "^1.2.2",
    "file-saver": "^2.0.5",
    "globals": "^17.4.0",
    "jsdom": "^29.0.2",
    "playwright": "^1.59.1",
    "prettier": "^3.8.1",
    "prettier-plugin-svelte": "^3.5.1",
    "publint": "^0.3.18",
    "sass": "^1.99.0",
    "storybook": "^10.3.5",
    "svelte": "^5.55.2",
    "svelte-check": "^4.4.6",
    "svelte-preprocess": "^6.0.3",
    "typescript": "^6.0.2",
    "typescript-eslint": "^8.58.1",
    "vite": "^8.0.7",
    "vitest": "^4.1.3"
  },
  "keywords": [
    "svelte"
  ]
}
`}));function c(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(`main`,{style:{textAlign:`center`},children:[(0,u.jsx)(`img`,{src:`dodo-circle-6.png`,style:{width:200,height:`auto`}}),(0,u.jsx)(n.h1,{id:`dodo-ui`,children:`Dodo UI`}),(0,u.jsxs)(`h3`,{style:{fontWeight:500},children:[`v`,JSON.parse(o)?.version]}),(0,u.jsx)(`h3`,{style:{fontWeight:400},children:(0,u.jsxs)(n.p,{children:[`Opinionated UI framework for Svelte, based on `,(0,u.jsx)(n.a,{href:`https://bits-ui.com/`,rel:`nofollow`,children:`Bits UI`})]})}),(0,u.jsxs)(n.h3,{id:`github---npm`,children:[(0,u.jsx)(n.a,{href:`https://github.com/flightlesslabs/dodo-ui`,rel:`nofollow`,children:`Github`}),` - `,(0,u.jsx)(n.a,{href:`https://www.npmjs.com/package/@flightlesslabs/dodo-ui`,rel:`nofollow`,children:`npm`})]})]}),`
`,(0,u.jsx)(`br`,{}),`
`,(0,u.jsx)(`br`,{}),`
`,(0,u.jsx)(n.h2,{id:`install`,children:`Install`}),`
`,(0,u.jsx)(r,{dark:!0,language:`bash`,code:`
pnpm add bits-ui @internationalized/date @flightlesslabs/dodo-ui
`}),`
`,(0,u.jsxs)(n.p,{children:[`We are using `,(0,u.jsxs)(n.strong,{children:[`bits-ui@`,JSON.parse(o).devDependencies[`bits-ui`]]}),` internally`]}),`
`,(0,u.jsx)(n.h2,{id:`add-css`,children:`Add css`}),`
`,(0,u.jsxs)(n.p,{children:[`Add global css in your `,(0,u.jsx)(n.code,{children:`+layout.svelte`}),` file`]}),`
`,(0,u.jsx)(r,{dark:!0,language:`js`,code:`
import '@flightlesslabs/dodo-ui/styles/global.css';
import '@flightlesslabs/dodo-ui/styles/components.css';
`}),`
`,(0,u.jsx)(n.h2,{id:`theme`,children:`Theme`}),`
`,(0,u.jsxs)(n.p,{children:[`We recommend that the `,(0,u.jsx)(n.a,{href:`?path=/docs/components-layout-theme--docs`,children:`Theme`}),` component should be imported in the `,(0,u.jsx)(n.code,{children:`_layout.svelte`}),` (SvelteKit) or any other root location.`]}),`
`,(0,u.jsx)(r,{dark:!0,language:`js`,code:`
import { Theme } '@flightlesslabs/dodo-ui';

<Theme>
// Content will go here
</Theme>
`}),`
`,(0,u.jsx)(n.h2,{id:`use-it`,children:`Use it!`}),`
`,(0,u.jsxs)(n.p,{children:[`Lets import `,(0,u.jsx)(n.a,{href:`?path=/docs/components-form-button--docs`,children:`Button`}),` component. Checkout documentation for `,(0,u.jsx)(n.a,{href:`?path=/docs/components-form-button--docs`,children:`Button`})]}),`
`,(0,u.jsx)(r,{dark:!0,language:`js`,code:`
import { Button } '@flightlesslabs/dodo-ui';
`}),`
`,(0,u.jsx)(n.h2,{id:`explore-more`,children:`Explore more`}),`
`,(0,u.jsxs)(n.ul,{children:[`
`,(0,u.jsx)(n.li,{children:(0,u.jsx)(n.a,{href:`?path=/docs/components-form-button--docs`,children:`Button`})}),`
`,(0,u.jsx)(n.li,{children:(0,u.jsx)(n.a,{href:`?path=/docs/components-form-textinput--docs`,children:`TextInput`})}),`
`,(0,u.jsx)(n.li,{children:(0,u.jsx)(n.a,{href:`https://uicolors.app/generate/1cc049`,rel:`nofollow`,children:`Tailwind CSS Color Generator`})}),`
`]})]})}function l(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,u.jsx)(n,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;e((()=>{u=n(),a(),i(),s()}))();export{l as default};