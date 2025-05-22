<script lang="ts" module>
  import type { ComponentColor } from '$lib/types/colors.js';

  export type SeparatorOrientation = 'horizontal' | 'vertical';

  export const separatorOrientationArray: SeparatorOrientation[] = ['horizontal', 'vertical'];

  export interface SeparatorProps {
    /** Separator ref */
    ref?: HTMLDivElement;
    /** Custom css class */
    class?: string;
    /** Id */
    id?: string;
    /** What color to use? */
    color?: ComponentColor;
    /** Separator Width */
    width?: string;
    /** Separator Height */
    height?: string;
    /** Separator orientation,  'horizontal', 'vertical'*/
    orientation?: SeparatorOrientation;
  }
</script>

<script lang="ts">
  let {
    id,
    class: className = '',
    orientation = 'horizontal',
    color = 'neutral',
    ref = $bindable<HTMLDivElement>(),
    width,
    height,
  }: SeparatorProps = $props();
</script>

<div
  class={['dodo-ui-Separator', `color--${color}`, `orientation--${orientation}`, className].join(
    ' ',
  )}
  {id}
  style={`${width ? `width:${width};` : ''}
  ${height ? `height:${height};` : ''}
  `}
  bind:this={ref}
></div>

<style lang="scss">
  @use 'utils/scss/mixins.scss' as *;

  :global(:root) {
    @include generate-dodo-ui-separator-colors(neutral);
    @include generate-dodo-ui-separator-colors(primary);
    @include generate-dodo-ui-separator-colors(secondary);
    @include generate-dodo-ui-separator-colors(safe);
    @include generate-dodo-ui-separator-colors(warning);
    @include generate-dodo-ui-separator-colors(danger);
  }

  :global(.dodo-theme--dark) {
    @include generate-dodo-ui-separator-colors-dark(neutral);
    @include generate-dodo-ui-separator-colors-dark(primary);
    @include generate-dodo-ui-separator-colors-dark(secondary);
    @include generate-dodo-ui-separator-colors-dark(safe);
    @include generate-dodo-ui-separator-colors-dark(warning);
    @include generate-dodo-ui-separator-colors-dark(danger);
  }

  .dodo-ui-Separator {
    &.color {
      @include generate-dodo-ui-separator-color(neutral);
      @include generate-dodo-ui-separator-color(primary);
      @include generate-dodo-ui-separator-color(secondary);
      @include generate-dodo-ui-separator-color(safe);
      @include generate-dodo-ui-separator-color(warning);
      @include generate-dodo-ui-separator-color(danger);
    }

    &.orientation {
      &--horizontal {
        display: flex;
        height: var(--dodo-ui-element-border-width);
        width: 100%;
        margin: calc(var(--dodo-ui-space) * 1) 0;
      }

      &--vertical {
        display: inline-flex;
        height: 100%;
        width: var(--dodo-ui-element-border-width);
        margin: 0 calc(var(--dodo-ui-space) * 1);
      }
    }
  }
</style>
