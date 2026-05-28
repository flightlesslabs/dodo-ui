<script lang="ts">
  import { Card, Column, Grid, Money, Theme, Threshold } from '@flightlesslabs/dodo-ui';
  import { ToggleGroup, type ToggleGroupOption } from '@flightlesslabs/dodo-ui-bits';
  import { NumericInput } from '@flightlesslabs/dodo-ui-numeric';
  import { NumberFormatStyle } from 'svelte-number-format';
  import type { CurrencyCode } from '@flightlesslabs/currency';

  type CurrencyItem = {
    locale: string;
    currency: CurrencyCode;
  };

  const currencyList: CurrencyItem[] = [
    {
      locale: 'en-US',
      currency: 'USD',
    },
    {
      locale: 'en-IN',
      currency: 'INR',
    },
    {
      locale: 'en-US',
      currency: 'EUR',
    },
  ];

  const groupOptions: ToggleGroupOption[] = currencyList.map((item) =>
    Object.assign({ label: item.currency, value: item.currency }),
  );

  let currencyOptionValue = $state(groupOptions[0].value);
  let currencyItem = $derived<CurrencyItem>(
    currencyList.find((item) => item.currency === currencyOptionValue) || currencyList[0],
  );

  let amount = $state(2000);
</script>

<Theme type="dark">
  <Card class="CurruncyCard ShowcaseItem" color="secondary">
    <Grid gap={2}>
      <Column>
        <ToggleGroup
          type="single"
          options={groupOptions}
          bind:value={currencyOptionValue}
          attached
          fullWidth
          flex
          buttonProps={{
            color: 'secondary',
            size: 'small',
          }}
          inactiveButtonProps={{
            outline: true,
          }}
        />
      </Column>
      <Column>
        <NumericInput
          placeholder="Enter amount…"
          locale={currencyItem.locale}
          size="small"
          bind:value={amount}
          options={{
            currency: currencyItem.currency,
            precision: 2,
            formatStyle: NumberFormatStyle.Currency,
          }}
        />
      </Column>
      <Column>
        <h3>
          <Threshold value={amount} threshold={0}>
            <Money value={amount} currency={currencyItem.currency} locale={currencyItem.locale} />
          </Threshold>
        </h3>
      </Column>
    </Grid>
  </Card>
</Theme>

<style lang="scss">
  :global(.CurruncyCard) {
    width: 316px;
    padding: calc(var(--dodo-ui-space) * 2);
    margin-top: 80px;
    display: none;

    @media (min-width: 800px) {
      display: block;
    }
  }

  h3 {
    margin: 0;
    font-size: 1.6rem;
  }
</style>
