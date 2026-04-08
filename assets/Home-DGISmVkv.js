import{u as l,j as s,S as t}from"./blocks-DqiNq93X.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-B6lunisr.js";const o=`{
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
    "@chromatic-com/storybook": "5.1.1",
    "@eslint/compat": "^2.0.4",
    "@eslint/js": "^10.0.1",
    "@iconify/svelte": "^5.2.1",
    "@internationalized/date": "^3.12.0",
    "@storybook/addon-docs": "^10.3.5",
    "@storybook/addon-svelte-csf": "5.1.2",
    "@storybook/addon-vitest": "^10.3.5",
    "@storybook/sveltekit": "^10.3.5",
    "@sveltejs/adapter-static": "^3.0.10",
    "@sveltejs/kit": "^2.57.0",
    "@sveltejs/package": "^2.5.7",
    "@sveltejs/vite-plugin-svelte": "^7.0.0",
    "@testing-library/jest-dom": "^6.9.1",
    "@testing-library/svelte": "^5.3.1",
    "@testing-library/user-event": "^14.6.1",
    "@types/file-saver": "^2.0.7",
    "@types/node": "^25.5.2",
    "@vitest/browser": "^4.1.3",
    "@vitest/coverage-v8": "^4.1.3",
    "bits-ui": "^2.17.2",
    "dayjs": "^1.11.20",
    "eslint": "^10.2.0",
    "eslint-config-prettier": "^10.1.8",
    "eslint-plugin-storybook": "10.3.5",
    "eslint-plugin-svelte": "^3.17.0",
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
    "typescript": "^5.9.3",
    "typescript-eslint": "^8.58.1",
    "vite": "^7.3.2",
    "vitest": "^4.1.3"
  },
  "keywords": [
    "svelte"
  ]
}
`;function i(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...l(),...n.components};return s.jsxs(s.Fragment,{children:[s.jsxs("main",{style:{textAlign:"center"},children:[s.jsx("img",{src:"dodo-circle-6.png",style:{width:200,height:"auto"}}),s.jsx(e.h1,{id:"dodo-ui",children:"Dodo UI"}),s.jsxs("h3",{style:{fontWeight:500},children:["v",JSON.parse(o)?.version]}),s.jsx("h3",{style:{fontWeight:400},children:s.jsxs(e.p,{children:["Opinionated UI framework for Svelte, based on ",s.jsx(e.a,{href:"https://bits-ui.com/",rel:"nofollow",children:"Bits UI"})]})}),s.jsxs(e.h3,{id:"github---npm",children:[s.jsx(e.a,{href:"https://github.com/flightlesslabs/dodo-ui",rel:"nofollow",children:"Github"})," - ",s.jsx(e.a,{href:"https://www.npmjs.com/package/@flightlesslabs/dodo-ui",rel:"nofollow",children:"npm"})]})]}),`
`,s.jsx("br",{}),`
`,s.jsx("br",{}),`
`,s.jsx(e.h2,{id:"install",children:"Install"}),`
`,s.jsx(t,{dark:!0,language:"bash",code:`
pnpm add bits-ui @internationalized/date @flightlesslabs/dodo-ui
`}),`
`,s.jsxs(e.p,{children:["We are using ",s.jsxs(e.strong,{children:["bits-ui@",JSON.parse(o).devDependencies["bits-ui"]]})," internally"]}),`
`,s.jsx(e.h2,{id:"add-css",children:"Add css"}),`
`,s.jsxs(e.p,{children:["Add global css in your ",s.jsx(e.code,{children:"+layout.svelte"})," file"]}),`
`,s.jsx(t,{dark:!0,language:"js",code:`
import '@flightlesslabs/dodo-ui/styles/global.css';
import '@flightlesslabs/dodo-ui/styles/components.css';
`}),`
`,s.jsx(e.h2,{id:"theme",children:"Theme"}),`
`,s.jsxs(e.p,{children:["We recommend that the ",s.jsx(e.a,{href:"?path=/docs/components-layout-theme--docs",children:"Theme"})," component should be imported in the ",s.jsx(e.code,{children:"_layout.svelte"})," (SvelteKit) or any other root location."]}),`
`,s.jsx(t,{dark:!0,language:"js",code:`
import { Theme } '@flightlesslabs/dodo-ui';

<Theme>
// Content will go here
</Theme>
`}),`
`,s.jsx(e.h2,{id:"use-it",children:"Use it!"}),`
`,s.jsxs(e.p,{children:["Lets import ",s.jsx(e.a,{href:"?path=/docs/components-form-button--docs",children:"Button"})," component. Checkout documentation for ",s.jsx(e.a,{href:"?path=/docs/components-form-button--docs",children:"Button"})]}),`
`,s.jsx(t,{dark:!0,language:"js",code:`
import { Button } '@flightlesslabs/dodo-ui';
`}),`
`,s.jsx(e.h2,{id:"explore-more",children:"Explore more"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:s.jsx(e.a,{href:"?path=/docs/components-form-button--docs",children:"Button"})}),`
`,s.jsx(e.li,{children:s.jsx(e.a,{href:"?path=/docs/components-form-textinput--docs",children:"TextInput"})}),`
`,s.jsx(e.li,{children:s.jsx(e.a,{href:"https://uicolors.app/generate/1cc049",rel:"nofollow",children:"Tailwind CSS Color Generator"})}),`
`]})]})}function p(n={}){const{wrapper:e}={...l(),...n.components};return e?s.jsx(e,{...n,children:s.jsx(i,{...n})}):i(n)}export{p as default};
