export const priceFormatter = (currency: string) => {
  try {
    return Intl.NumberFormat(window.navigator.language, {
        style: "currency",
        currency: currency.toUpperCase(),
      }).format;
  } catch {
    return (price: number) => 
    `${price.toLocaleString(window.navigator.language, {
        minimumFractionDigits: 2,
      })} ${currency.toLocaleUpperCase()}`;  
  }
}