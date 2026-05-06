<script lang="ts" module>
  export type ModalContentControlsProps = {
    controls?: Snippet;
    alignmentX?: ComponentAlignmentX;
  };
</script>

<script lang="ts">
  import { type ComponentAlignmentX } from '@flightlesslabs/dodo-ui';
  import type { Snippet } from 'svelte';

  let { controls, alignmentX = 'end' }: ModalContentControlsProps = $props();

  const classes = $derived(['ModalContentControls', `alignmentX--${alignmentX}`].filter(Boolean));
</script>

{#if controls}
  <div class={classes.join(' ')}>
    {@render controls?.()}
  </div>
{/if}
