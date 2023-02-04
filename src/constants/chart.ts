export enum CHART_MODES {
  LINE = 'line',
  CANDLE = 'candle'
}

export enum CHART_DATA_MODES {
  PRICE = 'price',
  MARKET_CAP = 'market-cap'
}

export const CHART_PERIODS = [
	{periodName: '24h', periodValue: 1},
	{periodName: '7d', periodValue: 7},
	{periodName: '14d', periodValue: 14},
	{periodName: '30d', periodValue: 30},
	{periodName: '90d', periodValue: 90},
	{periodName: '180d', periodValue: 180},
	{periodName: '1y', periodValue: 365},
	{periodName: 'Max', periodValue: 'max'},
] as const;

export const GREEN_CHART = {
  lineColor: 'rgb(0, 164, 0)',
  areaTopColor: 'rgb(0, 164, 0)',
  areaBottomColor: 'rgba(0, 164, 0, 0.3)'
}

export const RED_CHART = {
  lineColor: 'rgb(236, 16, 16)',
  areaTopColor: 'rgb(236, 16, 16)',
  areaBottomColor: 'rgba(236, 16, 16, 0.3)'
}

export const GRAY_CHART = {
  lineColor: 'rgb(113, 113, 113)',
  areaTopColor: 'rgb(113, 113, 113)',
  areaBottomColor: 'rgba(113, 113, 113, 0.3)'
}