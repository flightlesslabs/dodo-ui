<script lang="ts">
  import '@flightlesslabs/dodo-ui/styles/global/index.scss';
  import '@flightlesslabs/dodo-ui/styles/components.scss';
  import '@flightlesslabs/dodo-ui-bits/styles/main.scss';
  import '@flightlesslabs/dodo-ui-date/styles/main.scss';

  let { children } = $props();
</script>

<main>
  {@render children()}
</main>

<style lang="scss">
  :global(*) {
    box-sizing: border-box;
  }

  :global(html) {
    font-family: 'Nunito', sans-serif;
    font-size: 16px;
  }

  :global(body) {
    margin: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  main {
    width: 100vw;
    height: 100vh;
    background-color: var(--dodo-color-neutral-200);
    padding: 16px;

    @media (min-width: 64rem) {
      padding: 24px;
    }
  }
</style>
