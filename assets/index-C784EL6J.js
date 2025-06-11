import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-BgsZqCL6.js";import{S as r}from"./blocks-BHd8ulsN.js";import"./iframe-L6KL7_8k.js";function l(n){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o.h1,{id:"logger-utility",children:"Logger Utility"}),`
`,e.jsx(o.p,{children:"A customizable logger function that supports:"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["Log levels (",e.jsx(o.code,{children:"info"}),", ",e.jsx(o.code,{children:"warn"}),", ",e.jsx(o.code,{children:"error"}),")"]}),`
`,e.jsx(o.li,{children:"Optional labels"}),`
`,e.jsxs(o.li,{children:["A ",e.jsx(o.code,{children:"show"})," flag to toggle logging"]}),`
`,e.jsx(o.li,{children:"Console output with timestamps"}),`
`]}),`
`,e.jsx(o.h2,{id:"import",children:"Import"}),`
`,e.jsx(o.p,{children:"Import the logger creation function:"}),`
`,e.jsx(r,{dark:!0,language:"ts",code:"import { createLogger } from '@flightlesslabs/dodo-ui';"}),`
`,e.jsx(o.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(o.p,{children:"Create a logger and log different types of messages:"}),`
`,e.jsx(r,{dark:!0,language:"ts",code:`const logger = createLogger({
label: 'AuthService',
});

logger.info('User logged in');
logger.warn('Token is about to expire');
logger.error('Login failed', new Error('Invalid credentials'));
`}),`
`,e.jsx(o.h2,{id:"disable-logging",children:"Disable Logging"}),`
`,e.jsx(o.p,{children:"You can use the `show` flag to completely silence the logger (e.g., in production):"}),`
`,e.jsx(r,{dark:!0,language:"ts",code:`const logger = createLogger({
show: false,
});

logger.info('This will not be logged');
`}),`
`,e.jsx(o.h2,{id:"level-filtering",children:"Level Filtering"}),`
`,e.jsxs(o.p,{children:["The logger will only show messages ",e.jsx(o.strong,{children:"at or above"})," the configured ",e.jsx(o.code,{children:"level"}),":"]}),`
`,e.jsx(r,{dark:!0,language:"ts",code:`const logger = createLogger();

logger.info('This will NOT show');
logger.warn('This WILL show');
logger.error('This WILL show');
`})]})}function d(n={}){const{wrapper:o}={...s(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(l,{...n})}):l(n)}export{d as default};
