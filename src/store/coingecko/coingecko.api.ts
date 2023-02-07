import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CURRENCIES } from '../../constants/currencies';
import { ICoin } from '../../interfaces/coin';
import { IExchange } from '../../interfaces/exchanges';

export const coingeckoApi = createApi({
  reducerPath: 'coingecko/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.coingecko.com/api/v3'
  }),
  endpoints: build => ({
    getCoins: build.query<ICoin[], string>({
      query: (currency: CURRENCIES) => ({
        url: '/coins/markets',
        params: {
          vs_currency: currency
        },
      })
    }),
		getExchanges: build.query<IExchange[], void>({
      query: () => ({
        url: '/exchanges',
      })
    })
  })
})

export const { useGetCoinsQuery, useGetExchangesQuery } = coingeckoApi;