import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CURRENCIES } from '../../constants/currencies';
import { ICoin } from '../../interfaces/coin';


interface IGetCoinsProps{
	currency: CURRENCIES,
	page: number
}

export const coingeckoApi = createApi({
  reducerPath: 'coingecko/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.coingecko.com/api/v3'
  }),
  endpoints: build => ({
    getCoins: build.query<ICoin[], IGetCoinsProps >({
      query: ({currency, page}: IGetCoinsProps) => ({
        url: '/coins/markets',
        params: {
          vs_currency: currency,
					price_change_percentage: '1h,24h,7d',
					page
        },
      })
    })
  })
})

export const { useGetCoinsQuery } = coingeckoApi;