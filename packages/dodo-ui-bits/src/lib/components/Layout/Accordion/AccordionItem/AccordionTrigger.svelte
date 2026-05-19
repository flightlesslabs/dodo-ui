<script lang="ts" module>
  import type { Snippet } from 'svelte';

  /**
   * Public props for AccordionTrigger
   */
  export type AccordionTriggerProps = {
    /** Custom CSS class names */
    class?: string;

    /** Accordion Trigger content */
    children?: Snippet;
  };
</script>

<script lang="ts">
  import { Accordion as AccordionBitUi } from 'bits-ui';

  let { class: className = '', children }: AccordionTriggerProps = $props();

  /**
   * Computed class list
   */
  const classes = $derived(['dodo-ui-AccordionTrigger', className].filter(Boolean));
</script>

<AccordionBitUi.Trigger class={classes.join(' ')}>
  {@render children?.()}
</AccordionBitUi.Trigger>
