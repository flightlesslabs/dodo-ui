<script lang="ts">
  import type { ComponentRoundness, ComponentSize } from '$lib/types.js';
  import type { Snippet } from 'svelte';

  interface ButtonProps {
    /** Button contents goes here*/
    children?: Snippet;
    /** Regular button or submit button? */
    type?: 'button' | 'submit';
    /** How large should the button be? */
    size?: ComponentSize;
    /** What color to use? */
    color?: 'default' | 'primary' | 'safe' | 'warning' | 'danger' | 'info';
    /** How round should the border radius be? */
    roundness?: ComponentRoundness;
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
    href?: string | undefined | null;
    /** Link button: download  */
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
    target?: '_self' | '_blank' | '_parent' | '_top' | (string & {}) | undefined | null;
    /** Link button: Type  */
    anchorMediaType?: string | undefined | null;
    /** Link button: referrerpolicy  */
    referrerpolicy?: ReferrerPolicy | undefined | null;
  }

  const {
    children,
    type = 'button',
    size = 'normal',
    color = 'default',
    roundness = 1,
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
      &--1 {
        border-radius: var(--dodo-ui-element-roundness-1);
      }

      &--2 {
        border-radius: var(--dodo-ui-element-roundness-2);
      }

      &--3 {
        border-radius: var(--dodo-ui-element-roundness-3);
      }

      &--4 {
        border-radius: var(--dodo-ui-element-roundness-4);
      }

      &--full {
        border-radius: 50%;
      }
    }

    &.color {
      &--default {
        &.variant {
          &--text {
            color: var(--dodo-color-default-800);
            background-color: var(--dodo-color-default-100);

            &:hover {
              background-color: var(--dodo-color-default-200);
            }

            &:active {
              background-color: var(--dodo-color-default-300);
            }

            &.outline {
              border-color: var(--dodo-color-default-400);
            }
          }

          &--solid {
            color: var(--dodo-color-white);
            background-color: var(--dodo-color-default-500);

            &:hover {
              background-color: var(--dodo-color-default-600);
            }

            &:active {
              background-color: var(--dodo-color-default-700);
            }
          }
        }
      }

      &--primary {
        &.variant {
          &--text {
            color: var(--dodo-color-primary-800);
            background-color: var(--dodo-color-primary-100);

            &:hover {
              background-color: var(--dodo-color-primary-200);
            }

            &:active {
              background-color: var(--dodo-color-primary-300);
            }

            &.outline {
              border-color: var(--dodo-color-primary-400);
            }
          }

          &--solid {
            color: var(--dodo-color-white);
            background-color: var(--dodo-color-primary-500);

            &:hover {
              background-color: var(--dodo-color-primary-600);
            }

            &:active {
              background-color: var(--dodo-color-primary-700);
            }
          }
        }
      }

      &--safe {
        &.variant {
          &--text {
            color: var(--dodo-color-safe-800);
            background-color: var(--dodo-color-safe-100);

            &:hover {
              background-color: var(--dodo-color-safe-200);
            }

            &:active {
              background-color: var(--dodo-color-safe-300);
            }

            &.outline {
              border-color: var(--dodo-color-safe-400);
            }
          }

          &--solid {
            color: var(--dodo-color-white);
            background-color: var(--dodo-color-safe-500);

            &:hover {
              background-color: var(--dodo-color-safe-600);
            }

            &:active {
              background-color: var(--dodo-color-safe-700);
            }
          }
        }
      }

      &--warning {
        &.variant {
          &--text {
            color: var(--dodo-color-warning-800);
            background-color: var(--dodo-color-warning-100);

            &:hover {
              background-color: var(--dodo-color-warning-200);
            }

            &:active {
              background-color: var(--dodo-color-warning-300);
            }

            &.outline {
              border-color: var(--dodo-color-warning-400);
            }
          }

          &--solid {
            color: var(--dodo-color-white);
            background-color: var(--dodo-color-warning-500);

            &:hover {
              background-color: var(--dodo-color-warning-600);
            }

            &:active {
              background-color: var(--dodo-color-warning-700);
            }
          }
        }
      }

      &--danger {
        &.variant {
          &--text {
            color: var(--dodo-color-danger-800);
            background-color: var(--dodo-color-danger-100);

            &:hover {
              background-color: var(--dodo-color-danger-200);
            }

            &:active {
              background-color: var(--dodo-color-danger-300);
            }

            &.outline {
              border-color: var(--dodo-color-danger-400);
            }
          }

          &--solid {
            color: var(--dodo-color-white);
            background-color: var(--dodo-color-danger-500);

            &:hover {
              background-color: var(--dodo-color-danger-600);
            }

            &:active {
              background-color: var(--dodo-color-danger-700);
            }
          }
        }
      }

      &--info {
        &.variant {
          &--text {
            color: var(--dodo-color-info-800);
            background-color: var(--dodo-color-info-100);

            &:hover {
              background-color: var(--dodo-color-info-200);
            }

            &:active {
              background-color: var(--dodo-color-info-300);
            }

            &.outline {
              border-color: var(--dodo-color-info-400);
            }
          }

          &--solid {
            color: var(--dodo-color-white);
            background-color: var(--dodo-color-info-500);

            &:hover {
              background-color: var(--dodo-color-info-600);
            }

            &:active {
              background-color: var(--dodo-color-info-700);
            }
          }
        }
      }
    }

    &[disabled] {
      cursor: initial;

      &.variant {
        &--text,
        &--solid {
          background-color: var(--dodo-color-default-200);
          color: var(--dodo-color-default-400);

          &:hover {
            background-color: var(--dodo-color-default-200);
            color: var(--dodo-color-default-400);
          }

          &:active {
            background-color: var(--dodo-color-default-200);
            color: var(--dodo-color-default-400);
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
