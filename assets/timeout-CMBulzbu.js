import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-6sF1Ejqi.js";import{r as n}from"./react-C6wZJlw-.js";import{t as r}from"./mdx-react-shim-w1JW0gnZ.js";function i(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:`timeout`,children:`timeout`}),`
`,(0,o.jsx)(t.p,{children:`A simple utility to delay execution using Promises.`}),`
`,(0,o.jsxs)(t.p,{children:[`Useful for `,(0,o.jsx)(t.strong,{children:`pausing async workflows`}),`, `,(0,o.jsx)(t.strong,{children:`simulating delays`}),`, or `,(0,o.jsx)(t.strong,{children:`controlling execution timing`}),`.`]}),`
`,(0,o.jsx)(t.h2,{id:`-import`,children:`📦 Import`}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-ts`,children:`import { timeout } from '@flightlesslabs/dodo-ui';
`})}),`
`,(0,o.jsx)(t.h2,{id:`-basic-usage`,children:`🚀 Basic Usage`}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-ts`,children:`await timeout(1000); // waits 1 second
`})}),`
`,(0,o.jsx)(t.h2,{id:`-resolve-with-value`,children:`🎯 Resolve with Value`}),`
`,(0,o.jsx)(t.p,{children:`You can optionally pass a value that will be returned after the delay.`}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-ts`,children:`const result = await timeout(500, "done");

console.log(result); // "done"
`})}),`
`,(0,o.jsx)(t.h2,{id:`️-api`,children:`⚙️ API`}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-ts`,children:`function timeout<T = void>(
  milliseconds: number,
  value?: T
): Promise<T>
`})}),`
`,(0,o.jsx)(t.h3,{id:`milliseconds`,children:(0,o.jsx)(t.code,{children:`milliseconds`})}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsx)(t.li,{children:`Time to wait before resolving (in ms)`}),`
`,(0,o.jsxs)(t.li,{children:[`Must be `,(0,o.jsx)(t.code,{children:`>= 0`})]}),`
`]}),`
`,(0,o.jsx)(t.h3,{id:`value`,children:(0,o.jsx)(t.code,{children:`value`})}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsx)(t.li,{children:`Optional value to resolve with`}),`
`,(0,o.jsxs)(t.li,{children:[`Defaults to `,(0,o.jsx)(t.code,{children:`undefined`})]}),`
`]}),`
`,(0,o.jsx)(t.h2,{id:`️-error-handling`,children:`⚠️ Error Handling`}),`
`,(0,o.jsx)(t.p,{children:`If a negative duration is provided, the promise will reject:`}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-ts`,children:`await timeout(-1); // ❌ throws Error
`})}),`
`,(0,o.jsx)(t.h2,{id:`-use-cases`,children:`🧠 Use Cases`}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsx)(t.li,{children:`Delay execution in async functions`}),`
`,(0,o.jsx)(t.li,{children:`Simulate API latency in tests`}),`
`,(0,o.jsx)(t.li,{children:`Simple throttling or pacing logic`}),`
`]}),`
`,(0,o.jsx)(t.h2,{id:`-examples`,children:`🔍 Examples`}),`
`,(0,o.jsx)(t.h3,{id:`async-flow`,children:`Async Flow`}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-ts`,children:`async function run() {
  console.log("Start");

await timeout(1000);

console.log("End");
}
`})}),`
`,(0,o.jsx)(t.h3,{id:`with-data`,children:`With Data`}),`
`,(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:`language-ts`,children:`const data = await timeout(300, { success: true });

console.log(data.success); // true
`})})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}var o;e((()=>{o=t(),r()}))();export{a as default};