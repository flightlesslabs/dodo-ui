<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Select, { type SelectOption } from '../Select.svelte';
  import { selectOptions, storySelectArgTypes } from '../Select.stories.svelte';
  import { Menu } from '$lib/index.js';
  import MenuItem from '$lib/stories/components/Layout/Menu/MenuItem/MenuItem.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: Select,
    tags: ['autodocs'],
    argTypes: storySelectArgTypes,
    parameters: {
      docs: {
        story: {
          height: '400px',
          inline: false,
        },
      },
    },
  });

  const options = selectOptions;

  let value = $state<SelectOption>(options[0]);
</script>

<!-- Format look and feel of input content.  -->
<Story name="CustomInput" asChild>
  <Select {options} {value} onselect={(val: SelectOption) => (value = val)}>
    {#snippet customInputContent(selectedOption)}
      {selectedOption.label} 💯💯💯
    {/snippet}
  </Select>
</Story>

<!-- Format look and feel of Popper menu item.  -->
<Story name="CustomMenuItem" asChild>
  <Select {options} {value} onselect={(val: SelectOption) => (value = val)}>
    {#snippet customMenuItemContent(selectedOption, selected)}
      {selected ? '✅' : ''} {selectedOption.label} 💯
    {/snippet}
  </Select>
</Story>

<!-- Format look and feel of Popper menu item Placeholder.  -->
<Story name="CustomMenuItemPlaceholder" asChild>
  <Select {options} {value} searchable onselect={(val: SelectOption) => (value = val)}>
    {#snippet customPlaceholderMenuItemContent()}
      🤚🤚🤚🤚 Nothing found....
    {/snippet}
  </Select>
</Story>

<!-- Format look and feel of Popup.  -->
<Story name="CustomPopup" asChild>
  <Select {options} {value}>
    {#snippet customPopupContent(options, selectedOption)}
      <Menu size="small" separator>
        {#each options as option (option.value)}
          <MenuItem
            type="button"
            disabled={option.disabled}
            selected={selectedOption.value === option.value}
          >
            <b>{option.label}</b>
          </MenuItem>
        {/each}
      </Menu>
    {/snippet}
  </Select>
</Story>

<!-- Format look and feel of Popup [Paper](?path=/docs/components-layout-paper--docs) -->
<Story
  name="PaperProps"
  args={{
    options,
    value,
    paperProps: {
      color: 'danger',
    },
  }}
/>

<!-- Format look and feel of [Popper](?path=/docs/developer-tools-components-popper--docs). We have incrased popupOffsetY in this example.   -->
<Story
  name="PopperProps"
  args={{
    options,
    value,
    popperProps: {
      popupOffsetY: 40,
    },
  }}
/>

<!-- Format look and feel of Popup [Menu](?path=/docs/components-layout-menu--docs)  -->
<Story
  name="MenuProps"
  args={{
    options,
    value,
    menuProps: {
      separator: true,
      size: 'large',
    },
  }}
/>

<!-- Format look and feel of Popup [MenuItem](?path=/docs/components-layout-menu-menuitem--docs)  -->
<Story
  name="MenuItemProps"
  args={{
    options,
    value,
    menuItemProps: {
      size: 'small',
      type: 'link',
      href: 'https://developer.mozilla.org/en-US/',
      target: '_blank',
    },
  }}
/>
