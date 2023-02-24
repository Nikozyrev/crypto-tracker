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
  const maximumFractionDigits = options?.max;
  const notation = options?.notation ?? NOTATION.STANDARD;
  const compactDisplay = options?.compactDisplay ?? COMPACT_DISPLAY.SHORT;

  return (price: number) => {
    const maxFractionDigits = Math.max(
      pickMaxFractionDigits(price, maximumFractionDigits),
      minimumFractionDigits);
    try {
      const formatter = Intl.NumberFormat(window.navigator.language, {
        style: "currency",
        currency: currency.toUpperCase(),
        notation,
        compactDisplay,
        minimumFractionDigits,
        maximumFractionDigits: maxFractionDigits,
      });
      return formatter.format(price);
    } catch {
      return `${price.toLocaleString(window.navigator.language, {
        notation,
        compactDisplay,
        minimumFractionDigits,
        maximumFractionDigits: maxFractionDigits,
      })} ${currency.toLocaleUpperCase()}`;
    }
  }
}

export const numberFormatter = (number: number) => {
  const maximumFractionDigits = pickMaxFractionDigits(number);
  const formatter = Intl.NumberFormat(window.navigator.language, {
    maximumFractionDigits,
  });
  return formatter.format(number);
}

function pickMaxFractionDigits(num: number, max?: number) {
  let maxFractionDigits: number;
  switch (true) {
    case max !== undefined:
      maxFractionDigits = max!;
      break;
    case num >= 1000:
      maxFractionDigits = 0;
      break;
    case num >= 1:
      maxFractionDigits = 2;
      break;
    case num >= 0.1:
      maxFractionDigits = 3;
      break;
    case num >= 0.01:
      maxFractionDigits = 4;
      break;
    case num >= 0.001:
      maxFractionDigits = 5;
      break;
    case num >= 0.0001:
      maxFractionDigits = 6;
      break;
    case num >= 0.00001:
      maxFractionDigits = 7;
      break;
    case num >= 0.000001:
      maxFractionDigits = 8;
      break;
    case num >= 0.0000001:
      maxFractionDigits = 9;
      break;
    case num >= 0.00000001:
      maxFractionDigits = 10;
      break;
    case num >= 0.000000001:
      maxFractionDigits = 11;
      break;
    case num >= 0.0000000001:
      maxFractionDigits = 12;
      break;
    case num >= 0.00000000001:
      maxFractionDigits = 13;
      break;
    case num >= 0.000000000001:
      maxFractionDigits = 14;
      break;
    case num >= 0.0000000000001:
      maxFractionDigits = 15;
      break;
    default:
      maxFractionDigits = 20;
      break;
  }
  return maxFractionDigits;
}