<script lang="ts" module>
  export type ButtonColor = 'default' | 'primary' | 'safe' | 'warning' | 'danger' | 'info';
  export type ButtonRoundness = ComponentRoundness | false | ComponentRoundnessFull;
  export type ButtonLinkTarget =
    | '_self'
    | '_blank'
    | '_parent'
    | '_top'
    | (string & {})
    | undefined
    | null;
  export type ButtonLinkReferrerpolicy = ReferrerPolicy | undefined | null;
</script>

<script lang="ts">
  import type { ComponentRoundness, ComponentRoundnessFull, ComponentSize } from '$lib/types.js';
  import type { Snippet } from 'svelte';

  interface ButtonProps {
    /** Button contents goes here*/
    children?: Snippet;
    /** Regular button or submit button? */
    type?: 'button' | 'submit';
    /** How large should the button be? */
    size?: ComponentSize;
    /** What color to use? */
    color?: ButtonColor;
    /** How round should the border radius be? */
    roundness?: ButtonRoundness;
    /** How should the button appear? */
    variant?: 'text' | 'solid';
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
    onclick?: (e: MouseEvent) => void;
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

  const {
    children,
    type = 'button',
    size = 'normal',
    color = 'default',
    roundness = '1x',
    variant = 'text',
    outline = false,
    compact = false,
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
  }: ButtonProps = $props();
</script>

{#snippet buttonContent()}
  {#if before}
    <span class="button-content--before">
      {@render before()}
    </span>
  {/if}

  {#if children}
    {@render children()}
  {:else if _unsafeChildrenStringForTesting}
    {_unsafeChildrenStringForTesting}
  {/if}

  {#if after}
    <span class="button-content--after">
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
    class={[
      'dodo-ui-button',
      `size--${size}`,
      `color--${color}`,
      `variant--${variant}`,
      `roundness--${roundness}`,
      className,
    ].join(' ')}
  >
    {@render buttonContent()}
  </a>
{:else}
  <button
    class:outline
    class:compact
    class={[
      'dodo-ui-button',
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
  >
    {@render buttonContent()}
  </button>
{/if}

<style lang="scss">
  @use 'utils/scss/mixins.scss' as *;

  :global(:root) {
    --dodo-ui-button-disabled-color: var(--dodo-color-default-400);
    --dodo-ui-button-disabled-bg: var(--dodo-color-default-200);

    @include generate-dodo-ui-button-colors(default);
    @include generate-dodo-ui-button-colors(primary);
    @include generate-dodo-ui-button-colors(safe);
    @include generate-dodo-ui-button-colors(warning);
    @include generate-dodo-ui-button-colors(danger);
    @include generate-dodo-ui-button-colors(info);
  }

  :global(.dodo-theme--dark) {
    --dodo-ui-button-disabled-bg: var(--dodo-color-default-100);
    --dodo-ui-button-disabled-color: var(--dodo-color-default-500);

    @include generate-dodo-ui-button-colors-dark(default);
    @include generate-dodo-ui-button-colors-dark(primary);
    @include generate-dodo-ui-button-colors-dark(safe);
    @include generate-dodo-ui-button-colors-dark(warning);
    @include generate-dodo-ui-button-colors-dark(danger);
    @include generate-dodo-ui-button-colors-dark(info);
  }

  .dodo-ui-button {
    cursor: pointer;
    outline: none;
    transition: all 150ms;
    text-decoration: none;
    margin: 0;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-family: inherit;
    font-weight: 500;
    background-color: transparent;
    border: 1px solid;
    border-color: transparent;
    outline: 0;
    color: inherit;
    letter-spacing: 0.3px;

    &.size {
      &--normal {
        height: var(--dodo-ui-element-height-normal);
        font-size: 1rem;
        padding: 0 12px;
        min-width: 45px;
      }

      &--small {
        height: var(--dodo-ui-element-height-small);
        padding: 0 8px;
        font-size: 0.9rem;
        min-width: 35px;
      }

      &--large {
        height: var(--dodo-ui-element-height-large);
        font-size: 1.1rem;
        padding: 0 16px;
        min-width: 85px;
      }
    }

    &.roundness {
      &--1x {
        border-radius: var(--dodo-ui-element-roundness-1);
      }

      &--2x {
        border-radius: var(--dodo-ui-element-roundness-2);
      }

      &--3x {
        border-radius: var(--dodo-ui-element-roundness-3);
      }

      &--full {
        border-radius: 50%;
      }
    }

    &.color {
      @include generate-dodo-ui-button-color(default);
      @include generate-dodo-ui-button-color(primary);
      @include generate-dodo-ui-button-color(safe);
      @include generate-dodo-ui-button-color(warning);
      @include generate-dodo-ui-button-color(danger);
      @include generate-dodo-ui-button-color(info);
    }

    &[disabled] {
      cursor: initial;

      &.variant {
        &--text,
        &--solid {
          background-color: var(--dodo-ui-button-disabled-bg);
          color: var(--dodo-ui-button-disabled-color);

          &:hover {
            background-color: var(--dodo-ui-button-disabled-bg);
            color: var(--dodo-ui-button-disabled-color);
          }

          &:active {
            background-color: var(--dodo-ui-button-disabled-bg);
            color: var(--dodo-ui-button-disabled-color);
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

    .button-content {
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
