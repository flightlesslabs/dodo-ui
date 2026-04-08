import{u as i,j as e,S as r}from"./blocks-DqiNq93X.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-B6lunisr.js";function s(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"createdatefactory",children:"createDateFactory"}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"factory function"})," that creates a ",e.jsx(n.code,{children:"createDate"})," utility with an optional custom ",e.jsx(n.code,{children:"dayjs"})," instance."]}),`
`,e.jsx(n.p,{children:"This allows advanced users to:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Inject their own configured ",e.jsx(n.code,{children:"dayjs"})]}),`
`,e.jsx(n.li,{children:"Share plugins across multiple libraries"}),`
`,e.jsxs(n.li,{children:["Avoid global ",e.jsx(n.code,{children:"dayjs.extend"})," pollution"]}),`
`,e.jsx(n.li,{children:"Create isolated date environments"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-import",children:"📦 Import"}),`
`,e.jsx(r,{dark:!0,language:"ts",code:`
import { createDateFactory } from '@flightlesslabs/dodo-ui';
`}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-basic-usage",children:"🚀 Basic Usage"}),`
`,e.jsx(n.h3,{id:"default-factory",children:"Default Factory"}),`
`,e.jsx(r,{dark:!0,language:"ts",code:`
import { createDateFactory } from '@flightlesslabs/dodo-ui';

const { createDate } = createDateFactory();

const now = createDate();
console.log(now.format());
`}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-why-use-a-factory",children:"🧠 Why Use a Factory?"}),`
`,e.jsxs(n.p,{children:["Instead of relying on global ",e.jsx(n.code,{children:"dayjs.extend"}),", you can:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"isolate plugin setups"}),`
`,e.jsx(n.li,{children:"avoid conflicts in monorepos"}),`
`,e.jsx(n.li,{children:"support multiple configurations"}),`
`,e.jsx(n.li,{children:"improve testability"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-custom-dayjs-instance",children:"🔌 Custom Dayjs Instance"}),`
`,e.jsx(n.h3,{id:"inject-your-own-configured-instance",children:"Inject your own configured instance"}),`
`,e.jsx(r,{dark:!0,language:"ts",code:`
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

const { createDate } = createDateFactory(dayjs);

const date = createDate("2025-01-01", "YYYY-MM-DD");
`}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"️-behavior",children:"⚙️ Behavior"}),`
`,e.jsxs(n.p,{children:["The factory wraps your ",e.jsx(n.code,{children:"dayjs"})," instance and preserves:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"UTC handling"}),`
`,e.jsx(n.li,{children:"Timezone support"}),`
`,e.jsx(n.li,{children:"Strict parsing"}),`
`,e.jsx(n.li,{children:"Validation options"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-priority-order",children:"🔁 Priority Order"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"utc (highest priority)"}),`
`,e.jsx(n.li,{children:"timezone"}),`
`,e.jsx(n.li,{children:"local parsing"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-returned-api",children:"📥 Returned API"}),`
`,e.jsx(r,{dark:!0,language:"ts",code:`
{
createDate: Function,
dayjs: DayjsInstance
}
`}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-example-multiple-factories",children:"🧪 Example: Multiple Factories"}),`
`,e.jsx(r,{dark:!0,language:"ts",code:`
const factoryA = createDateFactory(dayjsA);
const factoryB = createDateFactory(dayjsB);

factoryA.createDate("2025-01-01");
factoryB.createDate("2025-01-01");
`})]})}function d(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{d as default};
