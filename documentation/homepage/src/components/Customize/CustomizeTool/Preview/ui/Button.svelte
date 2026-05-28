<script lang="ts">
  import type { ButtonAsButtonProps } from '@flightlesslabs/dodo-ui';
  import { Button as ButtonDodoUi } from '@flightlesslabs/dodo-ui';
  import './Button.scss';

  let { class: className = '', ...restProps }: ButtonAsButtonProps = $props();
</script>

<ButtonDodoUi {...restProps} class={['ButtonDodoUi', className].join(' ')} />
