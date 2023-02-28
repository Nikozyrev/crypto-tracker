import { ColorType, createChart, UTCTimestamp } from "lightweight-charts";
import { COLORS, GRAY_CHART, GREEN_CHART, RED_CHART } from "../constants/chart";
import { useAppSelector } from "../hooks/redux";
import { ILineData, ResponseCandleData, ResponseLineData } from "../interfaces/chart";
import { priceFormatter } from "./price";

export const marketDataLineAdapter = (data: ResponseLineData[]) => data.map(el => ({
  time: el[0] / 1000 as UTCTimestamp,
  value: el[1]
}))

export const marketDataCandleAdapter = (data: ResponseCandleData[]) => data.map(el => ({
  time: el[0] / 1000 as UTCTimestamp,
  open: el[1],
  high: el[2],
  low: el[3],
  close: el[4],
}))

export const createBaseChart = (target: HTMLElement, currency: string, backgroundColor: string, textColor: string) => {  
  const handleResize = () => {
    chart.applyOptions({ width: target.clientWidth });
  };

  const chart = createChart(target, {
    layout: {
      background: { type: ColorType.Solid, color: backgroundColor },
      textColor,
    },
    width: target.clientWidth,
    height: 300,
  });
  chart.timeScale().fitContent();
  chart.timeScale().applyOptions({
    fixLeftEdge: true,
    fixRightEdge: true,
    timeVisible: true
  })

  chart.applyOptions({
    localization: {
      priceFormatter: priceFormatter(currency),
    },
  });

  window.addEventListener('resize', handleResize);

  return {
    chart,
    removeChart: () => {
      window.removeEventListener('resize', handleResize);

      chart.remove();
    }
  };
}

export const pickLineChartColors = (data: ILineData[]) => {
  const openPrice = data[0].value;
  const closePrice = data[data.length - 1].value;
  switch (true) {
    case openPrice < closePrice:
      return GREEN_CHART;
    case openPrice > closePrice:
      return RED_CHART;
    case openPrice === closePrice:
      return GRAY_CHART;
    default:
      return {};
  }
}

export const pickSparkLineColors = (data: number[]) => {
  const openPrice = data[0];
  const closePrice = data[data.length - 1];
  switch (true) {
    case openPrice < closePrice:
      return COLORS.GREEN;
    case openPrice > closePrice:
      return COLORS.RED;
    case openPrice === closePrice:
      return COLORS.GRAY;
    default:
      return;
  }
}