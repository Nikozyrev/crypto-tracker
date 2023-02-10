import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CURRENCIES } from '../../constants/currencies';
import { marketDataCandleAdapter, marketDataLineAdapter } from '../../helpers/chart';
import { ICandleData, IMarketChartData, IMarketChartResponse, ResponseCandleData } from '../../interfaces/chart';
import { ICoin } from '../../interfaces/coin';
import { ICoinDetailed } from '../../interfaces/coinDetailed';
import { ICoinSearched } from '../../interfaces/coinSearched';
import { IGlobalData } from '../../interfaces/globalData';

interface IGetCoinsProps{
	currency: CURRENCIES,
	page: number
}

interface ICoinMarketChartProps {
  id: string;
  vs_currency: CURRENCIES;
  days: number | 'max';
}

export const coingeckoApi = createApi({
  reducerPath: 'coingecko/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.coingecko.com/api/v3'
  }),
  endpoints: build => ({
    getSupportedVsCurrencies: build.query<CURRENCIES[], void>({
      query: () => ({
        url: '/simple/supported_vs_currencies',
      })
    }),
    getGlobalData: build.query<IGlobalData, void>({
      query: () => ({
        url: '/global',
      }),
      transformResponse: (res: {data: IGlobalData}) => res.data 
    }),
    searchCoins: build.query<ICoinSearched[], string>({
      query: (query: string) => ({
        url: '/search',
        params: {
          query
        },
      }),
      transformResponse: (res: {coins: ICoinSearched[]}) => res.coins || [] 
    }),
    getCoins: build.query<ICoin[], IGetCoinsProps >({
      query: ({currency, page}: IGetCoinsProps) => ({
        url: '/coins/markets',
        params: {
          vs_currency: currency,
					price_change_percentage: '1h,24h,7d',
					page
        },
      })
    }),
    getCoin: build.query<ICoinDetailed, string>({
      query: (id: string) => ({
        url: `/coins/${id}`,
        params: {
          
        },
      })
    }),
    getCoinLineChart: build.query<IMarketChartData, ICoinMarketChartProps>({
      query: ({id, vs_currency, days}) => ({
        url: `/coins/${id}/market_chart`,
        params: {
          vs_currency,
          days,
        }
      }),
      transformResponse: (res: IMarketChartResponse) => ({
        prices: marketDataLineAdapter(res.prices),
        market_caps: marketDataLineAdapter(res.market_caps),
        total_volumes: marketDataLineAdapter(res.total_volumes),
      })
    }),
    getCoinCandleChart: build.query<ICandleData[], ICoinMarketChartProps>({
      query: ({id, vs_currency, days}) => ({
        url: `/coins/${id}/ohlc`,
        params: {
          vs_currency,
          days,
        }
      }),
      transformResponse: (res: ResponseCandleData[]) => marketDataCandleAdapter(res)
    })
  })
})

export const {
  useGetSupportedVsCurrenciesQuery,
  useGetGlobalDataQuery,
  useSearchCoinsQuery,
  useGetCoinsQuery,
  useGetCoinQuery,
  useLazyGetCoinLineChartQuery,
  useLazyGetCoinCandleChartQuery
} = coingeckoApi;
