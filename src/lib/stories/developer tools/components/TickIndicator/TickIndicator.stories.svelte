<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import type { StoryBookArgTypes } from '$lib/storybook-types.js';
  import TickIndicator from './TickIndicator.svelte';
  import { tickColorArray, tickMarkerTypeArray, type Tick } from './TickItem/TickItem.svelte';
  import { componentSizeArray } from '$lib/types/size.js';

  export const storyTickIndicatorArgTypes: StoryBookArgTypes = {
    color: {
      control: { type: 'select' },
      options: tickColorArray,
    },
    markerType: {
      control: { type: 'select' },
      options: tickMarkerTypeArray,
    },
    size: {
      control: { type: 'select' },
      options: componentSizeArray,
    },
  };

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: TickIndicator,
    tags: ['autodocs'],
    argTypes: storyTickIndicatorArgTypes,
  });

  export const ticksExample: Tick[] = [
    {
      value: 0,
      size: 'large',
      label: '0',
    },
    {
      value: 5,
      size: 'small',
    },
    {
      value: 10,
      size: 'small',
      label: '10',
      markerType: 'dot',
    },
    {
      value: 15,
      size: 'small',
    },
    {
      value: 20,
      size: 'small',
      markerType: 'disc',
    },
    {
      value: 25,
      label: '25',
    },
    {
      value: 30,
      size: 'small',
      markerType: 'disc',
    },
    {
      value: 35,
      size: 'small',
    },
    {
      value: 40,
      size: 'small',
    },
    {
      value: 45,
      size: 'small',
    },
    {
      value: 50,
      size: 'large',
      label: '50',
    },
    {
      value: 55,
      size: 'small',
    },
    {
      value: 60,
      size: 'small',
    },
    {
      value: 65,
      size: 'small',
    },
    {
      value: 70,
      size: 'small',
    },
    {
      value: 75,
      label: '75',
    },
    {
      value: 80,
      size: 'small',
    },
    {
      value: 85,
      size: 'small',
      markerType: 'dot',
      label: '85',
    },
    {
      value: 90,
      size: 'small',
    },
    {
      value: 95,
      size: 'small',
    },
    {
      value: 100,
      size: 'large',
      label: '100',
    },
  ];
</script>

<Story name="Default" args={{ ticks: ticksExample }} />
