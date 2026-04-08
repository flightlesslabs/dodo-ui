<script lang="ts" module>
  import type { Snippet } from 'svelte';

  /**
   * Public props for Label
   */
  export interface LabelProps extends LabelRootProps {
    /** Custom CSS class names */
    class?: string;

    /** Slot content */
    children?: Snippet;
  }
</script>

<script lang="ts">
  import { Label as LabelBitUi, type LabelRootProps } from 'bits-ui';

  let {
    class: className = '',
    children,
    ref = $bindable(null),
    ...restProps
  }: LabelProps = $props();

  /**
   * Computed class list
   */
  const classes = $derived(['dodo-ui-Label', className].filter(Boolean));
</script>

<LabelBitUi.Root {...restProps} class="{classes.join(' ')} bind:ref">
  {@render children?.()}
</LabelBitUi.Root>
