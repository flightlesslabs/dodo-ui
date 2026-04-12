<script lang="ts">
  import { DatePicker } from 'bits-ui';
  import { formatSegments, type DatePickerFormat, type DateSegment } from './utils.js';

  type Props = {
    segments: DateSegment[];
    dateFormat: DatePickerFormat;
  };

  let { segments, dateFormat }: Props = $props();
</script>

{#each formatSegments(segments, dateFormat) as { part, value }, i (part + i)}
  <DatePicker.Segment {part}>
    {value}
  </DatePicker.Segment>
{/each}
