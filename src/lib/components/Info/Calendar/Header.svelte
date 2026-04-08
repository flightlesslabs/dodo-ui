<script lang="ts">
  import Icon from '@iconify/svelte';
  import { Calendar } from 'bits-ui';

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

<Calendar.Header>
  <Calendar.PrevButton class={triggerClasses.join(' ')}>
    <Icon icon="material-symbols:chevron-left-rounded" />
  </Calendar.PrevButton>
  <Calendar.Heading />
  <Calendar.NextButton class={triggerClasses.join(' ')}>
    <Icon icon="material-symbols:chevron-right-rounded" />
  </Calendar.NextButton>
</Calendar.Header>
