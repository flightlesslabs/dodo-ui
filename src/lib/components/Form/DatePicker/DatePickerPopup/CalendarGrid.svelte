<script lang="ts">
  import { DatePicker, type CalendarRootSnippetProps, type Month } from 'bits-ui';

  let { months, weekdays }: CalendarRootSnippetProps = $props();
</script>

<div class="CalendarGrid">
  {#each months as month (month.value)}
    <DatePicker.Grid>
      <DatePicker.GridHead>
        <DatePicker.GridRow>
          {#each weekdays as day (day)}
            <DatePicker.HeadCell>
              <div>{day.slice(0, 2)}</div>
            </DatePicker.HeadCell>
          {/each}
        </DatePicker.GridRow>
      </DatePicker.GridHead>
      <DatePicker.GridBody>
        {#each month.weeks as weekDates (weekDates)}
          <DatePicker.GridRow>
            {#each weekDates as date (date)}
              <DatePicker.Cell {date} month={month.value}>
                <DatePicker.Day>
                  <div></div>
                  {date.day}
                </DatePicker.Day>
              </DatePicker.Cell>
            {/each}
          </DatePicker.GridRow>
        {/each}
      </DatePicker.GridBody>
    </DatePicker.Grid>
  {/each}
</div>
