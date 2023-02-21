export enum NOTATION {
  STANDARD = "standard",
  SCIENTIFIC = "scientific",
  ENGINEERING = "engineering",
  COMPACT = "compact",
}

export enum COMPACT_DISPLAY {
  LONG = 'long',
  SHORT = 'short',
}

interface IPriceFormatterOptions {
  min?: number,
  max?: number,
  notation?: NOTATION,
  compactDisplay?: COMPACT_DISPLAY,
}

export const priceFormatter = (
  currency: string, 
  options?: IPriceFormatterOptions
) => {
  const minimumFractionDigits = options?.min ?? 0;
  const maximumFractionDigits = options?.max ?? 8;
  const notation = options?.notation ?? NOTATION.STANDARD;
  const compactDisplay = options?.compactDisplay ?? COMPACT_DISPLAY.SHORT;

  try {
    return Intl.NumberFormat(window.navigator.language, {
        style: "currency",
        currency: currency.toUpperCase(),
        notation,
        compactDisplay,
        minimumFractionDigits,
        maximumFractionDigits,
      }).format;
  } catch {
    return (price: number) => 
    `${price.toLocaleString(window.navigator.language, {
      notation,
      compactDisplay,
      minimumFractionDigits,
      maximumFractionDigits,
    })} ${currency.toLocaleUpperCase()}`;  
  }
}

export const numberFormatter = (
  number: number
) => Intl.NumberFormat(window.navigator.language).format(number);