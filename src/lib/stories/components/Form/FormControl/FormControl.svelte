<script lang="ts">
  import type { Snippet } from 'svelte';
  import Label from '../Label/Label.svelte';
  import Message from '../Message/Message.svelte';

  interface FormControlProps {
    /** FormControl contents goes here */
    children?: Snippet;
    /** Label for FormControl */
    label?: string;
    /** is there any associated Error Message ? */
    errorMessage?: string;
    /** Label ref */
    ref?: HTMLDivElement;
    /** id of the form element the label should be bound to */
    for?: string;
    /** Specifies which form the label belongs to */
    form?: string;
    /** Custom css class*/
    class?: string;
  }

  let {
    children,
    label,
    class: className = '',
    for: htmlFor,
    form,
    ref = $bindable<HTMLDivElement>(),
    errorMessage,
  }: FormControlProps = $props();
</script>

<div class={['dodo-ui-FormControl', className].join(' ')} bind:this={ref}>
  {#if label}
    <div class="LabelSection">
      <Label for={htmlFor} {form}>{label}</Label>
    </div>
  {/if}
  <div class="content">
    {#if children}
      {@render children()}
    {/if}
  </div>
  {#if errorMessage}
    <div class="errorMessage">
      <Message color="danger">{errorMessage}</Message>
    </div>
  {/if}
</div>

<style lang="scss">
  .dodo-ui-FormControl {
    .LabelSection {
      margin-bottom: var(--dodo-ui-space);
    }

    .errorMessage {
      margin-top: var(--dodo-ui-space-large);
    }
  }
</style>
