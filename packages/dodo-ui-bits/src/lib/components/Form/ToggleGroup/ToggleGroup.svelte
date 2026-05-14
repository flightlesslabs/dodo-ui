<script lang="ts" module>
  export type ToggleGroupOption = {
    value: string;

    /** Simple label */
    label: string;

    /** Disable this option */
    disabled?: boolean;

    /** Props applied when NOT active */
    buttonProps?: Partial<ButtonAsButtonProps>;

    /** Props applied when active */
    activeButtonProps?: Partial<ButtonAsButtonProps>;
  };

  type ToggleGroupBaseProps = {
    /** Custom CSS class names */
    class?: string;

    /** Props applied when NOT active */
    buttonProps?: Partial<ButtonAsButtonProps>;

    /** Props applied when active */
    activeButtonProps?: Partial<ButtonAsButtonProps>;

    /** List of toggle buttons */
    options: ToggleGroupOption[];
  } & GroupProps;

  type WithoutChildren<T> = Omit<T, 'children'>;

  export type ToggleGroupSingleProps = WithoutChildren<SingleToggleGroupRootProps> &
    ToggleGroupBaseProps;

  export type ToggleGroupMultipleProps = WithoutChildren<MultipleToggleGroupRootProps> &
    ToggleGroupBaseProps;

  export type ToggleGroupProps = ToggleGroupSingleProps | ToggleGroupMultipleProps;
</script>

<script lang="ts">
  import { type MultipleToggleGroupRootProps, type SingleToggleGroupRootProps } from 'bits-ui';
  import ToggleGroupSingle from './ToggleGroupSingle.svelte';
  import ToggleGroupMultiple from './ToggleGroupMultiple.svelte';
  import { Group, type ButtonAsButtonProps, type GroupProps } from '@flightlesslabs/dodo-ui';
  import ToggleGroupItem from './ToggleGroupItem.svelte';

  let {
    class: className = '',
    type,
    value = $bindable(),
    ref = $bindable(null),
    fullWidth = false,
    attached = false,
    gap = 1,
    flex = false,
    outline = false,
    roundness = 1,
    options,
    buttonProps,
    activeButtonProps,
    disabled,
    ...restProps
  }: ToggleGroupProps = $props();

  /**
   * Computed class list
   */
  const classes = $derived(['dodo-ui-ToggleGroup', className].filter(Boolean));
</script>

{#snippet group()}
  <Group {fullWidth} {attached} {gap} {flex} {outline} {roundness} class="ToggleGroupModifiedGroup">
    {#each options as option (option.value)}
      <ToggleGroupItem
        {buttonProps}
        {activeButtonProps}
        {...option}
        {disabled}
        isActive={type === 'single' ? option.value === value : value?.includes(option.value)}
      />
    {/each}
  </Group>
{/snippet}

{#if type === 'single'}
  <ToggleGroupSingle
    {...restProps as ToggleGroupSingleProps}
    {disabled}
    {type}
    class={classes}
    bind:ref
    bind:value={value as string | undefined}
  >
    {@render group()}
  </ToggleGroupSingle>
{:else}
  <ToggleGroupMultiple
    {...restProps as ToggleGroupMultipleProps}
    {type}
    class={classes}
    bind:ref
    bind:value={value as string[] | undefined}
  >
    {@render group()}
  </ToggleGroupMultiple>
{/if}
