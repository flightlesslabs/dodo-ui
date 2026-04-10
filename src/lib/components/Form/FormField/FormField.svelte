<script lang="ts" module>
  import type { Snippet } from 'svelte';
  import Label from '../Label/Label.svelte';

  /**
   * Public props for FormField
   */
  export interface FormFieldProps {
    /** Custom CSS class names */
    class?: string;

    /** Slot content */
    children?: Snippet;

    /** text label */
    label?: string | Snippet;

    /** label for */
    for?: string;
  }
</script>

<script lang="ts">
  let { class: className = '', for: htmlFor, children, label }: FormFieldProps = $props();

  const classes = $derived(['dodo-ui-FormField', className].filter(Boolean));
</script>

<div class={classes.join(' ')}>
  {#if label && typeof label === 'string'}
    <Label for={htmlFor} class="FormField__Label">
      {label}
    </Label>
  {:else if label && typeof label !== 'string'}
    <Label for={htmlFor} class="FormField__Label">
      {@render label?.()}
    </Label>
  {/if}

  {@render children?.()}
</div>
