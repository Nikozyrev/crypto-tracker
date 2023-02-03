import { UTCTimestamp } from "lightweight-charts";
import { ResponseCandleData, ResponseLineData } from "../interfaces/chart";

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