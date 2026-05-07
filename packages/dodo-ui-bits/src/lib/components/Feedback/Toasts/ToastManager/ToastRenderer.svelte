<script lang="ts" module>
  type ToastRendererProps = ToastItem & {
    customToast?: Snippet<[ToastItem]>;
  };
</script>

<script lang="ts">
  import Toast from '../Toast/Toast.svelte';
  import type { Snippet } from 'svelte';
  import type { ToastItem } from './toasts.svelte.ts';

  let { description, customToast, ...restProps }: ToastRendererProps = $props();
</script>

{#if customToast}
  {@render customToast?.({ description, ...restProps })}
{:else}
  <Toast {...restProps}>
    {description}
  </Toast>
{/if}
