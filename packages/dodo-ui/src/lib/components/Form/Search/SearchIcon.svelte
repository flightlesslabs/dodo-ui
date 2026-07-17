<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { ComponentSize } from '@flightlesslabs/dodo-core-attributes';
  import AffixIcon from '../AffixIcon/AffixIcon.svelte';

  interface SearchIconProps {
    size: ComponentSize;
    focused: boolean;
    customAffixIcon?: Snippet;
    showAffixIcon: boolean;
    highlightAffixIcon: boolean;
  }

  let { size, focused, customAffixIcon, showAffixIcon, highlightAffixIcon }: SearchIconProps =
    $props();

  const classes = $derived(['SearchAffixIcon', 'AffixContentTrigger'].filter(Boolean));
</script>

{#if showAffixIcon}
  <AffixIcon
    class={classes.join(' ')}
    roundness="full"
    color={highlightAffixIcon && focused ? 'primary' : 'default'}
    {size}
    compact
  >
    {#if customAffixIcon}
      {@render customAffixIcon?.()}
    {:else}
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          fill="currentColor"
          d="M18 10c0-4.41-3.59-8-8-8s-8 3.59-8 8s3.59 8 8 8c1.85 0 3.54-.63 4.9-1.69l5.1 5.1L21.41 20l-5.1-5.1A8 8 0 0 0 18 10M4 10c0-3.31 2.69-6 6-6s6 2.69 6 6s-2.69 6-6 6s-6-2.69-6-6"
        />
      </svg>
    {/if}
  </AffixIcon>
{/if}
