<script lang="ts" module>
  export type ModalContentTitleProps = {
    class?: string;
    customTitle?: Snippet;
    title?: string;
    alignmentX?: ComponentAlignmentX;
  };
</script>

<script lang="ts">
  import { type ComponentAlignmentX } from '@flightlesslabs/dodo-ui';
  import type { Snippet } from 'svelte';

  let {
    class: className = '',
    title,
    customTitle,
    alignmentX = 'start',
  }: ModalContentTitleProps = $props();

  const classes = $derived(
    ['ModalContentTitle', `alignmentX--${alignmentX}`, className].filter(Boolean),
  );
</script>

<div class={classes.join(' ')}>
  {#if customTitle}
    {@render customTitle?.()}
  {:else if title}
    {title}
  {/if}
</div>
