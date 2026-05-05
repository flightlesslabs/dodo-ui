<script lang="ts" module>
  export type ModalManagerProps = {
    /** Optional unique ID, for multiple ModalManager */
    id?: string;
  };
</script>

<script lang="ts">
  import { modals } from './store/modals.svelte.ts';

  let { id }: ModalManagerProps = $props();

  $effect(() => {
    if (id) {
      modals.addModalManagerId(id);
    }

    return () => {
      if (id) {
        modals.removeModalManagerId(id);
      }
    };
  });
</script>
