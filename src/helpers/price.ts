export const priceFormatter = (currency: string) => Intl.NumberFormat(window.navigator.languages[0], {
  style: "currency",
  currency: currency.toUpperCase(),
}).format;