<script lang="ts" module>
  export type ModalAcceptButtonProps = ButtonProps & {
    /**
     * title for the modal.
     */
    title?: string;
  };
</script>

<script lang="ts">
  import { Button, type ButtonProps } from '@flightlesslabs/dodo-ui';

  let { class: className = '', title = 'Accept', ...restProps }: ModalAcceptButtonProps = $props();

  const classes = $derived(['dodo-ui-ModalAcceptButton', className].filter(Boolean));
</script>

<Button {...restProps} class={classes.join(' ')}>
  {title}
</Button>
