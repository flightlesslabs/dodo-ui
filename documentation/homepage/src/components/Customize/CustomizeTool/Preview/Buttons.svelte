<script>
  import Button from './ui/Button.svelte';
</script>

<div>
  <Button>Primary</Button>
  <Button color="secondary">Secondary</Button>
  <Button color="neutral">Neutral</Button>
  <Button color="safe">Safe</Button>
  <Button color="warning">Warning</Button>
  <Button color="danger">Danger</Button>

  <br />

  <Button variant="text">Primary</Button>
  <Button color="secondary" variant="text">Secondary</Button>
  <Button color="neutral" variant="text">Neutral</Button>
  <Button color="safe" variant="text">Safe</Button>
  <Button color="warning" variant="text">Warning</Button>
  <Button color="danger" variant="text">Danger</Button>

  <br />
  <br />

  <Button size="small" color="secondary">Small</Button>
  <Button size="normal" color="secondary">Normal</Button>
  <Button size="large" color="secondary">Large</Button>

  <br />
  <br />

  <Button roundness={1}>Roundness 1</Button>
  <Button roundness={2}>Roundness 2</Button>
  <Button roundness={3}>Roundness 3</Button>
  <Button roundness="pill">Roundness Pill</Button>
</div>

<style lang="scss">
  div {
    :global(.dodo-ui-Button) {
      margin: 4px;
    }
  }
</style>
