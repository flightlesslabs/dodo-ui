<script lang="ts" module>
  export type ToastManagerProps = {
    /** Custom CSS class names applied to the InputEnclosure */
    class?: string;

    /** Optional unique ID, for multiple ToastManager */
    id?: string;

    /** Default horizontal alignment for all Toasts */
    alignmentX?: ComponentAlignmentX;

    /** Default vertical alignment for all Toasts */
    alignmentY?: ComponentAlignmentY;

    /** Default Drop shadow for all Toasts */
    shadow?: ComponentShadow;

    /** Default outline settings shadow for all Toasts */
    outline?: boolean;

    /** Default Visual variant (e.g. solid, text) for all Toasts */
    variant?: ComponentVariant;

    /** Default max width for all Toasts */
    'max-width'?: string;

    /** Default min width for all Toasts */
    'min-width'?: string;

    /** Maximum number of toasts to render */
    limit?: number;

    /** Default auto-dismiss duration (ms) */
    clearAfterDuration?: number;

    /**
     * Content rendered customToast.
     *
     * Use {#snippet customToast} in Svelte.
     */
    customToast?: Snippet<[ToastItem]>;
  };
</script>

<script lang="ts">
  import type {
    ComponentAlignmentX,
    ComponentAlignmentY,
    ComponentShadow,
    ComponentVariant,
  } from '@flightlesslabs/dodo-core-attributes';
  import { Portal } from 'bits-ui';
  import { toasts, type ToastItem } from './toasts.svelte.ts';
  import type { Snippet } from 'svelte';
  import ToastRenderer from './ToastRenderer.svelte';

  let {
    class: className = '',
    alignmentX = 'end',
    alignmentY = 'top',
    id,
    shadow = 1,
    outline = false,
    variant,
    'min-width': minWidth,
    'max-width': maxWidth,
    limit,
    clearAfterDuration,
    customToast,
  }: ToastManagerProps = $props();

  /* -----------------------------
   * Base filtered list
   * ----------------------------- */
  const toastsList = $derived(
    toasts._toastsList.filter((toast) =>
      id === undefined ? toast.toastManagerId === undefined : toast.toastManagerId === id,
    ),
  );

  /* -----------------------------
   * Limit (presentation only)
   * ----------------------------- */
  const limitedToastsList = $derived(limit !== undefined ? toastsList.slice(-limit) : toastsList);

  /* -----------------------------
   * Resolve duration
   * ----------------------------- */
  function getDuration(toast: ToastItem) {
    // Explicitly disabled
    if (toast.autoDismiss === false) return null;

    // Per-toast override
    if (toast.duration !== undefined) {
      return toast.duration;
    }

    // Fallback to manager default
    return clearAfterDuration;
  }

  /* -----------------------------
   * Reactive clock (for expiry)
   * ----------------------------- */
  let now = $state(Date.now());

  $effect(() => {
    const interval = setInterval(() => {
      now = Date.now();
    }, 500);

    return () => clearInterval(interval);
  });

  /* -----------------------------
   * Expired toasts (NOT limited!)
   * ----------------------------- */
  const expiredToasts = $derived(
    toastsList.filter((toast) => {
      const duration = getDuration(toast);

      // Prevent instant removal or invalid durations
      if (duration == null || duration <= 0) return false;

      return now >= toast.createdAt.getTime() + duration;
    }),
  );

  /* -----------------------------
   * Batch auto-clear
   * ----------------------------- */
  $effect(() => {
    if (!expiredToasts.length) return;

    const ids = expiredToasts.map((t) => t.id);
    toasts._multiClear(ids);

    for (const toast of expiredToasts) {
      toast.onclear?.();
    }
  });

  /* -----------------------------
   * Alignment helpers
   * ----------------------------- */
  function resolveAlignment(toast: ToastItem) {
    return {
      alignmentX: toast.alignmentX ?? alignmentX,
      alignmentY: toast.alignmentY ?? alignmentY,
    };
  }

  const groupedToasts = $derived(
    (() => {
      const groups: Record<string, ToastItem[]> = {};

      for (const toast of limitedToastsList) {
        const { alignmentX, alignmentY } = resolveAlignment(toast);
        const key = `${alignmentX}-${alignmentY}`;

        if (!groups[key]) {
          groups[key] = [];
        }

        groups[key].push(toast);
      }

      return Object.entries(groups);
    })(),
  );

  /* -----------------------------
   * Defaults + classes
   * ----------------------------- */
  const defaultToastProps = $derived({
    shadow,
    outline,
    variant,
    'min-width': minWidth,
    'max-width': maxWidth,
  });

  const classes = $derived(['dodo-ui-ToastManager', className].filter(Boolean));

  /* -----------------------------
   * Manual clear
   * ----------------------------- */
  function handleOnClear(toast: ToastItem) {
    toasts.clear(toast.id);
    toast.onclear?.();
  }
</script>

<Portal>
  <div class={classes.join(' ')}>
    {#if limitedToastsList.length}
      {#each groupedToasts as [key, group] (key)}
        {@const [x, y] = key.split('-')}
        <div
          class={['ToastManagerSection', `alignmentX--${x}`, `alignmentY--${y}`, className].join(
            ' ',
          )}
        >
          {#each group as toast (toast.id)}
            <ToastRenderer
              {...defaultToastProps}
              {...toast}
              {customToast}
              onclear={() => handleOnClear(toast)}
            />
          {/each}
        </div>
      {/each}
    {/if}
  </div>
</Portal>
