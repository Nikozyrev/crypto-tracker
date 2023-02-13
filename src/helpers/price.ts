export const priceFormatter = (currency: string) => {
  try {
    return Intl.NumberFormat(window.navigator.language, {
        style: "currency",
        currency: currency.toUpperCase(),
        minimumFractionDigits: 0,
        maximumFractionDigits: 8
      }).format;
  } catch {
    return (price: number) => 
    `${price.toLocaleString(window.navigator.language, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 8
      })} ${currency.toLocaleUpperCase()}`;  
  }
}