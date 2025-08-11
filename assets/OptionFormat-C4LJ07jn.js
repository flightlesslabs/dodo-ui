import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-NhNSy-XH.js";import{S as i}from"./blocks-D_S0gBN3.js";import"./iframe-CCEZUMhS.js";import"./preload-helper-D9Z9MdNV.js";function o(n){const t={h1:"h1",h2:"h2",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"option-format",children:"Option Format"}),`
`,e.jsx(t.h2,{id:"dynamicmenuitemoption",children:"DynamicMenuItemOption"}),`
`,e.jsx(i,{dark:!0,language:"ts",code:`
type DynamicMenuItemOption<TMeta = unknown> = {
  id: string;
  /** label  */
  label?: string;
  /** Custom Metadata  */
  meta?: TMeta;
  /** Menu Item type */
  type?: MenuItemType;
  /** Menu Separator */
  separator?: boolean;
  /** How large should the Menu Items be? */
  size?: ComponentSize;
  /** The onclick event handler */
  onclick?: MouseEventHandler<HTMLButtonElement>;
  /**  disabled state */
  disabled?: boolean;
  /** link href */
  href?: string;
  /** Link button: download  */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  download?: any;
  /** Link button: hreflang  */
  hreflang?: string | undefined | null;
  /** Link button: media  */
  media?: string | undefined | null;
  /** Link button: ping  */
  ping?: string | undefined | null;
  /** Link button: rel  */
  rel?: string | undefined | null;
  /** Link button: target  */
  target?: ButtonLinkTarget;
  /** Link button: Type  */
  anchorMediaType?: string | undefined | null;
  /** Link button: referrerpolicy  */
  referrerpolicy?: ButtonLinkReferrerpolicy;
};
`}),`
`,e.jsx(t.h2,{id:"example-values",children:"Example values"}),`
`,e.jsx(i,{dark:!0,language:"ts",code:`
const options: DynamicMenuItemOption[] = [
 {
  id: '1',
  label: 'One',
},
{
  id: '2',
  label: 'Two',
},
{
  id: '3',
  label: 'Three',
  disabled: true,
},
];
`})]})}function m(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{m as default};
