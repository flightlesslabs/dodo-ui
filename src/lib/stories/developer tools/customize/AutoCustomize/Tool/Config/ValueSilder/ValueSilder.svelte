<script lang="ts">
  import FormControl from '$lib/stories/components/Form/FormControl/FormControl.svelte';
  import RangeSlider from '$lib/stories/components/Form/RangeSlider/RangeSlider.svelte';

  interface ValueSilderProps {
    label?: string;
    value: number;
    min: number;
    max: number;
    /** oninput event handler */
    oninput?: (value: number) => void;
  }

  const { label, value, min, max, oninput }: ValueSilderProps = $props();

  let displayValue = $state(0);

  function oninputMod(e: Event) {
    const target = e.target as HTMLInputElement;

    if (oninput) {
      oninput(Number(target.value));
    }
  }

  $effect(() => {
    if (value === 0) {
      displayValue = 1;
    } else if (value < 0) {
      displayValue = value;
    } else {
      displayValue = value + 1;
    }
  });
</script>

<div class="ValueSilder">
  <FormControl label={`${label} ${displayValue}x`}>
    <RangeSlider {value} {min} {max} oninput={oninputMod} size="small" />
  </FormControl>
</div>

<style lang="scss">
  .ValueSilder {
    margin-bottom: calc(var(--dodo-ui-space) * 2.5);
  }
</style>
