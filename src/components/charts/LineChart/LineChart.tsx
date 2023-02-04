import { FC, useEffect, useRef } from "react";
import { createBaseChart } from "../../../helpers/chart";
import { useAppSelector } from "../../../hooks/redux";
import { ILineChartProps } from "../../../interfaces/chart";

export const LineChart: FC<ILineChartProps> = props => {
  const {
    data,
    colors: {
      backgroundColor = 'white',
      lineColor = '#2962FF',
      textColor = 'black',
      areaTopColor = '#2962FF',
      areaBottomColor = 'rgba(41, 98, 255, 0.28)',
    } = {},
  } = props;
  const { currency } = useAppSelector(state => state.currency);
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
      const {chart, removeChart} = createBaseChart(chartContainerRef.current!, currency, backgroundColor, textColor);

      const newSeries = chart.addAreaSeries({ lineColor, topColor: areaTopColor, bottomColor: areaBottomColor });
      newSeries.setData(data);

      return removeChart;
    },
    [data, backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor]
  );

  return (
    <div
      ref={chartContainerRef}
    />
  );
};