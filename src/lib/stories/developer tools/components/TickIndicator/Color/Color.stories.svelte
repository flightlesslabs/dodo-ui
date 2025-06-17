<script module>
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

<Story name="Default" args={{ ticks: ticksExample }} />
<Story name="White" args={{ ticks: ticksExample, color: 'white' }} />
<Story name="Primary" args={{ ticks: ticksExample, color: 'primary' }} />
<Story name="Secondary" args={{ ticks: ticksExample, color: 'secondary' }} />
<Story name="Neutral" args={{ ticks: ticksExample, color: 'neutral' }} />
<Story name="Safe" args={{ ticks: ticksExample, color: 'safe' }} />
<Story name="Warning" args={{ ticks: ticksExample, color: 'warning' }} />
<Story name="Danger" args={{ ticks: ticksExample, color: 'danger' }} />

<Story
  name="PrimaryWithText"
  args={{ ticks: ticksExample, color: 'primary', coloredLabels: true }}
/>
