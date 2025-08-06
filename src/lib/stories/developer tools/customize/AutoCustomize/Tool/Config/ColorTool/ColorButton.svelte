<script lang="ts">
  import Icon from '@iconify/svelte';

  interface ColorButtonProps {
    color: string;
    selectedColor?: string;
    onclick?: (color: string) => void;
  }

  const { color, selectedColor, onclick }: ColorButtonProps = $props();

  function onClickMod() {
    if (onclick) {
      onclick(color);
    }
  }
</script>

<button
  class="ColorButton"
  class:selectedColor={selectedColor === color}
  onclick={onClickMod}
  aria-label={`color button ${color}`}
  style={`background-color: var(--dodo-color-base-${color}-500);`}
>
  <Icon icon="material-symbols:check-small" width="24" height="24" />
</button>

<style lang="scss">
  .ColorButton {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin: 4px;
    cursor: pointer;
    border: 0;
    color: var(--dodo-color-constant-white);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;

    :global(svg) {
      position: absolute;
      display: none;
    }

    &.selectedColor {
      border: 3px solid var(--dodo-color-primary-600);

      :global(svg) {
        display: block;
      }
    }
  }
</style>
