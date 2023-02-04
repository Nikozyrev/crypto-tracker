import { UTCTimestamp } from 'lightweight-charts';

export type ResponseLineData = [UTCTimestamp, number];
export type ResponseCandleData = [UTCTimestamp, number, number, number, number];

export interface ILineData {
  time: UTCTimestamp;
  value: number;
}

export interface ICandleData {
  time: UTCTimestamp,
  open: number,
  high: number,
  low: number,
  close: number,
}

export interface IMarketChartResponse {
  prices: ResponseLineData[],
  market_caps: ResponseLineData[],
  total_volumes: ResponseLineData[]
}

export interface IMarketChartData {
  prices: ILineData[],
  market_caps: ILineData[],
  total_volumes: ILineData[]
}

export interface IChartProps {
  colors?: {
    backgroundColor?: string,
    lineColor?: string,
    textColor?: string,
    areaTopColor?: string,
    areaBottomColor?: string,
  }
}

export interface ILineChartProps extends IChartProps {
  data: ILineData[],
}

export interface ICandleChartProps extends IChartProps {
  data: ICandleData[],
}