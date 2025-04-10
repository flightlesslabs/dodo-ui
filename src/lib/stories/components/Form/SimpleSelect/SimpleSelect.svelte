<script lang="ts" module>
  export type SimpleSelectFocusEvent = FocusEvent & {
    currentTarget: EventTarget & HTMLSelectElement;
  };

  export type SimpleSelectOption = {
    value: string;
    label: string;
    disabled?: boolean;
  };
</script>

<script lang="ts">
  import InputEnclosure from '$lib/stories/developer tools/components/InputEnclosure/InputEnclosure.svelte';

  import type { ComponentRoundness, ComponentSize } from '$lib/types.js';
  import type { Snippet } from 'svelte';
  import type { ChangeEventHandler, FocusEventHandler } from 'svelte/elements';

  interface SimpleSelectProps {
    /** Select ref */
    ref?: HTMLSelectElement;
    /** How large should the button be? */
    size?: ComponentSize;
    /** How round should the border radius be? */
    roundness?: ComponentRoundness | false;
    /** How round should the border radius be? */
    options: SimpleSelectOption[];
    /** Add a border around the button. Default True */
    outline?: boolean;
    /** Select value */
    value?: string;
    /** How round should the border radius be? */
    placeholder?: string;
    /** disabled state */
    disabled?: boolean;
    /** is there any associated Error ? */
    error?: boolean;
    /** Name */
    name?: string;
    /** Id */
    id?: string;
    /** Icon before button content */
    before?: Snippet;
    /** Icon after button content */
    after?: Snippet;
    /** Custom css class*/
    class?: string;
    /** onchange event handler */
    onchange?: ChangeEventHandler<HTMLSelectElement>;
    /** onblur event handler */
    onblur?: FocusEventHandler<HTMLSelectElement>;
    /** onfocus event handler */
    onfocus?: FocusEventHandler<HTMLSelectElement>;
  }

  let {
    size = 'normal',
    roundness = '1x',
    outline = true,
    name,
    id,
    class: className = '',
    disabled = false,
    onchange,
    onblur,
    onfocus,
    before,
    after,
    error = false,
    value,
    placeholder,
    ref = $bindable<HTMLSelectElement>(),
    options,
  }: SimpleSelectProps = $props();

  let focused: boolean = $state(false);

  function onfocusMod(e: SimpleSelectFocusEvent) {
    focused = true;

    if (onfocus) {
      onfocus(e);
    }
  }

  function onblurMod(e: SimpleSelectFocusEvent) {
    focused = false;

    if (onblur) {
      onblur(e);
    }
  }
</script>

<div
  class:outline
  class:disabled
  class:error
  class:focused
  class={['dodo-ui-SimpleSelect', `size--${size}`, `roundness--${roundness}`, className].join(' ')}
>
  <InputEnclosure {outline} {disabled} {error} {focused} {size} {roundness} {before} {after}>
    <select
      {name}
      {id}
      {disabled}
      {onchange}
      onfocus={onfocusMod}
      onblur={onblurMod}
      {placeholder}
      bind:this={ref}
    >
      {#each options as option (option.value)}
        <option value={option.value} disabled={option.disabled} selected={value === option.value}>
          {option.label}
        </option>
      {/each}
    </select>
  </InputEnclosure>
</div>

<style lang="scss">
  .dodo-ui-SimpleSelect {
    select {
      flex: 1;
      border: 0;
      outline: 0;
      height: 100%;
      background-color: transparent;
      font-family: inherit;
      color: inherit;
      letter-spacing: 0.3px;
    }

    &.size {
      &--normal {
        select {
          font-size: 1rem;
          padding: 0 12px;
        }
      }

      &--small {
        select {
          padding: 0 8px;
          font-size: 0.9rem;
        }
      }

      &--large {
        select {
          font-size: 1.1rem;
          padding: 0 14px;
        }
      }
    }
  }
</style>
