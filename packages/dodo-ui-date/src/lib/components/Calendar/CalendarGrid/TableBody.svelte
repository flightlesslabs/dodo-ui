<script lang="ts">
  import type { DateValue } from '@internationalized/date';
  import { Calendar, type Month } from 'bits-ui';

  type Props = {
    month: Month<DateValue>;
  };

  let { month }: Props = $props();
</script>

<Calendar.GridBody>
  {#each month.weeks as weekDates (weekDates)}
    <Calendar.GridRow>
      {#each weekDates as date (date)}
        <Calendar.Cell {date} month={month.value}>
          <Calendar.Day>
            <div></div>
            {date.day}
          </Calendar.Day>
        </Calendar.Cell>
      {/each}
    </Calendar.GridRow>
  {/each}
</Calendar.GridBody>
