import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-CiXdrfpW.js";import{S as t}from"./blocks-u-95I-Eg.js";import"./iframe-MiCc8z-P.js";import"./preload-helper-D9Z9MdNV.js";const l=`{
  "name": "@flightlesslabs/dodo-ui",
  "version": "0.17.2",
  "scripts": {
    "copy-css": "cpy src/lib/styles/global.css dist/styles --parents",
    "build": "vite build && pnpm copy-css && pnpm run prepack",
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
      "svelte": "./dist/index.js",
      "scss": "./dist/styles/scss/index.scss"
    },
    "./styles/global.css": "./dist/styles/global.css"
  },
  "peerDependencies": {
    "svelte": "^5.0.0"
  },
  "devDependencies": {
    "@chromatic-com/storybook": "4.1.0",
    "@eslint/compat": "^1.3.1",
    "@eslint/js": "^9.32.0",
    "@storybook/addon-docs": "^9.1.1",
    "@storybook/addon-svelte-csf": "5.0.7",
    "@storybook/addon-vitest": "^9.1.1",
    "@storybook/sveltekit": "^9.1.1",
    "@sveltejs/adapter-static": "^3.0.8",
    "@sveltejs/kit": "^2.27.0",
    "@sveltejs/package": "^2.4.0",
    "@sveltejs/vite-plugin-svelte": "^6.1.0",
    "@types/file-saver": "^2.0.7",
    "@vitest/browser": "^3.2.4",
    "@vitest/coverage-v8": "^3.2.4",
    "@vueless/storybook-dark-mode": "^9.0.6",
    "cpy-cli": "^5.0.0",
    "eslint": "^9.32.0",
    "eslint-config-prettier": "^10.1.8",
    "eslint-plugin-storybook": "9.1.1",
    "eslint-plugin-svelte": "^3.11.0",
    "globals": "^16.3.0",
    "playwright": "^1.54.2",
    "prettier": "^3.6.2",
    "prettier-plugin-svelte": "^3.4.0",
    "publint": "^0.3.12",
    "sass": "^1.89.2",
    "storybook": "^9.1.1",
    "svelte": "^5.37.3",
    "svelte-check": "^4.3.1",
    "svelte-preprocess": "^6.0.3",
    "typescript": "^5.9.2",
    "typescript-eslint": "^8.39.0",
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
    "dayjs": "^1.11.13",
    "file-saver": "^2.0.5"
  }
}
`;function o(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...i(),...n.components};return s.jsxs(s.Fragment,{children:[s.jsxs("main",{style:{textAlign:"center"},children:[s.jsx("img",{src:"dodo-circle-6.png",style:{width:200,height:"auto"}}),s.jsx(e.h1,{id:"dodo-ui",children:"Dodo UI"}),s.jsxs("h3",{style:{fontWeight:500},children:["v",JSON.parse(l)?.version]}),s.jsx("h3",{style:{fontWeight:400},children:"An open-source, opinionated UI framework for Svelte."}),s.jsxs(e.h3,{id:"github---npm---customize",children:[s.jsx(e.a,{href:"https://github.com/flightlesslabs/dodo-ui",rel:"nofollow",children:"Github"})," - ",s.jsx(e.a,{href:"https://www.npmjs.com/package/@flightlesslabs/dodo-ui",rel:"nofollow",children:"npm"})," - ",s.jsx(e.a,{href:"?path=/docs/developer-tools-customize-autocustomize--docs",children:"Customize"})]})]}),`
`,s.jsx("br",{}),`
`,s.jsx("br",{}),`
`,s.jsx(e.h2,{id:"install",children:"Install"}),`
`,s.jsx(e.p,{children:"pnpm"}),`
`,s.jsx(t,{dark:!0,language:"bash",code:`
pnpm add @flightlesslabs/dodo-ui
`}),`
`,s.jsx(e.p,{children:"npm"}),`
`,s.jsx(t,{dark:!0,language:"bash",code:`
npm i @flightlesslabs/dodo-ui
`}),`
`,s.jsx(e.h2,{id:"add-css",children:"Add css"}),`
`,s.jsxs(e.p,{children:["Add global css in your ",s.jsx(e.code,{children:"+layout.svelte"})," file"]}),`
`,s.jsx(t,{dark:!0,language:"js",code:`
import '@flightlesslabs/dodo-ui/styles/global.css';
`}),`
`,s.jsx(e.h2,{id:"use-it",children:"Use it!"}),`
`,s.jsxs(e.p,{children:["Lets import ",s.jsx(e.a,{href:"?path=/docs/components-form-button--docs",children:"Button"})," component. Checkout documentation for ",s.jsx(e.a,{href:"?path=/docs/components-form-button--docs",children:"Button"})]}),`
`,s.jsx(t,{dark:!0,language:"js",code:`
import { Button } '@flightlesslabs/dodo-ui';
`}),`
`,s.jsx(e.h2,{id:"explore-more",children:"Explore more"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:s.jsx(e.a,{href:"?path=/docs/developer-tools-philosophy-themes--docs#dark-theme",children:"Dark Theme"})}),`
`,s.jsx(e.li,{children:s.jsx(e.a,{href:"?path=/docs/developer-tools-philosophy-colors--docs",children:"Colors"})}),`
`,s.jsx(e.li,{children:s.jsx(e.a,{href:"?path=/docs/developer-tools-customize-autocustomize--docs",children:"Customize"})}),`
`,s.jsx(e.li,{children:s.jsx(e.a,{href:"?path=/docs/developer-tools-philosophy-colors--docs#adjusting-opacity",children:"Adjust Color Opacity"})}),`
`]})]})}function a(n={}){const{wrapper:e}={...i(),...n.components};return e?s.jsx(e,{...n,children:s.jsx(o,{...n})}):o(n)}export{a as default};
