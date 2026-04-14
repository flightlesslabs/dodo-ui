<script lang="ts" module>
  type BaseOptions = Intl.NumberFormatOptions;

  export type FormattedNumberOptions =
    | (BaseOptions & { style?: 'decimal' })
    | (BaseOptions & { style: 'percent' })
    | (BaseOptions & { style: 'currency'; currency: string })
    | (BaseOptions & { style: 'unit'; unit: string });

  export interface FormattedNumberProps {
    /**
     * BCP 47 locale used for number formatting.
     *
     * Controls grouping, decimal separators, and currency formatting rules.
     *
     * @example "en-US", "en-IN", "fr-FR"
     * @default "en-US"
     */
    locale?: string;

    /**
     * Options passed directly to `Intl.NumberFormat`.
     *
     * Supports all formatting styles:
     * - decimal (default)
     * - currency (requires `currency`)
     * - percent
     * - unit (requires `unit`)
     *
     * @example
     * { style: "currency", currency: "USD" }
     * { style: "percent" }
     * { style: "unit", unit: "kilometer" }
     */
    options?: FormattedNumberOptions;

    /**
     * The numeric value to format.
     *
     * If `null` or `undefined`, nothing will be rendered.
     */
    value?: number | null;
  }
</script>

<script lang="ts">
  let { locale = 'en-US', options, value }: FormattedNumberProps = $props();

  /**
   * Memoized Intl.NumberFormat instance.
   * Recomputes when locale or options change.
   */
  let formatter = $derived(new Intl.NumberFormat(locale, options));
</script>

{#if value !== null && value !== undefined}
  {formatter.format(value)}
{/if}
