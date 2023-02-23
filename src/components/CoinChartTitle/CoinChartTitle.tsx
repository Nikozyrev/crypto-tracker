import { FC } from 'react';
import { useAppSelector } from '../../hooks/redux';
import { ICoinDetailed } from '../../interfaces/coinDetailed';
import './CoinChartTitle.scss';

interface ICoinDetailedStatsProps {
  coin: ICoinDetailed;
}

export const CoinChartTitle: FC<ICoinDetailedStatsProps> = ({ coin }) => {
  const { currency } = useAppSelector(state => state.currency);
  return (
    <div className='chart__title'>
      <h2 className='chart__name'>
        {coin.name} Price Chart{' '}
        <span className='currency-code'>({coin.symbol})</span>
      </h2>
      <div className='chart__date'>
        <div>
          <p>
            Last updated{' '}
            <span>
              {new Date(coin.last_updated).toLocaleTimeString('en-US')}
            </span>{' '}
            UTC. Currency in <span className='currency-code'>{currency}</span>.
          </p>
        </div>
      </div>
    </div>
  );
};
