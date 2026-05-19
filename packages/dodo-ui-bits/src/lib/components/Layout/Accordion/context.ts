import type { AccordionContentProps } from 'bits-ui';
import { createContext } from 'svelte';

export interface AccordionContext {
  /** bits ui accordionContentProps */
  accordionContentProps?: AccordionContentProps;
}

export const [getAccordionContext, setAccordionContext] = createContext<
  AccordionContext | undefined
>();

export function useAccordionContext(): AccordionContext | undefined {
  try {
    return getAccordionContext();
  } catch {
    return undefined;
  }
}
