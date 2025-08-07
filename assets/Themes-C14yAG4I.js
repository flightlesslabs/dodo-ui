import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-BSOb8NTb.js";import{S as d}from"./blocks-C266SVgX.js";import"./iframe-C3hxeNmA.js";import"./preload-helper-D9Z9MdNV.js";const m=""+new URL("dark-theme-toggle-C2LARM3V.png",import.meta.url).href;function o(n){const t={code:"code",h1:"h1",h2:"h2",p:"p",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"themes",children:"Themes"}),`
`,e.jsx(t.h2,{id:"dark-theme",children:"Dark theme"}),`
`,e.jsxs(t.p,{children:["dark theme can be activated by adding ",e.jsx(t.code,{children:".dodo-theme--dark"})," class on the top container."]}),`
`,e.jsx(d,{dark:!0,language:"html",code:`
<body class="dodo-theme--dark">
...
`}),`
`,e.jsx(t.h2,{id:"toggle-theme-in-documentation",children:"Toggle theme in documentation"}),`
`,e.jsx(t.p,{children:"Use the moon icon to toogle theme in documentation mode"}),`
`,e.jsx("img",{src:m})]})}function l(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{l as default};
