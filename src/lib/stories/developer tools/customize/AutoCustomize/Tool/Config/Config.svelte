<script lang="ts">
</script>

<div class="Config">Config</div>

<style lang="scss">
  @use '../../../../../../styles/scss' as *;

  .Config {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: calc(var(--dodo-ui-space) * 2);

    @media (min-width: $breakpoints-lg) {
      max-width: 300px;
      height: calc(100vh - 130px);
      overflow: auto;
    }
  }
</style>
