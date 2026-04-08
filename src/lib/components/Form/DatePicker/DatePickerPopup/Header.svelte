<script lang="ts">
  import Icon from '@iconify/svelte';
  import { DatePicker } from 'bits-ui';

  const triggerClasses = $derived(
    [
      'dodo-ui-Button',
      'compact',
      'size--normal',
      'variant--text',
      'color--primary',
      'roundness--1',
    ].filter(Boolean),
  );
</script>

<DatePicker.Header>
  <DatePicker.PrevButton class={triggerClasses.join(' ')}>
    <Icon icon="material-symbols:chevron-left-rounded" />
  </DatePicker.PrevButton>
  <DatePicker.Heading />
  <DatePicker.NextButton class={triggerClasses.join(' ')}>
    <Icon icon="material-symbols:chevron-right-rounded" />
  </DatePicker.NextButton>
</DatePicker.Header>
