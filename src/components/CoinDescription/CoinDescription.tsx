import { FC } from 'react';
import { CURRENCIES } from '../../constants/currencies';
import { colorChanger } from '../../helpers/colorChanger';
import { priceFormatter } from '../../helpers/price';
import { ICoinDetailed } from '../../interfaces/coinDetailed';
import './CoinDescription.scss';

interface ICoinDetailedStatsProps {
  coin: ICoinDetailed;
}

export const CoinDescription: FC<ICoinDetailedStatsProps> = ({ coin }) => {
  return (
    <div className='coin-description-view'>
      <h2 className='coin-description__title'>
        {coin.name} (<span className='coin-symbol'>{coin.symbol}</span>) price
        has increased today.
      </h2>
      <p>
        The price of {coin.name} (
        <span className='coin-symbol'>{coin.symbol}</span>) is{' '}
        {priceFormatter(CURRENCIES.USD)(
          coin.market_data.current_price[CURRENCIES.USD]
        )}{' '}
        today with a 24-hour trading volume of{' '}
        {priceFormatter(CURRENCIES.USD)(
          coin.market_data.total_volume[CURRENCIES.USD]
        )}
        . This represents a{' '}
        <span
          style={{
            color: colorChanger(coin.market_data.price_change_percentage_24h),
          }}
        >
          {coin.market_data.price_change_percentage_24h.toFixed(2)}%
        </span>{' '}
        price increase in the last 24 hours and a{' '}
        <span
          style={{
            color: colorChanger(coin.market_data.price_change_percentage_7d),
          }}
        >
          {coin.market_data.price_change_percentage_7d.toFixed(2)}%
        </span>{' '}
        price increase in the past 7 days. With a circulating supply of 19
        Million BTC, Bitcoin is valued at a market cap of $481,152,627,744.
      </p>
      <h2 className='coin-description__title'>What is {coin.name}</h2>
      <p id='coin-history'>{coin.description['en']}</p>
    </div>
  );
};
