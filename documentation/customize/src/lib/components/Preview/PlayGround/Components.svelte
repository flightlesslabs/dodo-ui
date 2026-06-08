<script>
  import PreviewButton from '../ui-components/PreviewButton.svelte';
</script>

<div class="Components">
  <div class="component-group">
    <PreviewButton>Primary</PreviewButton>
    <PreviewButton color="secondary">Secondary</PreviewButton>
    <PreviewButton color="neutral">Neutral</PreviewButton>
    <PreviewButton color="safe">Safe</PreviewButton>
    <PreviewButton color="warning">Warning</PreviewButton>
    <PreviewButton color="danger">Danger</PreviewButton>
  </div>
  <div class="component-group">
    <PreviewButton variant="text">Primary</PreviewButton>
    <PreviewButton color="secondary" variant="text">Secondary</PreviewButton>
    <PreviewButton color="neutral" variant="text">Neutral</PreviewButton>
    <PreviewButton color="safe" variant="text">Safe</PreviewButton>
    <PreviewButton color="warning" variant="text">Warning</PreviewButton>
    <PreviewButton color="danger" variant="text">Danger</PreviewButton>
  </div>
  <div class="component-group">
    <PreviewButton roundness={1}>Roundness 1</PreviewButton>
    <PreviewButton roundness={2}>Roundness 2</PreviewButton>
    <PreviewButton roundness={3}>Roundness 3</PreviewButton>
    <PreviewButton roundness="pill">Roundness Pill</PreviewButton>
  </div>
  <div class="component-group">
    <PreviewButton size="small">Small</PreviewButton>
    <PreviewButton>Normal</PreviewButton>
    <PreviewButton size="large">Large</PreviewButton>
  </div>
</div>

<style lang="scss">
  .Components {
    :global(button) {
      margin: 4px;
    }

    .component-group {
      margin-top: 8px;
    }
  }
</style>
