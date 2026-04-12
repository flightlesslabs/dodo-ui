<script lang="ts" module>
  import type { Snippet } from 'svelte';

  /**
   * Public props for RadioGroup
   */
  export type RadioGroupProps = RadioGroupRootProps & {
    /** Custom CSS class names */
    class?: string;

    /** Slot content */
    children?: Snippet;
  };
</script>

<script lang="ts">
  import { RadioGroup as RadioGroupBitUi, type RadioGroupRootProps } from 'bits-ui';

  let {
    class: className = '',
    children,
    orientation = 'vertical',
    value = $bindable(''),
    ref = $bindable(null),
    ...restProps
  }: RadioGroupProps = $props();

  /**
   * Computed class list
   */
  const classes = $derived(['dodo-ui-RadioGroup', className].filter(Boolean));
</script>

<RadioGroupBitUi.Root {...restProps} {orientation} bind:value bind:ref class={classes.join(' ')}>
  {@render children?.()}
</RadioGroupBitUi.Root>
