import{j as e,a as t}from"./index-v30JxUDp.js";import{useMDXComponents as l}from"./index-ComKL0QU.js";import"./iframe-BVW9kZKF.js";import"./index-B30WeTR7.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";const r=`{
  "name": "@flightlesslabs/dodo-ui",
  "version": "0.2.0",
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
    "!src/lib/stories/*.stories.*",
    "!src/lib/stories/*.mdx",
    "!src/lib/stories/assets",
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
    "@chromatic-com/storybook": "^3",
    "@eslint/compat": "^1.2.5",
    "@eslint/js": "^9.18.0",
    "@storybook/addon-essentials": "^8.6.7",
    "@storybook/addon-svelte-csf": "^5.0.0-next.0",
    "@storybook/blocks": "^8.6.7",
    "@storybook/experimental-addon-test": "^8.6.7",
    "@storybook/manager-api": "^8.6.12",
    "@storybook/svelte": "^8.6.7",
    "@storybook/sveltekit": "^8.6.7",
    "@storybook/test": "^8.6.7",
    "@storybook/theming": "^8.6.12",
    "@sveltejs/adapter-auto": "^4.0.0",
    "@sveltejs/kit": "^2.16.0",
    "@sveltejs/package": "^2.0.0",
    "@sveltejs/vite-plugin-svelte": "^5.0.0",
    "@vitest/browser": "^3.0.9",
    "@vitest/coverage-v8": "^3.0.9",
    "eslint": "^9.18.0",
    "eslint-config-prettier": "^10.0.1",
    "eslint-plugin-svelte": "^3.0.0",
    "globals": "^16.0.0",
    "playwright": "^1.51.1",
    "prettier": "^3.4.2",
    "prettier-plugin-svelte": "^3.3.3",
    "publint": "^0.3.2",
    "sass": "^1.86.0",
    "storybook": "^8.6.7",
    "storybook-dark-mode": "^4.0.2",
    "svelte": "^5.0.0",
    "svelte-check": "^4.0.0",
    "svelte-preprocess": "^6.0.3",
    "typescript": "^5.0.0",
    "typescript-eslint": "^8.20.0",
    "vite": "^6.0.0",
    "vitest": "^3.0.9"
  },
  "keywords": [
    "svelte"
  ],
  "volta": {
    "node": "22.14.0",
    "pnpm": "10.7.1"
  },
  "dependencies": {
    "@iconify/svelte": "^4.2.0"
  }
}
`;function i(s){var o;const n={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsxs("main",{style:{textAlign:"center"},children:[e.jsx("img",{src:"dodo-circle-6.png",style:{width:200,height:"auto"}}),e.jsx(n.h1,{id:"dodo-ui",children:"Dodo UI"}),e.jsxs("h3",{style:{fontWeight:500},children:["v",(o=JSON.parse(r))==null?void 0:o.version]}),e.jsx("h3",{style:{fontWeight:400},children:"An open-source, opinionated UI framework for Svelte."})]}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"install",children:"Install"}),`
`,e.jsx(n.p,{children:"pnpm"}),`
`,e.jsx(t,{dark:!0,language:"bash",code:`
pnpm add @flightlesslabs/dodo-ui
`}),`
`,e.jsx(n.p,{children:"npm"}),`
`,e.jsx(t,{dark:!0,language:"bash",code:`
npm i @flightlesslabs/dodo-ui
`}),`
`,e.jsx(n.h2,{id:"use-one-of-the-components",children:"Use one of the components"}),`
`,e.jsxs(n.p,{children:["Lets import ",e.jsx(n.a,{href:"?path=/docs/components-form-button--docs",children:"Button"})," component"]}),`
`,e.jsx(t,{dark:!0,language:"js",code:`
import { Button } '@flightlesslabs/dodo-ui';
`}),`
`,e.jsxs(n.p,{children:["Checkout documentation for ",e.jsx(n.a,{href:"?path=/docs/components-form-button--docs",children:"Button"})]}),`
`,e.jsx(n.h2,{id:"explore-more",children:"Explore more"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/docs/philosophy-themes--docs",children:"Themes"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/docs/philosophy-colors--docs",children:"Colors"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/docs/philosophy-colors--docs#adjusting-opacity",children:"Adjust Color Opacity"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/flightlesslabs/dodo-ui",rel:"nofollow",children:"Github"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.npmjs.com/package/@flightlesslabs/dodo-ui",rel:"nofollow",children:"NPM"})}),`
`]})]})}function m(s={}){const{wrapper:n}={...l(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{m as default};
