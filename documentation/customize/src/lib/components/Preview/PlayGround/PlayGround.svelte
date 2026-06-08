<script>
  import { generateColorVariables } from '$lib/helpers/generateColorVariables';
  import { useColorStore } from '$lib/store/colors.svelte';
  import { generateRoundnessVariables } from '$lib/helpers/generateRoundnessVariables';
  import { useRoundnessStore } from '$lib/store/roundness.svelte';
  import { generateSizeVariables } from '$lib/helpers/generateSizeVariables';
  import { useSizeStore } from '$lib/store/size.svelte';
  import { generateSpaceVariables } from '$lib/helpers/generateSpaceVariables';
  import { useSpaceStore } from '$lib/store/space.svelte';
  import Components from './Components.svelte';

  const colors = $derived(generateColorVariables(useColorStore.colors, useColorStore.activeColors));
  const roundness = $derived(generateRoundnessVariables(useRoundnessStore.roundness || 1));
  const size = $derived(generateSizeVariables(useSizeStore.size));
  const space = $derived(generateSpaceVariables(useSpaceStore.space));
  const variablesSpaces = $derived([...roundness.variables, ...size.variables, ...space.variables]);
  const variables = $derived([...variablesSpaces, ...colors.variables].join(' '));
  const variablesDark = $derived([...variablesSpaces, ...colors.variablesDark].join(' '));
</script>

<article class="PlayGround">
  <section style={variables}>
    <Components />
  </section>

  <section style={variablesDark} class="dodo-theme--dark">
    <Components />
  </section>
</article>

<style lang="scss">
  section {
    margin-bottom: 16px;
    padding: 16px;
    border-radius: 8px;

    &.dodo-theme--dark {
      background-color: #333;
    }
  }
</style>
