import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-Dg5Q4cgl.js";import{a as n}from"./chunk-RD3KTAHR-BL94KM58.js";import{a as r,o as i}from"./blocks-B9R52yfl.js";import{t as a}from"./mdx-react-shim-CBLMQScp.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:`createdatefactory`,children:`createDateFactory`}),`
`,(0,c.jsxs)(n.p,{children:[`A `,(0,c.jsx)(n.strong,{children:`factory function`}),` that creates a `,(0,c.jsx)(n.code,{children:`createDate`}),` utility with an optional custom `,(0,c.jsx)(n.code,{children:`dayjs`}),` instance.`]}),`
`,(0,c.jsx)(n.p,{children:`This allows advanced users to:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Inject their own configured `,(0,c.jsx)(n.code,{children:`dayjs`})]}),`
`,(0,c.jsx)(n.li,{children:`Share plugins across multiple libraries`}),`
`,(0,c.jsxs)(n.li,{children:[`Avoid global `,(0,c.jsx)(n.code,{children:`dayjs.extend`}),` pollution`]}),`
`,(0,c.jsx)(n.li,{children:`Create isolated date environments`}),`
`]}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h2,{id:`-import`,children:`📦 Import`}),`
`,(0,c.jsx)(r,{dark:!0,language:`ts`,code:`
import { createDateFactory } from '@flightlesslabs/dodo-ui';
`}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h2,{id:`-basic-usage`,children:`🚀 Basic Usage`}),`
`,(0,c.jsx)(n.h3,{id:`default-factory`,children:`Default Factory`}),`
`,(0,c.jsx)(r,{dark:!0,language:`ts`,code:`
import { createDateFactory } from '@flightlesslabs/dodo-ui';

const { createDate } = createDateFactory();

const now = createDate();
console.log(now.format());
`}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h2,{id:`-why-use-a-factory`,children:`🧠 Why Use a Factory?`}),`
`,(0,c.jsxs)(n.p,{children:[`Instead of relying on global `,(0,c.jsx)(n.code,{children:`dayjs.extend`}),`, you can:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`isolate plugin setups`}),`
`,(0,c.jsx)(n.li,{children:`avoid conflicts in monorepos`}),`
`,(0,c.jsx)(n.li,{children:`support multiple configurations`}),`
`,(0,c.jsx)(n.li,{children:`improve testability`}),`
`]}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h2,{id:`-custom-dayjs-instance`,children:`🔌 Custom Dayjs Instance`}),`
`,(0,c.jsx)(n.h3,{id:`inject-your-own-configured-instance`,children:`Inject your own configured instance`}),`
`,(0,c.jsx)(r,{dark:!0,language:`ts`,code:`
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

const { createDate } = createDateFactory(dayjs);

const date = createDate("2025-01-01", "YYYY-MM-DD");
`}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h2,{id:`️-behavior`,children:`⚙️ Behavior`}),`
`,(0,c.jsxs)(n.p,{children:[`The factory wraps your `,(0,c.jsx)(n.code,{children:`dayjs`}),` instance and preserves:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`UTC handling`}),`
`,(0,c.jsx)(n.li,{children:`Timezone support`}),`
`,(0,c.jsx)(n.li,{children:`Strict parsing`}),`
`,(0,c.jsx)(n.li,{children:`Validation options`}),`
`]}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h2,{id:`-priority-order`,children:`🔁 Priority Order`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsx)(n.li,{children:`utc (highest priority)`}),`
`,(0,c.jsx)(n.li,{children:`timezone`}),`
`,(0,c.jsx)(n.li,{children:`local parsing`}),`
`]}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h2,{id:`-returned-api`,children:`📥 Returned API`}),`
`,(0,c.jsx)(r,{dark:!0,language:`ts`,code:`
{
createDate: Function,
dayjs: DayjsInstance
}
`}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h2,{id:`-example-multiple-factories`,children:`🧪 Example: Multiple Factories`}),`
`,(0,c.jsx)(r,{dark:!0,language:`ts`,code:`
const factoryA = createDateFactory(dayjsA);
const factoryB = createDateFactory(dayjsB);

factoryA.createDate("2025-01-01");
factoryB.createDate("2025-01-01");
`})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};