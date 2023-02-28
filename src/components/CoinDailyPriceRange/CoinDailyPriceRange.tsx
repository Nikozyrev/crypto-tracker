import { FC } from 'react';
import { priceFormatter } from '../../helpers/price';
import { useAppSelector } from '../../hooks/redux';
import { ICoinDetailed } from '../../interfaces/coinDetailed';
import './CoinDailyPriceRange.scss';

interface ICoinMainStatsProps {
  coin: ICoinDetailed;
}

export const CoinDailyPriceRange: FC<ICoinMainStatsProps> = ({ coin }) => {
  const { currency } = useAppSelector(state => state.currency);
  const lowPrice = coin.market_data.low_24h[currency];
  const highPrice = coin.market_data.high_24h[currency];
  const currentPrice = coin.market_data.current_price[currency];
  const maxWidth = highPrice - lowPrice;
  const currentWidth = currentPrice - lowPrice;
  const rangeWidth = `${currentWidth / maxWidth * 100}%`;

  return (
    <div className="coin-24h-range">
      <div className='range-outer'>
        <div className='range-inner' style={{width: rangeWidth}}></div>
      </div>
      <div className='range-text'>
        <span>{priceFormatter(currency)(lowPrice)}</span>
        <span>24H Range</span>
        <span>{priceFormatter(currency)(highPrice)}</span>
      </div>
    </div>
  );
}
