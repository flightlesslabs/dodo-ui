<script lang="ts" module>
  export type ModalContentDescriptionProps = {
    class?: string;
    description?: Snippet;
    alignmentX?: ComponentAlignmentX;
  };
</script>

<script lang="ts">
  import { type ComponentAlignmentX } from '@flightlesslabs/dodo-ui';
  import type { Snippet } from 'svelte';

  let {
    class: className = '',
    description,
    alignmentX = 'start',
  }: ModalContentDescriptionProps = $props();

  const classes = $derived(
    ['ModalContentDescription', `alignmentX--${alignmentX}`, className].filter(Boolean),
  );
</script>

{#if description}
  <div class={classes.join(' ')}>
    {@render description?.()}
  </div>
{/if}
