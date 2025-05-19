<script lang="ts" module>
  export type ButtonLinkTarget =
    | '_self'
    | '_blank'
    | '_parent'
    | '_top'
    | (string & {})
    | undefined
    | null;
  export type ButtonLinkReferrerpolicy = ReferrerPolicy | undefined | null;
  export type ButtonType = 'button' | 'submit';
  export const buttonTypeArray: ButtonType[] = ['button', 'submit'];
</script>

<script lang="ts">
  import type { ComponentColor } from '$lib/types/colors.js';
  import type { ComponentRoundness } from '$lib/types/roundness.js';
  import type { ComponentSize } from '$lib/types/size.js';
  import type { ComponentWeight } from '$lib/types/weight.js';

  import type { Snippet } from 'svelte';
  import type { MouseEventHandler } from 'svelte/elements';

  interface ButtonProps {
    /** Button contents goes here */
    children?: Snippet;
    /** Button ref */
    ref?: HTMLButtonElement | HTMLAnchorElement;
    /** Regular button or submit button? */
    type?: ButtonType;
    /** How large should the button be? */
    size?: ComponentSize;
    /** Full width button? */
    fullWidth?: boolean;
    /** What color to use? */
    color?: ComponentColor;
    /** How round should the border radius be? */
    roundness?: ComponentRoundness;
    /** How should the button appear? */
    variant?: ComponentWeight;
    /** Add a border around the button */
    outline?: boolean;
    /** Compact button for icons */
    compact?: boolean;
    /** Button disabled state */
    disabled?: boolean;
    /** Name */
    name?: string;
    /** Id */
    id?: string;
    /** Title (for tooltip) */
    title?: string;
    /** Icon before button content */
    before?: Snippet;
    /** Icon after button content */
    after?: Snippet;
    /** Custom css class*/
    class?: string;
    /** The onclick event handler */
    onclick?: MouseEventHandler<HTMLButtonElement>;
    /** Turn Button into link */
    href?: string;
    /** Link button: download  */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    download?: any;
    /** Link button: hreflang  */
    hreflang?: string | undefined | null;
    /** Link button: media  */
    media?: string | undefined | null;
    /** Link button: ping  */
    ping?: string | undefined | null;
    /** Link button: rel  */
    rel?: string | undefined | null;
    /** Link button: target  */
    target?: ButtonLinkTarget;
    /** Link button: Type  */
    anchorMediaType?: string | undefined | null;
    /** Link button: referrerpolicy  */
    referrerpolicy?: ButtonLinkReferrerpolicy;
    /** Test: ⚠️ Unsafe Children String. Do Not use*/
    _unsafeChildrenStringForTesting?: string;
  }

  let {
    children,
    type = 'button',
    size = 'normal',
    color = 'primary',
    roundness = 1,
    variant = 'solid',
    outline = false,
    compact = false,
    fullWidth = false,
    name,
    id,
    title,
    class: className = '',
    disabled = false,
    onclick,
    before,
    after,
    href,
    download,
    hreflang,
    media,
    ping,
    rel,
    target,
    anchorMediaType,
    referrerpolicy,
    _unsafeChildrenStringForTesting,
    ref = $bindable<HTMLButtonElement | HTMLAnchorElement>(),
  }: ButtonProps = $props();
</script>

{#snippet buttonContent()}
  {#if before}
    <span class="content--before">
      {@render before()}
    </span>
  {/if}

  {#if children}
    {@render children()}
  {:else if _unsafeChildrenStringForTesting}
    {_unsafeChildrenStringForTesting}
  {/if}

  {#if after}
    <span class="content--after">
      {@render after()}
    </span>
  {/if}
{/snippet}

{#if href}
  <a
    {title}
    {id}
    {href}
    {download}
    {hreflang}
    {media}
    {ping}
    {rel}
    {target}
    type={anchorMediaType}
    {referrerpolicy}
    class:outline
    class:compact
    class:disabled
    class:fullWidth
    class={[
      'dodo-ui-Button',
      `size--${size}`,
      `color--${color}`,
      `variant--${variant}`,
      `roundness--${roundness}`,
      className,
    ].join(' ')}
    bind:this={ref}
  >
    {@render buttonContent()}
  </a>
{:else}
  <button
    class:outline
    class:compact
    class:fullWidth
    class={[
      'dodo-ui-Button',
      `size--${size}`,
      `color--${color}`,
      `variant--${variant}`,
      `roundness--${roundness}`,
      className,
    ].join(' ')}
    {type}
    {name}
    {id}
    {title}
    {disabled}
    {onclick}
    bind:this={ref}
  >
    {@render buttonContent()}
  </button>
{/if}

<style lang="scss">
  @use 'utils/scss/mixins.scss' as *;

  :global(:root) {
    --dodo-ui-Button-disabled-color: var(--dodo-color-neutral-400);
    --dodo-ui-Button-disabled-bg: var(--dodo-color-neutral-200);

    @include generate-dodo-ui-button-colors(neutral);
    @include generate-dodo-ui-button-colors(primary);
    @include generate-dodo-ui-button-colors(secondary);
    @include generate-dodo-ui-button-colors(safe);
    @include generate-dodo-ui-button-colors(warning);
    @include generate-dodo-ui-button-colors(danger);
  }

  :global(.dodo-theme--dark) {
    --dodo-ui-Button-disabled-bg: var(--dodo-color-neutral-100);
    --dodo-ui-Button-disabled-color: var(--dodo-color-neutral-500);

    @include generate-dodo-ui-button-colors-dark(neutral);
    @include generate-dodo-ui-button-colors-dark(primary);
    @include generate-dodo-ui-button-colors-dark(secondary);
    @include generate-dodo-ui-button-colors-dark(safe);
    @include generate-dodo-ui-button-colors-dark(warning);
    @include generate-dodo-ui-button-colors-dark(danger);
  }

  .dodo-ui-Button {
    cursor: pointer;
    outline: none;
    transition: all 150ms;
    text-decoration: none;
    margin: 0;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-family: inherit;
    background-color: transparent;
    border-style: solid;
    border-width: var(--dodo-ui-element-border-width);
    border-color: transparent;
    outline: 0;
    color: inherit;
    letter-spacing: 0.3px;
    font-family: inherit;

    &.size {
      &--normal {
        height: var(--dodo-ui-element-height-normal);
        font-size: 1rem;
        padding: 0 calc(var(--dodo-ui-space-small) * 2);
        min-width: 45px;
      }

      &--small {
        height: var(--dodo-ui-element-height-small);
        padding: 0 var(--dodo-ui-space);
        font-size: 0.9rem;
        min-width: 35px;
      }

      &--large {
        height: var(--dodo-ui-element-height-large);
        font-size: 1.1rem;
        padding: 0 calc(var(--dodo-ui-space) * 2);
        min-width: 85px;
      }
    }

    &.roundness {
      &--1 {
        border-radius: var(--dodo-ui-element-roundness-1);
      }

      &--2 {
        border-radius: var(--dodo-ui-element-roundness-2);
      }

      &--3 {
        border-radius: var(--dodo-ui-element-roundness-3);
      }

      &--full {
        border-radius: 50%;
      }
    }

    &.color {
      @include generate-dodo-ui-button-color(neutral);
      @include generate-dodo-ui-button-color(primary);
      @include generate-dodo-ui-button-color(secondary);
      @include generate-dodo-ui-button-color(safe);
      @include generate-dodo-ui-button-color(warning);
      @include generate-dodo-ui-button-color(danger);
    }

    &[disabled] {
      cursor: initial;

      &.variant {
        &--text,
        &--solid {
          background-color: var(--dodo-ui-Button-disabled-bg);
          color: var(--dodo-ui-Button-disabled-color);

          &:hover {
            background-color: var(--dodo-ui-Button-disabled-bg);
            color: var(--dodo-ui-Button-disabled-color);
          }

          &:active {
            background-color: var(--dodo-ui-Button-disabled-bg);
            color: var(--dodo-ui-Button-disabled-color);
          }

          &.outline {
            border-color: transparent;
          }
        }
      }
    }

    &.compact {
      &.size {
        &--normal,
        &--small,
        &--large {
          min-width: initial;
          padding: 0;
        }

        &--normal {
          width: var(--dodo-ui-element-height-normal);
        }

        &--small {
          width: var(--dodo-ui-element-height-small);
        }

        &--large {
          width: var(--dodo-ui-element-height-large);
        }
      }
    }

    &.fullWidth {
      width: 100%;
    }

    .content {
      &--after,
      &--before {
        display: inline-flex;
        height: 100%;
        align-items: center;
      }

      &--before {
        margin-right: 6px;
      }

      &--after {
        margin-left: 6px;
      }
    }
  }
</style>
