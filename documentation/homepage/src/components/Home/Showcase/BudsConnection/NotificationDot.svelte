<script lang="ts">
  import { Indicator } from '@flightlesslabs/dodo-ui';

  type Props = {
    active?: boolean;
  };

  let { active }: Props = $props();

  const classes = $derived(['NotificationDot', active ? 'active' : ''].filter(Boolean));
</script>

<div class={classes.join(' ')}>
  <Indicator color={active ? 'safe' : 'danger'} font-size="0.9rem" />
</div>

<style lang="scss">
  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }

    50% {
      opacity: 0.35;
    }
  }

  .NotificationDot {
    position: absolute;
    top: 20px;
    right: 24px;
    animation: pulse 600ms infinite ease-in-out;

    &.active {
      animation: none;
    }
  }
</style>
