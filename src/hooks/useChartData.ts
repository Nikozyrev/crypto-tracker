import { useEffect } from "react";
import { CHART_DATA_MODES, CHART_MODES } from "../constants/chart";
import { useLazyGetCoinCandleChartQuery, useLazyGetCoinLineChartQuery } from "../store/coingecko/coingecko.api";
import { useAppSelector } from "./redux";

export const useChartData = (id: string, chartMode: CHART_MODES, dataMode: CHART_DATA_MODES, dataPeriod: number | 'max') => {
  const { currency } = useAppSelector(state => state.currency);
  const fetchProps = {id, vs_currency: currency, days: dataPeriod};
  const [fetchLineChart, {isError: isLineDataError, isFetching: isLineDataLoading, data: lineData}] = useLazyGetCoinLineChartQuery();
  const [fetchCandleChart, {isError: isCandleDataError, isFetching: isCandleDataLoading, data: candleData}] = useLazyGetCoinCandleChartQuery();

  useEffect(() => {
    if (chartMode === CHART_MODES.LINE) {
      fetchLineChart(fetchProps, true);
    }
    if (chartMode === CHART_MODES.CANDLE) {
      fetchCandleChart(fetchProps, true);
    }
  }, [id, currency, chartMode, dataPeriod])

  if (chartMode === CHART_MODES.LINE) {
    if (dataMode === CHART_DATA_MODES.PRICE) {
      return { data: lineData?.prices, isError: isLineDataError, isLoading: isLineDataLoading };
    }
    if (dataMode === CHART_DATA_MODES.MARKET_CAP) {
      return { data: lineData?.market_caps, isError: isLineDataError, isLoading: isLineDataLoading };
    }
  }
  if (chartMode === CHART_MODES.CANDLE) {
    return { data: candleData, isError: isCandleDataError, isLoading: isCandleDataLoading };
  }
  return { data: undefined, isError: true, isLoading: false };
}