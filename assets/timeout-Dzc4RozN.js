import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-Dg5Q4cgl.js";import{t as n}from"./jsx-runtime-BtolTc4S.js";import{t as r}from"./mdx-react-shim-CBLMQScp.js";function i(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components},{Source:r}=n;return r||o(`Source`,!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:`timeout`,children:`timeout`}),`
`,(0,s.jsx)(n.p,{children:`A simple utility to delay execution using Promises.`}),`
`,(0,s.jsxs)(n.p,{children:[`Useful for `,(0,s.jsx)(n.strong,{children:`pausing async workflows`}),`, `,(0,s.jsx)(n.strong,{children:`simulating delays`}),`, or `,(0,s.jsx)(n.strong,{children:`controlling execution timing`}),`.`]}),`
`,(0,s.jsx)(n.hr,{}),`
`,(0,s.jsx)(n.h2,{id:`-import`,children:`📦 Import`}),`
`,(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:`language-ts`,children:`import { timeout } from '@flightlesslabs/dodo-ui';
`})}),`
`,(0,s.jsx)(n.hr,{}),`
`,(0,s.jsx)(n.h2,{id:`-basic-usage`,children:`🚀 Basic Usage`}),`
`,(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:`language-ts`,children:`await timeout(1000); // waits 1 second
`})}),`
`,(0,s.jsx)(n.hr,{}),`
`,(0,s.jsx)(n.h2,{id:`-resolve-with-value`,children:`🎯 Resolve with Value`}),`
`,(0,s.jsx)(n.p,{children:`You can optionally pass a value that will be returned after the delay.`}),`
`,(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:`language-ts`,children:`const result = await timeout(500, "done");

console.log(result); // "done"
`})}),`
`,(0,s.jsx)(n.hr,{}),`
`,(0,s.jsx)(n.h2,{id:`️-api`,children:`⚙️ API`}),`
`,(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:`language-ts`,children:`function timeout<T = void>(
  milliseconds: number,
  value?: T
): Promise<T>
`})}),`
`,(0,s.jsx)(n.hr,{}),`
`,(0,s.jsx)(n.h3,{id:`milliseconds`,children:(0,s.jsx)(n.code,{children:`milliseconds`})}),`
`,(0,s.jsxs)(n.ul,{children:[`
`,(0,s.jsx)(n.li,{children:`Time to wait before resolving (in ms)`}),`
`,(0,s.jsxs)(n.li,{children:[`Must be `,(0,s.jsx)(n.code,{children:`>= 0`})]}),`
`]}),`
`,(0,s.jsx)(n.hr,{}),`
`,(0,s.jsx)(n.h3,{id:`value`,children:(0,s.jsx)(n.code,{children:`value`})}),`
`,(0,s.jsxs)(n.ul,{children:[`
`,(0,s.jsx)(n.li,{children:`Optional value to resolve with`}),`
`,(0,s.jsxs)(n.li,{children:[`Defaults to `,(0,s.jsx)(n.code,{children:`undefined`})]}),`
`]}),`
`,(0,s.jsx)(n.hr,{}),`
`,(0,s.jsx)(n.h2,{id:`️-error-handling`,children:`⚠️ Error Handling`}),`
`,(0,s.jsx)(n.p,{children:`If a negative duration is provided, the promise will reject:`}),`
`,(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:`language-ts`,children:`await timeout(-1); // ❌ throws Error
`})}),`
`,(0,s.jsx)(n.hr,{}),`
`,(0,s.jsx)(n.h2,{id:`-use-cases`,children:`🧠 Use Cases`}),`
`,(0,s.jsxs)(n.ul,{children:[`
`,(0,s.jsx)(n.li,{children:`Delay execution in async functions`}),`
`,(0,s.jsx)(n.li,{children:`Simulate API latency in tests`}),`
`,(0,s.jsx)(n.li,{children:`Simple throttling or pacing logic`}),`
`]}),`
`,(0,s.jsx)(n.hr,{}),`
`,(0,s.jsx)(n.h2,{id:`-examples`,children:`🔍 Examples`}),`
`,(0,s.jsx)(n.h3,{id:`async-flow`,children:`Async Flow`}),`
`,(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:`language-ts`,children:`async function run() {
  console.log("Start");

await timeout(1000);

console.log("End");
}
`})}),`
`,(0,s.jsx)(n.hr,{}),`
`,(0,s.jsx)(n.h3,{id:`with-data`,children:`With Data`}),`
`,(0,s.jsx)(r,{dark:!0,language:`ts`,code:`
const data = await timeout(300, { success: true });

console.log(data.success); // true
`}),`
`,(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:`language-ts`,children:`const data = await timeout(300, { success: true });

console.log(data.success); // true
`})})]})}function a(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var s;e((()=>{s=n(),r()}))();export{a as default};