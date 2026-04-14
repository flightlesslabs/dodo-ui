<script lang="ts" module>
  import type { CurrencyCode } from '@flightlesslabs/currency';

  type BaseOptions = Intl.NumberFormatOptions;

  export type MoneyOptions = Omit<BaseOptions, 'style' | 'currency'>;

  export interface MoneyProps {
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
     * ISO currency code.
     *
     * Determines which currency is used for formatting.
     *
     * @example "USD", "INR", "EUR"
     */
    currency: CurrencyCode;

    /**
     * Additional formatting options passed to `Intl.NumberFormat`.
     *
     * ⚠️ Note:
     * - `style` is always `"currency"` and cannot be overridden
     * - `currency` is controlled via the `currency` prop
     *
     * ✅ Allowed examples:
     * ```ts
     * { minimumFractionDigits: 2 }
     * { maximumFractionDigits: 0 }
     * ```
     *
     * ❌ Not allowed:
     * ```ts
     * { style: "percent" }
     * { currency: "USD" }
     * ```
     */
    options?: MoneyOptions;

    /**
     * Numeric value to format.
     *
     * If `null` or `undefined`, nothing is rendered.
     *
     * @example 1000 → "$1,000.00"
     */
    value?: number | null;
  }
</script>

<script lang="ts">
  import FormattedNumber from '../FormattedNumber/FormattedNumber.svelte';

  let { locale = 'en-US', currency, options, value }: MoneyProps = $props();
</script>

<FormattedNumber
  {value}
  {locale}
  options={{
    style: 'currency',
    currency,
    ...options,
  }}
/>
