<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import NumericInput from '../NumericInput.svelte';
  import { storyNumericInputArgTypes } from '../NumericInput.stories.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: NumericInput,
    tags: ['autodocs'],
    argTypes: storyNumericInputArgTypes,
  });

  let value = $state<undefined | number>(0);
</script>

<!-- NumericInput with default style -->
<Story
  name="Default"
  args={{
    value,
    onValueChange: (val) => {
      value = val;
    },
  }}
/>

<!-- Min, In this case min is set to 25 -->
<Story
  name="Min"
  args={{
    value,
    onValueChange: (val) => {
      console.log(val);

      value = val;
    },
    min: 25,
  }}
/>

<!-- Max, In this case max is set to 25 -->
<Story
  name="Max"
  args={{
    value,
    onValueChange: (val) => {
      value = val;
    },
    max: 25,
  }}
/>

<!-- Allow Negative values -->
<Story
  name="AllowNegativeValues"
  args={{
    value,
    onValueChange: (val) => {
      value = val;
    },
    allowNegativeValues: true,
  }}
/>

<!-- Decimal Places -->
<Story
  name="DecimalPlaces"
  args={{
    value,
    onValueChange: (val) => {
      value = val;
    },
    decimalPlaces: 2,
  }}
/>

<!-- Log validations, check console -->
<Story
  name="LogValidations"
  args={{
    value,
    onValueChange: (val) => {
      value = val;
    },
    log: true,
  }}
/>
