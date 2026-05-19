<script lang="ts" module>
  export type AccordionBaseProps = {
    /** Custom CSS class names */
    class?: string;

    /** bits ui accordionContentProps */
    accordionContentProps?: AccordionContentProps;
  };

  export type AccordionProps = AccordionSingleProps | AccordionMultipleProps;
</script>

<script lang="ts">
  import { type AccordionContentProps } from 'bits-ui';
  import { setAccordionContext } from './context.ts';
  import type { AccordionSingleProps } from './AccordionSingle.svelte';
  import AccordionSingle from './AccordionSingle.svelte';
  import AccordionMultiple, { type AccordionMultipleProps } from './AccordionMultiple.svelte';

  let {
    class: className = '',
    value = $bindable(),
    ref = $bindable(null),
    children,
    accordionContentProps,
    type,
    ...restProps
  }: AccordionProps = $props();

  /**
   * 🧩 Context (reactive via getters)
   */
  setAccordionContext({
    get accordionContentProps() {
      return accordionContentProps;
    },
  });

  /**
   * Computed class list
   */
  const classes = $derived(['dodo-ui-Accordion', className].filter(Boolean));
</script>

{#if type === 'single'}
  <AccordionSingle
    {...restProps as AccordionSingleProps}
    bind:ref
    bind:value={value as string | undefined}
    class={classes.join(' ')}
  >
    {@render children?.()}
  </AccordionSingle>
{:else}
  <AccordionMultiple
    {...restProps as AccordionProps}
    bind:ref
    bind:value={value as string[] | undefined}
    class={classes.join(' ')}
  >
    {@render children?.()}
  </AccordionMultiple>
{/if}
