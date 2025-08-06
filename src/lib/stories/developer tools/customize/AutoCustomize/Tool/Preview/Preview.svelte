<script lang="ts">
  import Button from '$lib/stories/components/Form/Button/Button.svelte';
  import Paper from '$lib/stories/components/Layout/Paper/Paper.svelte';
  import { colorPaletteValues } from '$lib/stories/developer tools/philosophy/Colors/utils/color.js';
  import { useAutoCustomizeConfigStore } from '../stores/config.svelte.js';

  let cssVariables = $state<string[]>([]);

  $effect(() => {
    const newCssvariables: string[] = [];

    for (let index = 0; index < colorPaletteValues.length; index++) {
      const weight = colorPaletteValues[index];

      newCssvariables.push(
        `--dodo-color-primary-${weight}: var(--dodo-color-base-${useAutoCustomizeConfigStore.data.primaryColor}-${weight})`,
      );

      newCssvariables.push(
        `--dodo-color-secondary-${weight}: var(--dodo-color-base-${useAutoCustomizeConfigStore.data.secondaryColor}-${weight})`,
      );

      newCssvariables.push(
        `--dodo-color-neutral-${weight}: var(--dodo-color-base-${useAutoCustomizeConfigStore.data.neutralColor}-${weight})`,
      );

      newCssvariables.push(
        `--dodo-color-safe-${weight}: var(--dodo-color-base-${useAutoCustomizeConfigStore.data.safeColor}-${weight})`,
      );

      newCssvariables.push(
        `--dodo-color-warning-${weight}: var(--dodo-color-base-${useAutoCustomizeConfigStore.data.warningColor}-${weight})`,
      );

      newCssvariables.push(
        `--dodo-color-danger-${weight}: var(--dodo-color-base-${useAutoCustomizeConfigStore.data.dangerColor}-${weight})`,
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

    newCssvariables.push(
      ...[
        `--dodo-ui-Button-outline-secondary: var(--dodo-color-base-${useAutoCustomizeConfigStore.data.secondaryColor}-400)`,
        `--dodo-ui-Button-text-secondary-bg: var(--dodo-color-base-${useAutoCustomizeConfigStore.data.secondaryColor}-100)`,
        `--dodo-ui-Button-text-secondary-hover-bg: var(--dodo-color-base-${useAutoCustomizeConfigStore.data.secondaryColor}-200)`,
        `--dodo-ui-Button-text-secondary-active-bg: var(--dodo-color-base-${useAutoCustomizeConfigStore.data.secondaryColor}-300)`,
        `--dodo-ui-Button-solid-secondary-bg: var(--dodo-color-base-${useAutoCustomizeConfigStore.data.secondaryColor}-500)`,
        `--dodo-ui-Button-solid-secondary-hover-bg: var(--dodo-color-base-${useAutoCustomizeConfigStore.data.secondaryColor}-600)`,
        `--dodo-ui-Button-solid-secondary-active-bg: var(--dodo-color-base-${useAutoCustomizeConfigStore.data.secondaryColor}-700)`,
      ],
    );

    newCssvariables.push(
      ...[
        `--dodo-ui-Button-outline-neutral: var(--dodo-color-base-${useAutoCustomizeConfigStore.data.neutralColor}-400)`,
        `--dodo-ui-Button-text-neutral-bg: var(--dodo-color-base-${useAutoCustomizeConfigStore.data.neutralColor}-100)`,
        `--dodo-ui-Button-text-neutral-hover-bg: var(--dodo-color-base-${useAutoCustomizeConfigStore.data.neutralColor}-200)`,
        `--dodo-ui-Button-text-neutral-active-bg: var(--dodo-color-base-${useAutoCustomizeConfigStore.data.neutralColor}-300)`,
        `--dodo-ui-Button-solid-neutral-bg: var(--dodo-color-base-${useAutoCustomizeConfigStore.data.neutralColor}-500)`,
        `--dodo-ui-Button-solid-neutral-hover-bg: var(--dodo-color-base-${useAutoCustomizeConfigStore.data.neutralColor}-600)`,
        `--dodo-ui-Button-solid-neutral-active-bg: var(--dodo-color-base-${useAutoCustomizeConfigStore.data.neutralColor}-700)`,
      ],
    );

    newCssvariables.push(
      ...[
        `--dodo-ui-Button-outline-safe: var(--dodo-color-base-${useAutoCustomizeConfigStore.data.safeColor}-400)`,
        `--dodo-ui-Button-text-safe-bg: var(--dodo-color-base-${useAutoCustomizeConfigStore.data.safeColor}-100)`,
        `--dodo-ui-Button-text-safe-hover-bg: var(--dodo-color-base-${useAutoCustomizeConfigStore.data.safeColor}-200)`,
        `--dodo-ui-Button-text-safe-active-bg: var(--dodo-color-base-${useAutoCustomizeConfigStore.data.safeColor}-300)`,
        `--dodo-ui-Button-solid-safe-bg: var(--dodo-color-base-${useAutoCustomizeConfigStore.data.safeColor}-500)`,
        `--dodo-ui-Button-solid-safe-hover-bg: var(--dodo-color-base-${useAutoCustomizeConfigStore.data.safeColor}-600)`,
        `--dodo-ui-Button-solid-safe-active-bg: var(--dodo-color-base-${useAutoCustomizeConfigStore.data.safeColor}-700)`,
      ],
    );

    newCssvariables.push(
      ...[
        `--dodo-ui-Button-outline-warning: var(--dodo-color-base-${useAutoCustomizeConfigStore.data.warningColor}-400)`,
        `--dodo-ui-Button-text-warning-bg: var(--dodo-color-base-${useAutoCustomizeConfigStore.data.warningColor}-100)`,
        `--dodo-ui-Button-text-warning-hover-bg: var(--dodo-color-base-${useAutoCustomizeConfigStore.data.warningColor}-200)`,
        `--dodo-ui-Button-text-warning-active-bg: var(--dodo-color-base-${useAutoCustomizeConfigStore.data.warningColor}-300)`,
        `--dodo-ui-Button-solid-warning-bg: var(--dodo-color-base-${useAutoCustomizeConfigStore.data.warningColor}-500)`,
        `--dodo-ui-Button-solid-warning-hover-bg: var(--dodo-color-base-${useAutoCustomizeConfigStore.data.warningColor}-600)`,
        `--dodo-ui-Button-solid-warning-active-bg: var(--dodo-color-base-${useAutoCustomizeConfigStore.data.warningColor}-700)`,
      ],
    );

    newCssvariables.push(
      ...[
        `--dodo-ui-Button-outline-danger: var(--dodo-color-base-${useAutoCustomizeConfigStore.data.dangerColor}-400)`,
        `--dodo-ui-Button-text-danger-bg: var(--dodo-color-base-${useAutoCustomizeConfigStore.data.dangerColor}-100)`,
        `--dodo-ui-Button-text-danger-hover-bg: var(--dodo-color-base-${useAutoCustomizeConfigStore.data.dangerColor}-200)`,
        `--dodo-ui-Button-text-danger-active-bg: var(--dodo-color-base-${useAutoCustomizeConfigStore.data.dangerColor}-300)`,
        `--dodo-ui-Button-solid-danger-bg: var(--dodo-color-base-${useAutoCustomizeConfigStore.data.dangerColor}-500)`,
        `--dodo-ui-Button-solid-danger-hover-bg: var(--dodo-color-base-${useAutoCustomizeConfigStore.data.dangerColor}-600)`,
        `--dodo-ui-Button-solid-danger-active-bg: var(--dodo-color-base-${useAutoCustomizeConfigStore.data.dangerColor}-700)`,
      ],
    );

    cssVariables = [...newCssvariables];
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

  <div class="section">
    <div class="column">
      <Paper shadow={1} width="150px" height="200px">
        <div style="padding: 16px">Hola!</div>
      </Paper>
    </div>
  </div>
</div>

<style lang="scss">
  @use '../../../../../../styles/scss' as *;

  :global(:root) {
    --AutoCustomize-Preview-bgColor: var(--dodo-color-base-gray-100);
  }

  :global(.dodo-theme--dark) {
    --AutoCustomize-Preview-bgColor: var(--dodo-color-base-gray-800);
  }

  .Preview {
    background-color: var(--AutoCustomize-Preview-bgColor);
    padding: calc(var(--dodo-ui-space) * 2);
    border-radius: var(--dodo-ui-element-roundness-2);
    width: 100%;

    @media (min-width: $breakpoints-lg) {
      flex: 1;
      width: initial;
      height: calc(100vh - 130px);
      overflow: auto;
    }

    .section {
      width: 100%;
      margin: var(--dodo-ui-space) 0;
      display: flex;
      flex-wrap: wrap;
    }

    .column {
      margin: 4px;
      display: inline-flex;
    }
  }
</style>
