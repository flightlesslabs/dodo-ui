<script lang="ts">
  import { Calendar, type CalendarRootSnippetProps } from 'bits-ui';
  import TableHead from './TableHead.svelte';
  import TableBody from './TableBody.svelte';

  let { months, weekdays }: CalendarRootSnippetProps = $props();
</script>

<div class="CalendarGrid">
  {#each months as month (month.value)}
    <Calendar.Grid>
      <TableHead {weekdays} />
      <TableBody {month} />
    </Calendar.Grid>
  {/each}
</div>
