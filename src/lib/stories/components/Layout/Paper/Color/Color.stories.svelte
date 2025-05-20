<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { storyPaperArgTypes } from '../Paper.stories.svelte';
  import Paper from '../Paper.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: Paper,
    tags: ['autodocs'],
    argTypes: storyPaperArgTypes,
  });
</script>

<Story name="Default" args={{ height: '100px' }}>Hola!</Story>

<Story name="Primary" args={{ color: 'primary', height: '100px' }}>Hola!</Story>
<Story name="Secondary" args={{ color: 'secondary', height: '100px' }}>Hola!</Story>
<Story name="Neutral" args={{ color: 'neutral', height: '100px' }}>Hola!</Story>
<Story name="Safe" args={{ color: 'safe', height: '100px' }}>Hola!</Story>
<Story name="Warning" args={{ color: 'warning', height: '100px' }}>Hola!</Story>
<Story name="Danger" args={{ color: 'danger', height: '100px' }}>Hola!</Story>

<Story name="Default Outline" args={{ outline: true, height: '100px' }}>Hola!</Story>
<Story name="Primary Outline" args={{ color: 'primary', outline: true, height: '100px' }}>
  Hola!
</Story>
<Story name="Secondary Outline" args={{ color: 'secondary', outline: true, height: '100px' }}>
  Hola!
</Story>
<Story name="Neutral Outline" args={{ color: 'neutral', outline: true, height: '100px' }}>
  Hola!
</Story>
<Story name="Safe Outline" args={{ color: 'safe', outline: true, height: '100px' }}>Hola!</Story>
<Story name="Warning Outline" args={{ color: 'warning', outline: true, height: '100px' }}>
  Hola!
</Story>
<Story name="Danger Outline" args={{ color: 'danger', outline: true, height: '100px' }}>Hola!</Story
>

<Story name="Primary Solid" args={{ color: 'primary', variant: 'solid', height: '100px' }}>
  Hola!
</Story>
<Story name="Secondary Solid" args={{ color: 'secondary', variant: 'solid', height: '100px' }}>
  Hola!
</Story>
<Story name="Neutral Solid" args={{ color: 'neutral', variant: 'solid', height: '100px' }}>
  Hola!
</Story>
<Story name="Safe Solid" args={{ color: 'safe', variant: 'solid', height: '100px' }}>Hola!</Story>
<Story name="Warning Solid" args={{ color: 'warning', variant: 'solid', height: '100px' }}>
  Hola!
</Story>
<Story name="Danger Solid" args={{ color: 'danger', variant: 'solid', height: '100px' }}>
  Hola!
</Story>

<!-- Paper with Custom Backgroun and Border colors -->
<Story
  name="Custom Color"
  args={{ height: '100px', customBackgroundColor: '#ffdfad', customBorderColor: '#fbc674' }}
>
  Hola!
</Story>
