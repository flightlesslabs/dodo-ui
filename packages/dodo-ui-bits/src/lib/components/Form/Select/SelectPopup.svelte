<script lang="ts" module>
  export type SelectPopupCustomListItemContentContext = {
    option: SelectOption;
    selectedValue: string | undefined;
  };

  export type SelectPopupProps = SelectContentProps &
    Omit<CardProps, 'children' | 'ref'> & {
      options?: SelectOption[];
      searchResultPlaceholder?: string;
      customListItemContent?: Snippet<[SelectPopupCustomListItemContentContext]>;
      selectedValue?: string | undefined;
    };
</script>

<script lang="ts">
  import { Combobox, type SelectContentProps } from 'bits-ui';
  import type { SelectOption } from './Select.svelte';
  import { useThemeStore, type CardProps } from '@flightlesslabs/dodo-ui';
  import type { Snippet } from 'svelte';

  let {
    options = [],
    shadow = 2,
    roundness = 1,
    class: className,
    outline = false,
    width,
    height,
    'min-height': minHeight,
    'min-width': minWidth,
    'max-height': maxHeight,
    'max-width': maxWidth,
    color = 'default',
    variant = 'text',
    active = false,
    sideOffset = 10,
    align = 'start',
    searchResultPlaceholder = 'No results found, try again.',
    theme: cardTheme,
    customListItemContent,
    selectedValue,
    ...restProps
  }: SelectPopupProps = $props();

  const theme = $derived(cardTheme || useThemeStore.theme);

  const popupClasses = $derived(
    [
      'dodo-ui-Card',
      'SelectPopup',
      `color--${color}`,
      `variant--${variant}`,
      `roundness--${roundness}`,
      `dodo-shadow-${shadow}`,
      outline && 'outline',
      active && 'active',
      theme ? `dodo-theme--${theme}` : '',
      className,
    ].filter(Boolean),
  );

  const popupInlineStyles = $derived(
    [
      width ? `--select-popup-width: ${width}` : '',
      height ? `--select-popup-height: ${height}` : '',
      minHeight ? `--select-popup-min-height: ${minHeight}` : '',
      minWidth ? `--select-popup-min-width: ${minWidth}` : '',
      maxHeight ? `--select-popup-max-height: ${maxHeight}` : '',
      maxWidth ? `--select-popup-max-width: ${maxWidth}` : '',
    ].filter(Boolean),
  );
</script>

<Combobox.Portal>
  <Combobox.Content
    {...restProps}
    {sideOffset}
    {align}
    style={popupInlineStyles.join(';')}
    class={popupClasses.join(' ')}
  >
    <Combobox.ScrollUpButton>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
        <path d="M0 0h48v48H0z" fill="none" />
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="4"
          d="m12 24l12-12l12 12M12 36l12-12l12 12"
        />
      </svg>
    </Combobox.ScrollUpButton>
    <Combobox.Viewport>
      {#each options as option, i (i + option.value)}
        <Combobox.Item value={option.value} label={option.label}>
          {#if customListItemContent}
            {@render customListItemContent?.({ option, selectedValue })}
          {:else}
            {option.label}
          {/if}
        </Combobox.Item>
      {:else}
        <div class="NoResults">{searchResultPlaceholder}</div>
      {/each}
    </Combobox.Viewport>
    <Combobox.ScrollDownButton>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
        <path d="M0 0h48v48H0z" fill="none" />
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="4"
          d="M36 12L24 24L12 12m24 12L24 36L12 24"
        />
      </svg>
    </Combobox.ScrollDownButton>
  </Combobox.Content>
</Combobox.Portal>
