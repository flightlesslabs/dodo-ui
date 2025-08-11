<script lang="ts" module>
  import type { ComponentSize } from '$lib/types/size.js';
  import type { IconPosition } from '$lib/types/special.js';
  import Icon from '@iconify/svelte';
  import { onMount, type Snippet } from 'svelte';
  import type { EventHandler } from 'svelte/elements';

  export type AccordianToggleEvent = Event & {
    currentTarget: EventTarget & HTMLDetailsElement;
  };

  export interface AccordianProps {
    /** Contents goes here */
    children?: Snippet;
    /** Accordian summary */
    summary?: Snippet;
    /** summary full width */
    fullWidthSummary?: boolean;
    /** Accordian ref */
    ref?: HTMLDetailsElement;
    /** Custom css class */
    class?: string;
    /** The toggle event handler */
    ontoggle?: EventHandler<Event, HTMLDetailsElement>;
    /**  Open state, for dynmaic Accordians */
    open?: boolean;
    /** default Open, for static Accordians */
    defaultOpen?: boolean;
    /** How large should the button be? */
    size?: ComponentSize;
    /** Select Dropdown Arrow Position */
    dropdownArrowPosition?: IconPosition;
    /** Dropdown Arrow Icon */
    customDropdownArrowIcon?: (open: boolean) => Snippet;
  }
</script>

<script lang="ts">
  let {
    class: className = '',
    ref = $bindable<HTMLDetailsElement>(),
    ontoggle,
    open = $bindable<boolean>(),
    defaultOpen,
    summary,
    children,
    size = 'normal',
    fullWidthSummary = false,
    customDropdownArrowIcon: customDropdownArrowIconInternal,
    dropdownArrowPosition = 'before',
  }: AccordianProps = $props();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let customDropdownArrowIconTyped = customDropdownArrowIconInternal as any;

  let isUserInteraction = $state(false);

  function ontoggleMod(e: AccordianToggleEvent) {
    if (isUserInteraction) {
      if (ontoggle) {
        ontoggle(e);
      }
    }

    isUserInteraction = false;
  }

  function onsummaryclick() {
    isUserInteraction = true;
  }

  onMount(() => {
    if (open === true) {
      ref.open = true;
    } else if (open === false) {
      ref.open = false;
    } else if (defaultOpen === true) {
      ref.open = true;
    } else if (defaultOpen === false) {
      ref.open = false;
    }
  });
</script>

{#snippet dropdownArrowIcon()}
  {#if customDropdownArrowIconTyped}
    {@render customDropdownArrowIconTyped(open)}
  {:else}
    <div class="IconOpen">
      <Icon icon="material-symbols:arrow-drop-up-rounded" width="32" height="32" />
    </div>
    <div class="IconClose">
      <Icon icon="material-symbols:arrow-drop-down-rounded" width="32" height="32" />
    </div>
  {/if}
{/snippet}

<details
  class:fullWidthSummary
  class={['dodo-ui-Accordian', `size--${size}`, className].join(' ')}
  bind:this={ref}
  {open}
  ontoggle={ontoggleMod}
>
  {#if summary}
    <summary onclick={onsummaryclick}>
      {#if dropdownArrowPosition === 'before'}
        <div class:open class="DropdownArrow before">
          {@render dropdownArrowIcon()}
        </div>
      {/if}
      {@render summary()}
      {#if dropdownArrowPosition === 'after'}
        <div class:open class="DropdownArrow after">
          {@render dropdownArrowIcon()}
        </div>
      {/if}
    </summary>
  {/if}

  {#if children}
    <div class="AccordianContent">
      {@render children()}
    </div>
  {/if}
</details>

<style lang="scss">
  .dodo-ui-Accordian {
    color: var(--dodo-color-neutral-900);
    width: 100%;

    summary {
      display: inline-flex;
      align-items: center;
      cursor: pointer;
      user-select: none;
      font-weight: 500;
    }

    &.fullWidthSummary {
      summary {
        display: flex;
        width: 100%;
      }
    }

    &[open] {
      .IconOpen {
        display: flex;
      }

      .IconClose {
        display: none;
      }
    }

    &:not([open]) {
      .IconOpen {
        display: none;
      }

      .IconClose {
        display: flex;
      }
    }

    &.size {
      &--normal {
        summary {
          font-size: 1rem;
          min-height: var(--dodo-ui-element-height-normal);
        }
      }

      &--small {
        summary {
          font-size: 0.9rem;
          min-height: var(--dodo-ui-element-height-small);
        }
      }

      &--large {
        summary {
          font-size: 1.1rem;
          min-height: var(--dodo-ui-element-height-large);
        }
      }
    }

    .AccordianContent {
      margin-top: var(--dodo-ui-space);
    }
  }
</style>
