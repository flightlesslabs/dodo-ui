<script>
  import { createCssText } from '$lib/helpers/createCssText';
  import { generateColorVariables } from '$lib/helpers/generateColorVariables';
  import { generateRoundnessVariables } from '$lib/helpers/generateRoundnessVariables';
  import { generateSizeVariables } from '$lib/helpers/generateSizeVariables';
  import { generateSpaceVariables } from '$lib/helpers/generateSpaceVariables';
  import { downloadTextFile } from '$lib/helpers/downloadTextFile';
  import { useColorStore } from '$lib/store/colors.svelte';
  import { useRoundnessStore } from '$lib/store/roundness.svelte';
  import { useSizeStore } from '$lib/store/size.svelte';
  import { useSpaceStore } from '$lib/store/space.svelte';
  import { Button } from '@flightlesslabs/dodo-ui';

  let anyFilterActive = $derived(
    useRoundnessStore.isActive ||
      useSizeStore.isActive ||
      useSpaceStore.isActive ||
      useColorStore.isActive,
  );

  async function handleDownload() {
    const colors = generateColorVariables(useColorStore.colors, useColorStore.activeColors);
    const roundness = generateRoundnessVariables(useRoundnessStore.roundness || 1);
    const size = generateSizeVariables(useSizeStore.size);
    const space = generateSpaceVariables(useSpaceStore.space);
    const css = await createCssText({
      variables: [
        ...colors.variables,
        ...roundness.variables,
        ...size.variables,
        ...space.variables,
      ],
      variablesDark: [...colors.variablesDark],
    });

    downloadTextFile(css, {
      fileName: 'dodo-ui-customized',
      extension: 'css',
      mimeType: 'text/css',
    });
  }
</script>

<div>
  <Button onclick={handleDownload} disabled={!anyFilterActive}>Download</Button>

  <section>
    *Import the downloaded <b>dodo-ui-customized.css</b> right after <b>global.css (Dodo UI)</b> in
    your root component.
    <br />use the root layout (+layout.svelte) for SvelteKit.
  </section>
</div>

<style lang="scss">
  section {
    font-size: 0.85rem;
    line-height: 24px;
    color: var(--dodo-color-neutral-700);
    margin-top: 8px;

    b {
      font-weight: 600;
      color: var(--dodo-color-neutral-800);
    }
  }
</style>
