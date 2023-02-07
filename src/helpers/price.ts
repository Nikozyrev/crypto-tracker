export const priceFormatter = (currency: string) => Intl.NumberFormat('en', {
  style: "currency",
  currency: currency.toUpperCase(),
}).format;