import { CircularProgress, ToggleButton, ToggleButtonGroup } from "@mui/material";
import TimelineIcon from '@mui/icons-material/Timeline';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import { useState } from "react";
import { CHART_DATA_MODES, CHART_MODES, CHART_PERIODS } from "../../../constants/chart";
import { pickLineChartColors } from "../../../helpers/chart";
import { useChartData } from "../../../hooks/useChartData";
import { ICandleData, ILineData } from "../../../interfaces/chart";
import { CandleChart } from "../CandleChart";
import { LineChart } from "../LineChart";
import './CoinChart.scss';

interface ICoinChartProps {
  id: string;
}

export const CoinChart = ({ id }: ICoinChartProps) => {
  const [chartMode, setChartMode] = useState<CHART_MODES>(CHART_MODES.LINE);
  const [dataMode, setDataMode] = useState<CHART_DATA_MODES>(CHART_DATA_MODES.PRICE);
  const [dataPeriod, setDataPeriod] = useState<number | 'max'>(1);
  const {data, isError, isLoading} = useChartData(id, chartMode, dataMode, dataPeriod);
  
  const handleChartMode = (
    event: React.MouseEvent<HTMLElement>, 
    value: CHART_MODES
  ) => {setChartMode(value)};

  const handleDataMode = (
    event: React.MouseEvent<HTMLElement>, 
    value: CHART_DATA_MODES
  ) => {setDataMode(value)};

  const handleDataPeriod = (
    event: React.MouseEvent<HTMLElement>, 
    value: number | 'max'
  ) => {setDataPeriod(value)};

  return (
    <div className='chart'>
      <div className='chart__control'>
        <div className="chart__control_group">
          <ToggleButtonGroup
            value={dataMode}
            exclusive
            onChange={handleDataMode}
            size='small'
          >
            <ToggleButton value={CHART_DATA_MODES.PRICE}>
              Price
            </ToggleButton>
            <ToggleButton value={CHART_DATA_MODES.MARKET_CAP} disabled={chartMode === CHART_MODES.CANDLE}>
              Market Cap
            </ToggleButton>
          </ToggleButtonGroup>
          <ToggleButtonGroup
            value={dataPeriod}
            exclusive
            onChange={handleDataPeriod}
            size='small'
          >
            {CHART_PERIODS.map(el => 
              <ToggleButton key={el.periodValue} value={el.periodValue}>{el.periodName}</ToggleButton>)}
          </ToggleButtonGroup>
        </div>
        <ToggleButtonGroup
            value={chartMode}
            exclusive
            onChange={handleChartMode}
            size='small'
          >
          <ToggleButton value={CHART_MODES.LINE}>
            <TimelineIcon/>
          </ToggleButton>
          <ToggleButton value={CHART_MODES.CANDLE}>
            <CandlestickChartIcon/>
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      {
        isError && <div>Network Error. Try again.</div>
      }
      {
        isLoading && <CircularProgress color="primary" />
      }
      { 
        (data && chartMode === CHART_MODES.LINE) 
        && <LineChart colors={pickLineChartColors(data as ILineData[])} data={data as ILineData[]}/> 
      }
      { 
        (data && chartMode === CHART_MODES.CANDLE) 
        && <CandleChart data={data as ICandleData[]}/> 
      }
    </div>
  );
}