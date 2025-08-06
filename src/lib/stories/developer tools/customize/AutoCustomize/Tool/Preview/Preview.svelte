<script lang="ts">
</script>

<div class="Preview"></div>

<style lang="scss">
  @use '../../../../../../styles/scss' as *;

  .Preview {
    background-color: var(--dodo-color-neutral-100);
    border: 1px solid var(--dodo-color-neutral-200);
    padding: calc(var(--dodo-ui-space) * 2);
    border-radius: var(--dodo-ui-element-roundness-2);
    width: 100%;

    @media (min-width: $breakpoints-lg) {
      flex: 1;
      width: initial;
      height: calc(100vh - 130px);
      overflow: auto;
    }
  }
</style>
