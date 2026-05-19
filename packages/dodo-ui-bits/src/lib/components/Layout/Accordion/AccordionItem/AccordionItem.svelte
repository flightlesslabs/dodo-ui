<script lang="ts" module>
  import type { Snippet } from 'svelte';

  /**
   * Public props for AccordionItem
   */
  export type AccordionItemProps = AccordionItemBitsUiProps & {
    /** Custom CSS class names */
    class?: string;

    /** bits ui accordionContentProps */
    accordionContentProps?: AccordionContentProps;

    /** Accordian title and trigger */
    title?: string;

    /** Accordian item Custom Header Content */
    customHeaderContent?: Snippet;
  };
</script>

<script lang="ts">
  import {
    Accordion as AccordionBitUi,
    type AccordionContentProps,
    type AccordionItemProps as AccordionItemBitsUiProps,
  } from 'bits-ui';
  import { useAccordionContext } from '../context.ts';
  import AccordionTrigger from './AccordionTrigger.svelte';

  let {
    class: className = '',
    ref = $bindable(null),
    children,
    accordionContentProps: itemAccordionContentProps,
    title,
    customHeaderContent,
    ...restProps
  }: AccordionItemProps = $props();

  const ctx = useAccordionContext();

  const accordionContentProps = $derived(itemAccordionContentProps ?? ctx?.accordionContentProps);

  /**
   * Computed class list
   */
  const classes = $derived(['dodo-ui-AccordionItem', className].filter(Boolean));
</script>

<AccordionBitUi.Item {...restProps} bind:ref class={classes.join(' ')}>
  <AccordionBitUi.Header class="AccordionItemHeader">
    {#if customHeaderContent}
      {@render customHeaderContent?.()}
    {:else}
      <AccordionTrigger>{title || ''}</AccordionTrigger>
    {/if}
  </AccordionBitUi.Header>

  <AccordionBitUi.Content {...accordionContentProps}>
    {@render children?.()}
  </AccordionBitUi.Content>
</AccordionBitUi.Item>
