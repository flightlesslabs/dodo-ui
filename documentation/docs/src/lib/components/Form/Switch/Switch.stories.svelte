<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import type { ArgTypes } from 'storybook/internal/csf';
  import {
    type SwitchProps,
    componentColorOptions,
    componentVariantOptions,
    componentSizeOptions,
    componenRoundnessShapeOptions,
    Theme,
    Switch,
  } from '@flightlesslabs/dodo-ui';

  const description = `
 A Switch/toggle component based on bits-ui [switch](https://bits-ui.com/docs/components/switch).

 \`\`\`ts
 import { Switch } from '@flightlesslabs/dodo-ui';
 \`\`\`
`;

  /**
   * Storybook controls for Switch
   */
  export const SwitchArgTypes: Partial<ArgTypes<SwitchProps>> = {
    // ------------------------------
    // Core
    // ------------------------------
    children: { table: { category: 'API', subcategory: 'Base' } },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable interactions',
      table: { category: 'API', subcategory: 'Base' },
    },
    class: { table: { category: 'API', subcategory: 'Base' } },

    // ------------------------------
    // Appearance
    // ------------------------------
    color: {
      control: { type: 'select' },
      options: componentColorOptions,
      description: 'Color theme token',
      table: { category: 'API', subcategory: 'Appearance', defaultValue: { summary: 'neutral' } },
    },
    variant: {
      control: { type: 'select' },
      options: componentVariantOptions,
      description: 'Visual variant of the Switch',
      table: { category: 'API', subcategory: 'Appearance', defaultValue: { summary: 'text' } },
    },
    size: {
      control: { type: 'select' },
      options: componentSizeOptions,
      description: 'Visual size token',
      table: { category: 'API', subcategory: 'Appearance', defaultValue: { summary: 'normal' } },
    },
    roundness: {
      control: { type: 'select' },
      options: componenRoundnessShapeOptions,
      description: 'Border radius token',
      table: { category: 'API', subcategory: 'Appearance' },
    },
    outline: {
      control: { type: 'boolean' },
      description: 'Render outlined style',
      table: { category: 'API', subcategory: 'Appearance', defaultValue: { summary: 'true' } },
    },
  };

  const { Story } = defineMeta({
    component: Switch,
    tags: ['autodocs'],
    argTypes: SwitchArgTypes,
    parameters: {
      docs: {
        description: {
          component: description,
        },
      },
    },
  });

  let myValue = $state<boolean>(true);
</script>

<!-- ------------------------------ -->
<!-- Stories -->
<!-- ------------------------------ -->

<Story name="Default" args={{ id: 'Default' }}>Check this text</Story>

<Story name="Controlled" asChild>
  <Switch id="Checked" bind:checked={myValue}>Check this text</Switch>
</Story>

<Story name="Solid" args={{ id: 'Solid', variant: 'solid', checked: true }}>Check this text</Story>

<Story name="NoOutline" args={{ id: 'Outline', outline: false }}>Check this text</Story>

<Story
  name="OnChange (Actions)"
  args={{
    id: 'OnChange_Action',
    onCheckedChange: (checked: boolean) => {
      alert('OnChange');
      console.log('OnChange', checked);
    },
  }}
>
  Check this text
</Story>

<Story name="Color" args={{ id: 'Safe', color: 'safe' }}>Check this text</Story>

<Story name="Large" args={{ id: 'Large', size: 'large' }}>Check this text</Story>

<Story name="Disabled" args={{ disabled: true }}>Check this text</Story>

<Story name="Light Theme" asChild>
  <Theme type="light">
    <Switch id="Light_Theme">Check this text</Switch>
  </Theme>
</Story>

<Story name="Dark Theme" asChild globals={{ backgrounds: { value: 'dark' } }}>
  <Theme type="dark">
    <Switch id="Dark_Theme">Check this text</Switch>
  </Theme>
</Story>
