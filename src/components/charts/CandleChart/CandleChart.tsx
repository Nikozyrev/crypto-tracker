import { FC, useEffect, useRef } from "react";
import { createBaseChart } from "../../../helpers/chart";
import { useAppSelector } from "../../../hooks/redux";
import { ICandleChartProps } from "../../../interfaces/chart";

export const CandleChart: FC<ICandleChartProps> = props => {
  const {
    data,
    colors: {
      backgroundColor = 'white',
      textColor = 'black',
    } = {},
  } = props;
  const { currency } = useAppSelector(state => state.currency);
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
      const {chart, removeChart} = createBaseChart(chartContainerRef.current!, currency, backgroundColor, textColor);

      const newSeries = chart.addCandlestickSeries();
      newSeries.setData(data);

      return removeChart;
    },
    [data, backgroundColor, textColor]
  );

  return (
    <div
      ref={chartContainerRef}
    />
  );
};