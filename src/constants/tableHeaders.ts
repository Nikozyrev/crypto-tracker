export interface IHeader {
   text: string;
   id: string;
   class: string;
}

export const exchangesHeader = [
   { text: '#', id: 'trust_score_rank', class: '_s' },
   { text: 'Exchange', id: 'name', class: '_s' },
   { text: 'Trust Score', id: 'trust_score', class: '_s' },
   {
      text: '24h Volume (Normalized)',
      id: 'trade_volume_24h_btc_normalized',
      class: '_s',
   },
   { text: '24 Volume', id: 'trade_volume_24h_btc', class: '_s' },
   { text: 'Country', id: 'country', class: '_s' },
   { text: 'Year of foundation', id: 'year_established', class: '_s' },
];

export const coinsHeader = [
   { text: '', id: 'favourites', class: '' },
   { text: '#', id: 'market_cap_rank', class: '_s' },
   { text: 'Coin', id: 'name', class: '_s' },
   { text: 'Price', id: 'current_price', class: '_s' },
   { text: '1h', id: 'price_change_percentage_1h_in_currency', class: '_s' },
   {
      text: ' 24h',
      id: 'price_change_percentage_24h_in_currency',
      class: '_s',
   },
   { text: '7d', id: 'price_change_percentage_7d_in_currency', class: '_s' },
   { text: ' 24h Volume', id: 'total_volume', class: '_s' },
   { text: 'Mkt Cap', id: 'market_cap', class: '_s' },
   { text: 'Last 7 Days', id: 'graph', class: '' },
];
