<script>
  import ControlBox from '$lib/components/ControlBox/ControlBox.svelte';
  import Preview from '$lib/components/Preview/Preview.svelte';
</script>

<div class="indexPage">
  <ControlBox />
  <Preview />
</div>

<style lang="scss">
  .indexPage {
    display: flex;
    flex-direction: column;
    height: 100%;

    @media (min-width: 64rem) {
      flex-direction: row;
    }
  }
</style>
