<script lang="ts">
  import { Card, Column } from '@flightlesslabs/dodo-ui';
  import type { Snippet } from 'svelte';

  type Props = {
    children?: Snippet;
    active?: boolean;
    battery: number;
  };

  let { children, active = false, battery }: Props = $props();

  const classes = $derived(['DeviceCard', active ? 'active' : ''].filter(Boolean));
</script>

<Column size="flex">
  <div class={classes.join(' ')}>
    <Card
      shadow={0}
      color={active ? 'secondary' : 'neutral'}
      outline
      roundness="pill"
      height="135px"
    >
      <section>
        {@render children?.()}
      </section>
      <section class="battery">{battery}%</section>
    </Card>
  </div>
</Column>

<style lang="scss">
  .DeviceCard {
    color: var(--dodo-color-neutral-400);
    :global(.dodo-ui-Card) {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    .battery {
      display: none;
      font-weight: 500;
      color: var(--dodo-color-secondary-700);
      margin-top: 8px;
    }

    &.active {
      color: var(--dodo-color-secondary-500);

      :global(.dodo-ui-Card) {
        background-color: var(--dodo-color-secondary-200);
      }

      .battery {
        display: flex;
      }
    }
  }
</style>
