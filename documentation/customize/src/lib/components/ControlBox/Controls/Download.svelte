<script>
  import { createCssText } from '$lib/helpers/createCssText';
  import { generateColorVariables } from '$lib/helpers/generateColorVariables';
  import { generateRoundnessVariables } from '$lib/helpers/generateRoundnessVariables';
  import { generateSizeVariables } from '$lib/helpers/generateSizeVariables';
  import { generateSpaceVariables } from '$lib/helpers/generateSpaceVariables';
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
    const css = createCssText({
      variables: [
        ...colors.variables,
        ...roundness.variables,
        ...size.variables,
        ...space.variables,
      ],
      variablesDark: [...colors.variablesDark],
    });

    console.log('debug:', css);
  }
</script>

<div>
  <Button onclick={handleDownload} disabled={!anyFilterActive}>Download</Button>
</div>
