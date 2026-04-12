<script lang="ts" module>
  import { BROWSER } from 'esm-env';

  import type { Snippet } from 'svelte';
  import type { ComponentTheme, ComponentThemeColors } from '$lib/attributes/theme.js';
  import { setThemeContext } from './ThemeSystem/context.js';
  import { useThemeStore } from './ThemeSystem/theme.svelte.js';

  /**
   * Public props for Theme
   */
  export interface ThemeProps {
    /** Custom CSS class names */
    class?: string;

    /** Slot content */
    children?: Snippet;

    /** Theme mode: 'auto' | 'light' | 'dark' */
    type?: ComponentTheme;

    /** Syncs the theme with the global theme store */
    global?: boolean;
  }
</script>

<script lang="ts">
  let { class: className = '', children, type = 'auto', global = false }: ThemeProps = $props();

  // 🔁 Local theme state
  let theme = $state<ComponentThemeColors>('light');

  /**
   * 🌍 Global sync (store → local)
   */
  $effect(() => {
    if (!global) return;

    const storeTheme = useThemeStore.theme;

    if (theme !== storeTheme) {
      theme = storeTheme;
    }
  });

  /**
   * 🎛 Theme resolution (local logic)
   */
  $effect(() => {
    if (global) return;

    if (type !== 'auto') {
      if (theme !== type) {
        theme = type;
      }
      return;
    }

    if (!BROWSER) return;

    const mq = window.matchMedia('(prefers-color-scheme: dark)');

    const apply = (isDark: boolean) => {
      const next = isDark ? 'dark' : 'light';
      if (theme !== next) theme = next;
    };

    apply(mq.matches);

    const listener = (e: MediaQueryListEvent) => {
      apply(e.matches);
    };

    mq.addEventListener('change', listener);

    return () => {
      mq.removeEventListener('change', listener);
    };
  });

  /**
   * 📡 Global sync (local → store)
   */
  $effect(() => {
    if (!global) return;

    const storeTheme = useThemeStore.theme;

    if (storeTheme !== theme) {
      useThemeStore.updateSystemTheme(theme);
    }
  });

  /**
   * 🧩 Context (reactive via getters)
   */
  setThemeContext({
    get theme() {
      return theme;
    },
  });

  /**
   * 🎨 Classes
   */
  const classes = $derived(['dodo-ui-Theme', `dodo-theme--${theme}`, className]);
</script>

<div class={classes.join(' ')}>
  {@render children?.()}
</div>
