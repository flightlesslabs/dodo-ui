<script lang="ts" module>
  export type SelectPopupProps = SelectContentProps &
    Omit<CardProps, 'children' | 'ref'> & {
      options?: SelectOption[];
      searchResultPlaceholder?: string;
    };
</script>

<script lang="ts">
  import { Combobox, type SelectContentProps } from 'bits-ui';
  import Icon from '@iconify/svelte';
  import type { SelectOption } from './Select.svelte';
  import type { ComponentSize } from '$lib/attributes/size.js';
  import type { CardProps } from '$lib/components/Layout/Card/Card.svelte';
  import { useThemeContext } from '$lib/components/Layout/Theme/ThemeSystem/context.js';

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
    ...restProps
  }: SelectPopupProps = $props();

  const themeContext = useThemeContext();
  const theme = $derived(cardTheme ? cardTheme : themeContext.theme);

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
      width ? `--SelectPopup-width: ${width}` : '',
      height ? `--SelectPopup-height: ${height}` : '',
      minHeight ? `--SelectPopup-min-height: ${minHeight}` : '',
      minWidth ? `--SelectPopup-min-width: ${minWidth}` : '',
      maxHeight ? `--SelectPopup-max-height: ${maxHeight}` : '',
      maxWidth ? `--SelectPopup-max-width: ${maxWidth}` : '',
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
      <Icon icon="icon-park-outline:double-up" />
    </Combobox.ScrollUpButton>
    <Combobox.Viewport>
      {#each options as option, i (i + option.value)}
        <Combobox.Item value={option.value} label={option.label}>
          {option.label}
        </Combobox.Item>
      {:else}
        <span>{searchResultPlaceholder}</span>
      {/each}
    </Combobox.Viewport>
    <Combobox.ScrollDownButton>
      <Icon icon="icon-park-outline:double-down" />
    </Combobox.ScrollDownButton>
  </Combobox.Content>
</Combobox.Portal>
