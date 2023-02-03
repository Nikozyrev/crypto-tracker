import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CURRENCIES } from '../../constants/currencies';
import { marketDataCandleAdapter, marketDataLineAdapter } from '../../helpers/chart';
import { ICandleData, IMarketChartData, IMarketChartResponse, ResponseCandleData } from '../../interfaces/chart';
import { ICoin } from '../../interfaces/coin';

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
    getCoins: build.query<ICoin[], string>({
      query: (currency: CURRENCIES) => ({
        url: '/coins/markets',
        params: {
          vs_currency: currency
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

export const { useGetCoinsQuery } = coingeckoApi;