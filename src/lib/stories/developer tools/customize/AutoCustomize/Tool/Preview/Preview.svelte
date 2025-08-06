<script lang="ts">
  import Button from '$lib/stories/components/Form/Button/Button.svelte';
  import { colorPaletteValues } from '$lib/stories/developer tools/philosophy/Colors/utils/color.js';
  import { useAutoCustomizeConfigStore } from '../stores/config.svelte.js';

  let cssVariables = $state<string[]>([]);

  $effect(() => {
    const newCssvariables: string[] = [];

    // primaryColor
    for (let index = 0; index < colorPaletteValues.length; index++) {
      const weight = colorPaletteValues[index];

      newCssvariables.push(
        `--dodo-color-primary-${weight}: var(--dodo-color-base-${useAutoCustomizeConfigStore.data.primaryColor}-${weight})`,
      );
    }

    newCssvariables.push(
      ...[
        `--dodo-ui-Button-outline-primary: var(--dodo-color-base-${useAutoCustomizeConfigStore.data.primaryColor}-400)`,
        `--dodo-ui-Button-text-primary-bg: var(--dodo-color-base-${useAutoCustomizeConfigStore.data.primaryColor}-100)`,
        `--dodo-ui-Button-text-primary-hover-bg: var(--dodo-color-base-${useAutoCustomizeConfigStore.data.primaryColor}-200)`,
        `--dodo-ui-Button-text-primary-active-bg: var(--dodo-color-base-${useAutoCustomizeConfigStore.data.primaryColor}-300)`,
        `--dodo-ui-Button-solid-primary-bg: var(--dodo-color-base-${useAutoCustomizeConfigStore.data.primaryColor}-500)`,
        `--dodo-ui-Button-solid-primary-hover-bg: var(--dodo-color-base-${useAutoCustomizeConfigStore.data.primaryColor}-600)`,
        `--dodo-ui-Button-solid-primary-active-bg: var(--dodo-color-base-${useAutoCustomizeConfigStore.data.primaryColor}-700)`,
      ],
    );

    cssVariables = [...newCssvariables];
  });

  $effect(() => {
    console.log(cssVariables);
  });
</script>

<div class="Preview" style={cssVariables.join(';')}>
  <div class="section">
    <div class="column">
      <Button>Primary</Button>
    </div>
    <div class="column">
      <Button color="secondary">Secondary</Button>
    </div>
    <div class="column">
      <Button color="neutral">Neutral</Button>
    </div>
    <div class="column">
      <Button color="safe">Safe</Button>
    </div>
    <div class="column">
      <Button color="warning">Warning</Button>
    </div>
    <div class="column">
      <Button color="danger">Danger</Button>
    </div>
  </div>

  <div class="section">
    <div class="column">
      <Button variant="text" outline>Primary</Button>
    </div>
    <div class="column">
      <Button variant="text" outline color="secondary">Secondary</Button>
    </div>
    <div class="column">
      <Button variant="text" outline color="neutral">Neutral</Button>
    </div>
    <div class="column">
      <Button variant="text" outline color="safe">Safe</Button>
    </div>
    <div class="column">
      <Button variant="text" outline color="warning">Warning</Button>
    </div>
    <div class="column">
      <Button variant="text" outline color="danger">Danger</Button>
    </div>
  </div>
</div>

<style lang="scss">
  @use '../../../../../../styles/scss' as *;

  .Preview {
    background-color: var(--dodo-color-neutral-100);
    border: 1px solid var(--dodo-color-neutral-200);
    padding: calc(var(--dodo-ui-space) * 2);
    border-radius: var(--dodo-ui-element-roundness-2);
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;

    @media (min-width: $breakpoints-lg) {
      flex: 1;
      width: initial;
      height: calc(100vh - 130px);
      overflow: auto;
    }

    .section {
      width: 100%;
      margin: var(--dodo-ui-space) 0;
    }

    .column {
      margin: 4px;
      display: inline-flex;
    }
  }
</style>
