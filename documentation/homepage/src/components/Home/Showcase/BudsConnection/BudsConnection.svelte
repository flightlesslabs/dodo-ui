<script lang="ts">
  import { Card, Column, Grid } from '@flightlesslabs/dodo-ui';
  import { Switch } from '@flightlesslabs/dodo-ui-bits';
  import EarbudLeftIcon from '@iconify-svelte/material-symbols/earbud-left-outline';
  import EarbudCaseIcon from '@iconify-svelte/material-symbols/earbud-case-outline';
  import EarbudRightIcon from '@iconify-svelte/material-symbols/earbud-right-outline';
  import BluetoothIcon from '@iconify-svelte/material-symbols/bluetooth';
  import BluetoothDisabledIcon from '@iconify-svelte/material-symbols/bluetooth-disabled';
  import DeviceCard from './DeviceCard.svelte';
  import NotificationDot from './NotificationDot.svelte';

  let bluetoothToggle = $state(false);
</script>

<Card
  class="BudsConnection ShowcaseItem"
  shadow={2}
  roundness={3}
  color={bluetoothToggle ? 'secondary' : 'neutral'}
>
  <Grid gap={2}>
    <NotificationDot active={bluetoothToggle} />
    <Column>
      <Switch id="bluetooth-toggle" bind:checked={bluetoothToggle} color="secondary">
        {#if bluetoothToggle}
          <BluetoothIcon height="1.6em" color="var(--dodo-color-secondary-600)" />
        {:else}
          <BluetoothDisabledIcon height="1.6em" color="var(--dodo-color-neutral-500)" />
        {/if}
      </Switch>
    </Column>
    <Column>
      <Grid gap={2}>
        <DeviceCard active={bluetoothToggle} battery={48}>
          <EarbudLeftIcon height="2em" />
        </DeviceCard>
        <DeviceCard active={bluetoothToggle} battery={60}>
          <EarbudCaseIcon height="2em" />
        </DeviceCard>
        <DeviceCard active={bluetoothToggle} battery={78}>
          <EarbudRightIcon height="2em" />
        </DeviceCard>
      </Grid>
    </Column>
  </Grid>
</Card>

<style lang="scss">
  :global(.BudsConnection) {
    width: 316px;
    padding: calc(var(--dodo-ui-space) * 2);
    margin-top: 30px;
    display: none;
    position: relative;

    @media (min-width: 1060px) {
      display: block;
    }
  }
</style>
