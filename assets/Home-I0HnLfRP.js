import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-Lzlp0Lgr.js";import{S as t}from"./blocks-D41xVu8S.js";import"./iframe-CwZFwEuH.js";const l=`{
  "name": "@flightlesslabs/dodo-ui",
  "version": "0.15.0",
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
    "@chromatic-com/storybook": "4.0.1",
    "@eslint/compat": "^1.3.1",
    "@eslint/js": "^9.32.0",
    "@storybook/addon-docs": "^9.0.18",
    "@storybook/addon-svelte-csf": "5.0.7",
    "@storybook/addon-vitest": "^9.0.18",
    "@storybook/sveltekit": "^9.0.18",
    "@sveltejs/adapter-static": "^3.0.8",
    "@sveltejs/kit": "^2.26.1",
    "@sveltejs/package": "^2.4.0",
    "@sveltejs/vite-plugin-svelte": "^6.1.0",
    "@vitest/browser": "^3.2.4",
    "@vitest/coverage-v8": "^3.2.4",
    "@vueless/storybook-dark-mode": "^9.0.6",
    "eslint": "^9.32.0",
    "eslint-config-prettier": "^10.1.8",
    "eslint-plugin-storybook": "9.0.18",
    "eslint-plugin-svelte": "^3.11.0",
    "globals": "^16.3.0",
    "playwright": "^1.54.1",
    "prettier": "^3.6.2",
    "prettier-plugin-svelte": "^3.4.0",
    "publint": "^0.3.12",
    "sass": "^1.89.2",
    "storybook": "^9.0.18",
    "svelte": "^5.37.1",
    "svelte-check": "^4.3.0",
    "svelte-preprocess": "^6.0.3",
    "typescript": "^5.8.3",
    "typescript-eslint": "^8.38.0",
    "vite": "^7.0.6",
    "vitest": "^3.2.4"
  },
  "keywords": [
    "svelte"
  ],
  "volta": {
    "node": "22.15.1",
    "pnpm": "10.12.1"
  },
  "dependencies": {
    "@iconify/svelte": "^5.0.1",
    "dayjs": "^1.11.13"
  }
}
`;function o(s){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsxs("main",{style:{textAlign:"center"},children:[e.jsx("img",{src:"dodo-circle-6.png",style:{width:200,height:"auto"}}),e.jsx(n.h1,{id:"dodo-ui",children:"Dodo UI"}),e.jsxs("h3",{style:{fontWeight:500},children:["v",JSON.parse(l)?.version]}),e.jsx("h3",{style:{fontWeight:400},children:"An open-source, opinionated UI framework for Svelte."}),e.jsxs(n.h3,{id:"github---npm",children:[e.jsx(n.a,{href:"https://github.com/flightlesslabs/dodo-ui",rel:"nofollow",children:"Github"})," - ",e.jsx(n.a,{href:"https://www.npmjs.com/package/@flightlesslabs/dodo-ui",rel:"nofollow",children:"npm"})]})]}),`
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
`,e.jsx(n.h2,{id:"use-it",children:"Use it!"}),`
`,e.jsxs(n.p,{children:["Lets import ",e.jsx(n.a,{href:"?path=/docs/components-form-button--docs",children:"Button"})," component. Checkout documentation for ",e.jsx(n.a,{href:"?path=/docs/components-form-button--docs",children:"Button"})]}),`
`,e.jsx(t,{dark:!0,language:"js",code:`
import { Button } '@flightlesslabs/dodo-ui';
`}),`
`,e.jsx(n.h2,{id:"explore-more",children:"Explore more"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/docs/developer-tools-philosophy-themes--docs#dark-theme",children:"Dark Theme"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/docs/developer-tools-philosophy-colors--docs",children:"Colors"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/docs/developer-tools-philosophy-colors--docs#adjusting-opacity",children:"Adjust Color Opacity"})}),`
`]})]})}function h(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{h as default};
