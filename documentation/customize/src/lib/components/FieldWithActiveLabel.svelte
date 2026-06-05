<script lang="ts" module>
  export type FieldWithActiveLabelProps = {
    label?: string;
    name?: string;
    children?: Snippet;
    isActive?: boolean;
  };
</script>

<script lang="ts">
  import { Indicator } from '@flightlesslabs/dodo-ui';
  import type { Snippet } from 'svelte';

  let { label, children, name, isActive = false }: FieldWithActiveLabelProps = $props();
</script>

<div class="FieldWithActiveLabel">
  <label for={name}>
    {label}
    {#if isActive}
      <Indicator color="danger" font-size="0.6rem" />
    {/if}
  </label>
  {@render children?.()}
</div>

<style lang="scss">
  .FieldWithActiveLabel {
    label {
      font-size: 0.95rem;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
    }

    :global(.dodo-ui-Indicator) {
      margin-left: 4px;
    }
  }
</style>
