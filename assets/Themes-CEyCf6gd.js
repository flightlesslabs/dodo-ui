import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-Lzlp0Lgr.js";import{S as d}from"./blocks-D41xVu8S.js";import"./iframe-CwZFwEuH.js";const m=""+new URL("dark-theme-toggle-C2LARM3V.png",import.meta.url).href;function o(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"themes",children:"Themes"}),`
`,e.jsx(n.h2,{id:"dark-theme",children:"Dark theme"}),`
`,e.jsxs(n.p,{children:["dark theme can be activated by adding ",e.jsx(n.code,{children:".dodo-theme--dark"})," class on the top container."]}),`
`,e.jsx(d,{dark:!0,language:"html",code:`
<body class="dodo-theme--dark">
...
`}),`
`,e.jsx(n.h2,{id:"toggle-theme-in-documentation",children:"Toggle theme in documentation"}),`
`,e.jsx(n.p,{children:"Use the moon icon to toogle theme in documentation mode"}),`
`,e.jsx("img",{src:m})]})}function i(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{i as default};
