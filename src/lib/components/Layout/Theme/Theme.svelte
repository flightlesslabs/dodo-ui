<script lang="ts" module>
  import { browser } from '$app/environment';
  import { onMount, type Snippet } from 'svelte';

  export type ThemeType = 'light' | 'dark' | 'auto';
  export const themeTypeOptions = ['light', 'dark', 'auto'];

  /**
   * Public props for Theme
   */
  export interface ThemeProps {
    /** Custom CSS class names */
    class?: string;

    /** Slot content */
    children?: Snippet;

    /** Theme color type: auto by defualt */
    type?: ThemeType;
  }
</script>

<script lang="ts">
  let { class: className = '', children, type = 'auto' }: ThemeProps = $props();

  let mediaQuery: MediaQueryList | undefined;

  // ✅ internal system theme state
  let systemTheme = $state<'light' | 'dark'>('light');

  onMount(() => {
    if (type !== 'auto') {
      systemTheme = type;
      return;
    }

    if (!browser) return;

    mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // initial value
    systemTheme = mediaQuery.matches ? 'dark' : 'light';

    const listener = (e: MediaQueryListEvent) => {
      // only matters when auto, but cheap enough anyway
      systemTheme = e.matches ? 'dark' : 'light';
    };

    mediaQuery.addEventListener('change', listener);

    return () => {
      mediaQuery?.removeEventListener('change', listener);
    };
  });

  /**
   * Computed class list
   */
  const classes = $derived(
    ['dodo-ui-Theme', `dodo-theme--${systemTheme}`, className].filter(Boolean),
  );
</script>

<div class={classes.join(' ')}>
  {@render children?.()}
</div>
