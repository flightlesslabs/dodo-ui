import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as l}from"./index-ZxMtXS5W.js";import{S as t}from"./blocks-DUXuNTTx.js";import"./iframe-CHeN87Yr.js";const r=`{
  "name": "@flightlesslabs/dodo-ui",
  "version": "0.11.0",
  "scripts": {
    "build": "vite build && pnpm run prepack",
    "preview": "vite preview",
    "prepare": "svelte-kit sync || echo ''",
    "prepack": "svelte-kit sync && svelte-package && publint",
    "svelte-check": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json",
    "format": "prettier --write .",
    "lint": "prettier --check . && eslint .",
    "dev": "storybook dev -p 6006",
    "build-storybook": "storybook build && touch ./storybook-static/.nojekyll",
    "check": "pnpm run svelte-check && eslint . && pnpm run lint",
    "check:fix": "pnpm run svelte-check && eslint . && pnpm run format"
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
    }
  },
  "peerDependencies": {
    "svelte": "^5.0.0"
  },
  "devDependencies": {
    "@chromatic-com/storybook": "4.0.0",
    "@eslint/compat": "^1.3.0",
    "@eslint/js": "^9.28.0",
    "@storybook/addon-svelte-csf": "5.0.3",
    "@storybook/svelte": "^9.0.8",
    "@storybook/sveltekit": "^9.0.8",
    "@sveltejs/adapter-static": "^3.0.8",
    "@sveltejs/kit": "^2.21.4",
    "@sveltejs/package": "^2.3.11",
    "@sveltejs/vite-plugin-svelte": "^5.1.0",
    "@vitest/browser": "^3.2.3",
    "@vitest/coverage-v8": "^3.2.3",
    "@vueless/storybook-dark-mode": "^9.0.5",
    "eslint": "^9.28.0",
    "eslint-config-prettier": "^10.1.5",
    "eslint-plugin-svelte": "^3.9.2",
    "globals": "^16.2.0",
    "playwright": "^1.53.0",
    "prettier": "^3.5.3",
    "prettier-plugin-svelte": "^3.4.0",
    "publint": "^0.3.12",
    "sass": "^1.89.2",
    "storybook": "^9.0.8",
    "svelte": "^5.34.1",
    "svelte-check": "^4.2.1",
    "svelte-preprocess": "^6.0.3",
    "typescript": "^5.8.3",
    "typescript-eslint": "^8.34.0",
    "vite": "^6.3.5",
    "vitest": "^3.2.3"
  },
  "keywords": [
    "svelte"
  ],
  "volta": {
    "node": "22.15.1",
    "pnpm": "10.11.0"
  },
  "dependencies": {
    "@iconify/svelte": "^5.0.0",
    "@storybook/addon-docs": "^9.0.8",
    "@storybook/addon-vitest": "^9.0.8",
    "dayjs": "^1.11.13"
  }
}
`;function i(n){var o;const s={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs("main",{style:{textAlign:"center"},children:[e.jsx("img",{src:"dodo-circle-6.png",style:{width:200,height:"auto"}}),e.jsx(s.h1,{id:"dodo-ui",children:"Dodo UI"}),e.jsxs("h3",{style:{fontWeight:500},children:["v",(o=JSON.parse(r))==null?void 0:o.version]}),e.jsx("h3",{style:{fontWeight:400},children:"An open-source, opinionated UI framework for Svelte."}),e.jsxs(s.h3,{id:"github---npm",children:[e.jsx(s.a,{href:"https://github.com/flightlesslabs/dodo-ui",rel:"nofollow",children:"Github"})," - ",e.jsx(s.a,{href:"https://www.npmjs.com/package/@flightlesslabs/dodo-ui",rel:"nofollow",children:"npm"})]})]}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"install",children:"Install"}),`
`,e.jsx(s.p,{children:"pnpm"}),`
`,e.jsx(t,{dark:!0,language:"bash",code:`
pnpm add @flightlesslabs/dodo-ui
`}),`
`,e.jsx(s.p,{children:"npm"}),`
`,e.jsx(t,{dark:!0,language:"bash",code:`
npm i @flightlesslabs/dodo-ui
`}),`
`,e.jsx(s.h2,{id:"use-it",children:"Use it!"}),`
`,e.jsxs(s.p,{children:["Lets import ",e.jsx(s.a,{href:"?path=/docs/components-form-button--docs",children:"Button"})," component. Checkout documentation for ",e.jsx(s.a,{href:"?path=/docs/components-form-button--docs",children:"Button"})]}),`
`,e.jsx(t,{dark:!0,language:"js",code:`
import { Button } '@flightlesslabs/dodo-ui';
`}),`
`,e.jsx(s.h2,{id:"explore-more",children:"Explore more"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"?path=/docs/developer-tools-philosophy-themes--docs#dark-theme",children:"Dark Theme"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"?path=/docs/developer-tools-philosophy-colors--docs",children:"Colors"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"?path=/docs/developer-tools-philosophy-colors--docs#adjusting-opacity",children:"Adjust Color Opacity"})}),`
`]})]})}function a(n={}){const{wrapper:s}={...l(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{a as default};
