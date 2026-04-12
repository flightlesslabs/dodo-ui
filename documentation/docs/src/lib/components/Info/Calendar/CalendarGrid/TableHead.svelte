<script lang="ts">
  import { Calendar } from 'bits-ui';

  type Props = {
    weekdays: string[];
  };

  let { weekdays }: Props = $props();
</script>

<Calendar.GridHead>
  <Calendar.GridRow>
    {#each weekdays as day (day)}
      <Calendar.HeadCell>
        <div>{day.slice(0, 2)}</div>
      </Calendar.HeadCell>
    {/each}
  </Calendar.GridRow>
</Calendar.GridHead>
