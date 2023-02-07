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
  
  const changeDataPeriodHandler = (e: React.MouseEvent) => {
    const target = e.target as HTMLButtonElement;
    if (target.dataset.period) {
      const newPeriod = target.dataset.period === 'max' ? target.dataset.period : Number(target.dataset.period);
      setDataPeriod(newPeriod);
    }
  }
  
  return (
    <div className='chart'>
      <div className='chart__control'>
        <div className='chart__mode'>
          <button 
            className={`chart-control-btn ${chartMode === CHART_MODES.LINE ? '_active' : ''}`} 
            onClick={() => setChartMode(CHART_MODES.LINE)}
          >Line</button>
          <button
            className={`chart-control-btn ${chartMode === CHART_MODES.CANDLE ? '_active' : ''}`} 
            onClick={() => setChartMode(CHART_MODES.CANDLE)}
          >Candle</button>
        </div>
        <div className='chart__data'>
          <button
            className={`chart-control-btn ${dataMode === CHART_DATA_MODES.PRICE ? '_active' : ''}`}
            onClick={() => setDataMode(CHART_DATA_MODES.PRICE)}
          >Price</button>
          <button
            className={`chart-control-btn ${dataMode === CHART_DATA_MODES.MARKET_CAP ? '_active' : ''}`}
            disabled={chartMode === CHART_MODES.CANDLE}
            onClick={() => setDataMode(CHART_DATA_MODES.MARKET_CAP)}
          >Market Cap</button>
        </div>
        <div onClick={changeDataPeriodHandler} className='chart__period'>
          {CHART_PERIODS.map(el => 
            <button 
              className={`chart-control-btn ${dataPeriod === el.periodValue ? '_active' : ''}`}
              key={el.periodValue} 
              data-period={el.periodValue}
            >{el.periodName}</button>)
          }
        </div>
      </div>
      {
        isError && <div>Network Error. Try again.</div>
      }
      {
        isLoading && <div>Loading...</div>
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