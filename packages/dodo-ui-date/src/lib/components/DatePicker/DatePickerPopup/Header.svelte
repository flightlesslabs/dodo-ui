<script lang="ts">
  import { DatePicker } from 'bits-ui';

  const triggerClasses = $derived(
    [
      'dodo-ui-Button',
      'compact',
      'size--normal',
      'variant--text',
      'background--subtle',
      'color--primary',
      'roundness--1',
    ].filter(Boolean),
  );
</script>

<DatePicker.Header>
  <DatePicker.PrevButton class={triggerClasses.join(' ')}>
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        fill="currentColor"
        d="m10.8 12l3.9 3.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-4.6-4.6q-.15-.15-.212-.325T8.425 12t.063-.375t.212-.325l4.6-4.6q.275-.275.7-.275t.7.275t.275.7t-.275.7z"
      />
    </svg>
  </DatePicker.PrevButton>
  <DatePicker.Heading />
  <DatePicker.NextButton class={triggerClasses.join(' ')}>
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        fill="currentColor"
        d="M12.6 12L8.7 8.1q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.6 4.6q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7z"
      />
    </svg>
  </DatePicker.NextButton>
</DatePicker.Header>
