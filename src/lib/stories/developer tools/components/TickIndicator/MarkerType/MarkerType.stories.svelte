<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import TickIndicator from '../TickIndicator.svelte';
  import { storyTickIndicatorArgTypes, ticksExample } from '../TickIndicator.stories.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: TickIndicator,
    tags: ['autodocs'],
    argTypes: storyTickIndicatorArgTypes,
  });
</script>

<Story name="Line" args={{ ticks: ticksExample }} />
<Story name="Dot" args={{ ticks: ticksExample, markerType: 'dot' }} />
<Story name="Disc" args={{ ticks: ticksExample, markerType: 'disc' }} />
