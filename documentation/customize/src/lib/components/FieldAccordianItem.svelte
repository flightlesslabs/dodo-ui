<script lang="ts">
  import { UtilityButton } from '@flightlesslabs/dodo-ui';
  import {
    AccordionItem,
    AccordionTrigger,
    type AccordionItemProps,
  } from '@flightlesslabs/dodo-ui-bits';
  import Icon from '@iconify/svelte';

  let { class: className = '', title, children, ...restProps }: AccordionItemProps = $props();
</script>

<AccordionItem {...restProps} class={`FieldAccordian ${className}`}>
  {#snippet customHeaderContent()}
    <AccordionTrigger>
      <UtilityButton compact class="TriggerArrowButton">
        <Icon icon="material-symbols:arrow-drop-down-rounded" width="24" height="24" />
      </UtilityButton>

      {title}
    </AccordionTrigger>
  {/snippet}

  {@render children?.()}
</AccordionItem>

<style lang="scss">
  :global(.FieldAccordian .dodo-ui-AccordionTrigger) {
    display: flex;
    align-items: center;
  }

  :global(.FieldAccordian .TriggerArrowButton) {
    margin-right: 6px;
  }
</style>
