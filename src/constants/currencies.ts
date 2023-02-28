export enum CURRENCIES {
  USD = 'usd',
  EUR = 'eur',
  BTC = 'btc',
}

export enum CURR_CATEGORIES {
  CRYPTO = 'Cryptocurrencies',
  BTC_UNITS = 'Bitcoin Units',
  POPULAR = 'Popular Currencies',
  FIAT = 'Fiat Currencies',
  COMMODITIES = 'Commodities'
}

export const CURR_DESCRIPTION: {
  [s: string]: {name: string, category: CURR_CATEGORIES}
} = {
  btc: {name: 'Bitcoin', category: CURR_CATEGORIES.POPULAR},
  eth: {name: 'Ethereum', category: CURR_CATEGORIES.POPULAR},
  ltc: {name: 'Litecoin', category: CURR_CATEGORIES.CRYPTO},
  bch: {name: 'Bitcoin Cash', category: CURR_CATEGORIES.CRYPTO},
  bnb: {name: 'Binance Coin', category: CURR_CATEGORIES.CRYPTO},
  eos: {name: 'EOS', category: CURR_CATEGORIES.CRYPTO},
  xrp: {name: 'XRP', category: CURR_CATEGORIES.CRYPTO},
  xlm: {name: 'Lumens', category: CURR_CATEGORIES.CRYPTO},
  link: {name: 'Chainlink', category: CURR_CATEGORIES.CRYPTO},
  dot: {name: 'Polkadot', category: CURR_CATEGORIES.CRYPTO},
  yfi: {name: 'Yearn Finance', category: CURR_CATEGORIES.CRYPTO},
  usd: {name: 'US Dollar', category: CURR_CATEGORIES.POPULAR},
  aed: {name: 'UAE Dirham', category: CURR_CATEGORIES.FIAT},
  ars: {name: 'Argentine Peso', category: CURR_CATEGORIES.FIAT},
  aud: {name: 'Australian Dollar', category: CURR_CATEGORIES.FIAT},
  bdt: {name: 'Bangladeshi Taka', category: CURR_CATEGORIES.FIAT},
  bhd: {name: 'Bahraini Dinar', category: CURR_CATEGORIES.FIAT},
  bmd: {name: 'Bermudian Dollar', category: CURR_CATEGORIES.FIAT},
  brl: {name: 'Brazil Real', category: CURR_CATEGORIES.FIAT},
  cad: {name: 'Canadian Dollar', category: CURR_CATEGORIES.FIAT},
  chf: {name: 'Swiss Frank', category: CURR_CATEGORIES.FIAT},
  clp: {name: 'Chilean Peso', category: CURR_CATEGORIES.FIAT},
  cny: {name: 'Chinese Yuan', category: CURR_CATEGORIES.FIAT},
  czk: {name: 'Czech Koruna', category: CURR_CATEGORIES.FIAT},
  dkk: {name: 'Danish Krone', category: CURR_CATEGORIES.FIAT},
  eur: {name: 'Euro', category: CURR_CATEGORIES.POPULAR},
  gbp: {name: 'British Pound Sterling', category: CURR_CATEGORIES.POPULAR},
  hkd: {name: 'Hong Kong Dollar', category: CURR_CATEGORIES.FIAT},
  huf: {name: 'Hungarian Forint', category: CURR_CATEGORIES.FIAT},
  idr: {name: 'Indonesian Rupiah', category: CURR_CATEGORIES.FIAT},
  ils: {name: 'Israeli New Shekel', category: CURR_CATEGORIES.FIAT},
  inr: {name: 'Indian Rupee', category: CURR_CATEGORIES.FIAT},
  jpy: {name: 'Japanese Yen', category: CURR_CATEGORIES.FIAT},
  krw: {name: 'South Korean Won', category: CURR_CATEGORIES.FIAT},
  kwd: {name: 'Kuwaiti Dinar', category: CURR_CATEGORIES.FIAT},
  lkr: {name: 'Sri Lankan Rupee', category: CURR_CATEGORIES.FIAT},
  mmk: {name: 'Burmese Kyat', category: CURR_CATEGORIES.FIAT},
  mxn: {name: 'Mexican Peso', category: CURR_CATEGORIES.FIAT},
  myr: {name: 'Malaysian Ringgit', category: CURR_CATEGORIES.FIAT},
  ngn: {name: 'Nigerian Naira', category: CURR_CATEGORIES.FIAT},
  nok: {name: 'Norwegian Krone', category: CURR_CATEGORIES.FIAT},
  nzd: {name: 'New Zealand Dollar', category: CURR_CATEGORIES.FIAT},
  php: {name: 'Philippine Peso', category: CURR_CATEGORIES.FIAT},
  pkr: {name: 'Pakistani Rupee', category: CURR_CATEGORIES.FIAT},
  pln: {name: 'Polish Zloty', category: CURR_CATEGORIES.FIAT},
  rub: {name: 'Russian Ruble', category: CURR_CATEGORIES.POPULAR},
  sar: {name: 'Saudi Riyal', category: CURR_CATEGORIES.FIAT},
  sek: {name: 'Swedish Krona', category: CURR_CATEGORIES.FIAT},
  sgd: {name: 'Singapore Dollar', category: CURR_CATEGORIES.FIAT},
  thb: {name: 'Thai Baht', category: CURR_CATEGORIES.FIAT},
  try: {name: 'Turkish Lira', category: CURR_CATEGORIES.FIAT},
  twd: {name: 'New Taiwan Dollar', category: CURR_CATEGORIES.FIAT},
  uah: {name: 'Ukrainian hryvnia', category: CURR_CATEGORIES.FIAT},
  vef: {name: 'Venezuelan bolívar fuerte', category: CURR_CATEGORIES.FIAT},
  vnd: {name: 'Vietnamese đồng', category: CURR_CATEGORIES.FIAT},
  zar: {name: 'South African Rand', category: CURR_CATEGORIES.FIAT},
  xdr: {name: 'IMF Special Drawing Rights', category: CURR_CATEGORIES.FIAT},
  xag: {name: 'Silver - Troy Ounce', category: CURR_CATEGORIES.COMMODITIES},
  xau: {name: 'Gold - Troy Ounce', category: CURR_CATEGORIES.COMMODITIES},
  bits: {name: 'Bits', category: CURR_CATEGORIES.BTC_UNITS},
  sats: {name: 'Satoshi', category: CURR_CATEGORIES.BTC_UNITS},
}