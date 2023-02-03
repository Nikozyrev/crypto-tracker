import { ColorType, createChart, UTCTimestamp } from "lightweight-charts";
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

export const createBaseChart = (target: HTMLElement, backgroundColor: string, textColor: string) => {
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

	window.addEventListener('resize', handleResize);

	return {
		chart,
		removeChart: () => {
			window.removeEventListener('resize', handleResize);

			chart.remove();
		}
	};
}