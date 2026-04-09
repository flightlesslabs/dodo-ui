import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-Dg5Q4cgl.js";import{a as n}from"./chunk-RD3KTAHR-BL94KM58.js";import{a as r,o as i}from"./blocks-B9R52yfl.js";import{t as a}from"./mdx-react-shim-CBLMQScp.js";function o(e){let n={h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:`-theme-system`,children:`🎨 Theme System`}),`
`,(0,c.jsx)(n.p,{children:`A lightweight theme system built using context + local store.`}),`
`,(0,c.jsx)(n.h2,{id:`-theme-context`,children:`🧩 Theme Context`}),`
`,(0,c.jsx)(n.h3,{id:`-import`,children:`📦 Import`}),`
`,(0,c.jsx)(r,{dark:!0,language:`ts`,code:`
import { useThemeContext } from '@flightlesslabs/dodo-ui';
`}),`
`,(0,c.jsx)(n.p,{children:`Provides access to the active theme.`}),`
`,(0,c.jsx)(n.h3,{id:`usage`,children:`Usage`}),`
`,(0,c.jsx)(r,{dark:!0,language:`ts`,code:`
const { theme } = useThemeContext();
`}),`
`,(0,c.jsx)(n.h2,{id:`-theme-store`,children:`🏪 Theme Store`}),`
`,(0,c.jsx)(n.p,{children:`Global theme state.`}),`
`,(0,c.jsx)(n.h3,{id:`-import-1`,children:`📦 Import`}),`
`,(0,c.jsx)(r,{dark:!0,language:`ts`,code:`
import { useThemeStore } from '@flightlesslabs/dodo-ui';
`}),`
`,(0,c.jsx)(n.h3,{id:`read`,children:`Read`}),`
`,(0,c.jsx)(r,{dark:!0,language:`ts`,code:`
const theme = useThemeStore.theme;
`})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};