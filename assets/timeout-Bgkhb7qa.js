import{u as r,j as n,S as s}from"./blocks-DqiNq93X.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-B6lunisr.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"timeout",children:"timeout"}),`
`,n.jsx(e.p,{children:"A simple utility to delay execution using Promises."}),`
`,n.jsxs(e.p,{children:["Useful for ",n.jsx(e.strong,{children:"pausing async workflows"}),", ",n.jsx(e.strong,{children:"simulating delays"}),", or ",n.jsx(e.strong,{children:"controlling execution timing"}),"."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-import",children:"📦 Import"}),`
`,n.jsx(s,{dark:!0,language:"ts",code:`
import { timeout } from '@flightlesslabs/dodo-ui';
`}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-basic-usage",children:"🚀 Basic Usage"}),`
`,n.jsx(s,{dark:!0,language:"ts",code:`
await timeout(1000); // waits 1 second
`}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-resolve-with-value",children:"🎯 Resolve with Value"}),`
`,n.jsx(e.p,{children:"You can optionally pass a value that will be returned after the delay."}),`
`,n.jsx(s,{dark:!0,language:"ts",code:`
const result = await timeout(500, "done");

console.log(result); // "done"
`}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"️-api",children:"⚙️ API"}),`
`,n.jsx(s,{dark:!0,language:"ts",code:`
function timeout<T = void>(
milliseconds: number,
value?: T
): Promise<T>
`}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"milliseconds",children:n.jsx(e.code,{children:"milliseconds"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Time to wait before resolving (in ms)"}),`
`,n.jsxs(e.li,{children:["Must be ",n.jsx(e.code,{children:">= 0"})]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"value",children:n.jsx(e.code,{children:"value"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Optional value to resolve with"}),`
`,n.jsxs(e.li,{children:["Defaults to ",n.jsx(e.code,{children:"undefined"})]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"️-error-handling",children:"⚠️ Error Handling"}),`
`,n.jsx(e.p,{children:"If a negative duration is provided, the promise will reject:"}),`
`,n.jsx(s,{dark:!0,language:"ts",code:`
await timeout(-1); // ❌ throws Error
`}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-use-cases",children:"🧠 Use Cases"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Delay execution in async functions"}),`
`,n.jsx(e.li,{children:"Simulate API latency in tests"}),`
`,n.jsx(e.li,{children:"Simple throttling or pacing logic"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-examples",children:"🔍 Examples"}),`
`,n.jsx(e.h3,{id:"async-flow",children:"Async Flow"}),`
`,n.jsx(s,{dark:!0,language:"ts",code:`
async function run() {
console.log("Start");

await timeout(1000);

console.log("End");
}
`}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"with-data",children:"With Data"}),`
`,n.jsx(s,{dark:!0,language:"ts",code:`
const data = await timeout(300, { success: true });

console.log(data.success); // true
`}),`
`,n.jsx(e.hr,{})]})}function d(i={}){const{wrapper:e}={...r(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(t,{...i})}):t(i)}export{d as default};
