import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-Dg5Q4cgl.js";import{a as n}from"./chunk-RD3KTAHR-BL94KM58.js";import{a as r,o as i}from"./blocks-B9R52yfl.js";import{t as a}from"./mdx-react-shim-CBLMQScp.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:`timeout`,children:`timeout`}),`
`,(0,c.jsx)(n.p,{children:`A simple utility to delay execution using Promises.`}),`
`,(0,c.jsxs)(n.p,{children:[`Useful for `,(0,c.jsx)(n.strong,{children:`pausing async workflows`}),`, `,(0,c.jsx)(n.strong,{children:`simulating delays`}),`, or `,(0,c.jsx)(n.strong,{children:`controlling execution timing`}),`.`]}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h2,{id:`-import`,children:`📦 Import`}),`
`,(0,c.jsx)(r,{dark:!0,language:`ts`,code:`
import { timeout } from '@flightlesslabs/dodo-ui';
`}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h2,{id:`-basic-usage`,children:`🚀 Basic Usage`}),`
`,(0,c.jsx)(r,{dark:!0,language:`ts`,code:`
await timeout(1000); // waits 1 second
`}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h2,{id:`-resolve-with-value`,children:`🎯 Resolve with Value`}),`
`,(0,c.jsx)(n.p,{children:`You can optionally pass a value that will be returned after the delay.`}),`
`,(0,c.jsx)(r,{dark:!0,language:`ts`,code:`
const result = await timeout(500, "done");

console.log(result); // "done"
`}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h2,{id:`️-api`,children:`⚙️ API`}),`
`,(0,c.jsx)(r,{dark:!0,language:`ts`,code:`
function timeout<T = void>(
milliseconds: number,
value?: T
): Promise<T>
`}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h3,{id:`milliseconds`,children:(0,c.jsx)(n.code,{children:`milliseconds`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Time to wait before resolving (in ms)`}),`
`,(0,c.jsxs)(n.li,{children:[`Must be `,(0,c.jsx)(n.code,{children:`>= 0`})]}),`
`]}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h3,{id:`value`,children:(0,c.jsx)(n.code,{children:`value`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Optional value to resolve with`}),`
`,(0,c.jsxs)(n.li,{children:[`Defaults to `,(0,c.jsx)(n.code,{children:`undefined`})]}),`
`]}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h2,{id:`️-error-handling`,children:`⚠️ Error Handling`}),`
`,(0,c.jsx)(n.p,{children:`If a negative duration is provided, the promise will reject:`}),`
`,(0,c.jsx)(r,{dark:!0,language:`ts`,code:`
await timeout(-1); // ❌ throws Error
`}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h2,{id:`-use-cases`,children:`🧠 Use Cases`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Delay execution in async functions`}),`
`,(0,c.jsx)(n.li,{children:`Simulate API latency in tests`}),`
`,(0,c.jsx)(n.li,{children:`Simple throttling or pacing logic`}),`
`]}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h2,{id:`-examples`,children:`🔍 Examples`}),`
`,(0,c.jsx)(n.h3,{id:`async-flow`,children:`Async Flow`}),`
`,(0,c.jsx)(r,{dark:!0,language:`ts`,code:`
async function run() {
console.log("Start");

await timeout(1000);

console.log("End");
}
`}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h3,{id:`with-data`,children:`With Data`}),`
`,(0,c.jsx)(r,{dark:!0,language:`ts`,code:`
const data = await timeout(300, { success: true });

console.log(data.success); // true
`}),`
`,(0,c.jsx)(n.hr,{})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};