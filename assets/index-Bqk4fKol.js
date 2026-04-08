import{u as r,j as e,S as s}from"./blocks-DqiNq93X.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-B6lunisr.js";function o(n){const t={h1:"h1",h2:"h2",h3:"h3",p:"p",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"-theme-system",children:"🎨 Theme System"}),`
`,e.jsx(t.p,{children:"A lightweight theme system built using context + local store."}),`
`,e.jsx(t.h2,{id:"-theme-context",children:"🧩 Theme Context"}),`
`,e.jsx(t.h3,{id:"-import",children:"📦 Import"}),`
`,e.jsx(s,{dark:!0,language:"ts",code:`
import { useThemeContext } from '@flightlesslabs/dodo-ui';
`}),`
`,e.jsx(t.p,{children:"Provides access to the active theme."}),`
`,e.jsx(t.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(s,{dark:!0,language:"ts",code:`
const { theme } = useThemeContext();
`}),`
`,e.jsx(t.h2,{id:"-theme-store",children:"🏪 Theme Store"}),`
`,e.jsx(t.p,{children:"Global theme state."}),`
`,e.jsx(t.h3,{id:"-import-1",children:"📦 Import"}),`
`,e.jsx(s,{dark:!0,language:"ts",code:`
import { useThemeStore } from '@flightlesslabs/dodo-ui';
`}),`
`,e.jsx(t.h3,{id:"read",children:"Read"}),`
`,e.jsx(s,{dark:!0,language:"ts",code:`
const theme = useThemeStore.theme;
`})]})}function d(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{d as default};
