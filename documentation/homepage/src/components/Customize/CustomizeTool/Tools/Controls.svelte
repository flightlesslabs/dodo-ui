<script lang="ts">
  import hljs from 'highlight.js';
  import 'highlight.js/styles/github.css';
  import { Button, Column, Grid } from '@flightlesslabs/dodo-ui';
  import { downloadTextFile } from '../../../../helpers/downloadTextFile';
  import { useCustomizeStore } from '../customize.svelte';

  let fileName = 'dodo-ui-customized';

  let code = $derived(
    `

import '@flightlesslabs/dodo-ui/.../global.css';

// Import the css file
// right after dodo-ui global.css to override it

import './${fileName}.${useCustomizeStore.fileExtension}'
	`.trim(),
  );

  const highlighted = $derived(
    hljs.highlight(code, {
      language: 'javascript',
    }).value,
  );
</script>

<div class="Controls">
  <Grid gap={2}>
    <Column>
      <Button
        onclick={() =>
          downloadTextFile(useCustomizeStore.cssVariables, {
            fileName: fileName,
            extension: useCustomizeStore.fileExtension,
            mimeType: 'text/css',
          })}
      >
        Download
      </Button>
    </Column>
    <Column>
      <pre>
        <!-- eslint-disable-next-line svelte/no-at-html-tags -->
          <code>{@html highlighted}</code>
      </pre>
    </Column>

    <Column>
      <Button variant="text" onclick={() => useCustomizeStore.resetDefaults()}>Reset</Button>
    </Column>
  </Grid>
</div>

<style lang="scss">
  pre {
    background: var(--dodo-color-neutral-100);
    padding: 1rem;
    border-radius: 8px;
    overflow-x: auto;
    white-space: pre-line;
    margin-top: 0;
  }
</style>
