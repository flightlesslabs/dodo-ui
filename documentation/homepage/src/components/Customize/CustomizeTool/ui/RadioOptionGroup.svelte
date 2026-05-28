<script lang="ts">
  import { Column, FormField, Grid } from '@flightlesslabs/dodo-ui';
  import { Radio, RadioGroup } from '@flightlesslabs/dodo-ui-bits';
  import type { ToolOption } from '../types';

  interface RadioOptionGroupProps {
    id: string;
    label: string;
    options: ToolOption[];
    value?: string;
  }

  let { options, label, id, value = $bindable() }: RadioOptionGroupProps = $props();
</script>

<div class="RadioOptionGroup">
  <FormField {label} for={id}>
    <RadioGroup {id} name={id} bind:value>
      <Grid>
        {#each options as option (option.value)}
          <Column>
            <Radio id={`${id}--${option.value}`} value={option.value}>
              {#if option.label}
                {option.label}
              {/if}
            </Radio>
          </Column>
        {/each}
      </Grid>
    </RadioGroup>
  </FormField>
</div>

<style lang="scss">
  .RadioOptionGroup {
  }
</style>
