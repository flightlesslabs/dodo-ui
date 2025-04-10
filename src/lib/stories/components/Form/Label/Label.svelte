<script lang="ts">
  import type { Snippet } from 'svelte';

  interface LabelProps {
    /** Label contents goes here */
    children?: Snippet;
    /** Label ref */
    ref?: HTMLLabelElement;
    /** id of the form element the label should be bound to */
    for?: string;
    /** Specifies which form the label belongs to */
    form?: string;
    /** Custom css class*/
    class?: string;
  }

  let {
    children,
    class: className = '',
    for: htmlFor,
    form,
    ref = $bindable<HTMLLabelElement>(),
  }: LabelProps = $props();
</script>

<label class={['dodo-ui-Label', className].join(' ')} for={htmlFor} {form} bind:this={ref}>
  {#if children}
    {@render children()}
  {/if}
</label>

<style lang="scss">
  .dodo-ui-Label {
    font-size: 0.95rem;
    color: var(--dodo-color-default-700);
    display: flex;
    align-items: center;
    font-family: inherit;
  }
</style>
