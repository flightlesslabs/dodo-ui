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
    ...restProps
  }: RadioGroupProps = $props();

  /**
   * Computed class list
   */
  const classes = $derived(['dodo-ui-RadioGroup', className].filter(Boolean));
</script>

<RadioGroupBitUi.Root {orientation} {...restProps} class={classes.join(' ')}>
  {@render children?.()}
</RadioGroupBitUi.Root>
