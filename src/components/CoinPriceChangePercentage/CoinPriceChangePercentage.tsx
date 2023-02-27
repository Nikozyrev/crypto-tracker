import { FC } from 'react';
import { colorChanger } from '../../helpers/colorChanger';
import { useAppSelector } from '../../hooks/redux';
import { ICoinDetailed } from '../../interfaces/coinDetailed';
import './CoinPriceChangePercentage.scss';

interface ICoinDetailedStatsProps {
  coin: ICoinDetailed;
}

export const CoinPriceChangePercentage: FC<ICoinDetailedStatsProps> = ({
  coin,
}) => {
  const { currency } = useAppSelector(state => state.currency);

  return (
    <div className='coin-price-change-percentage'>
      <div className='price-change price-change-times'>
        <div>1h</div>
        <div>24h</div>
        <div>7d</div>
        <div>14d</div>
        <div>30d</div>
        <div>1y</div>
      </div>
      <div className='price-change price-change-percentage'>
        <div>
          <span
            style={{
              color: colorChanger(
                coin.market_data.price_change_percentage_1h_in_currency[
                  currency
                ]
              ),
            }}
          >
            {coin.market_data.price_change_percentage_1h_in_currency[
              currency
            ].toFixed(1)}
            %
          </span>
        </div>
        <div>
          <span
            style={{
              color: colorChanger(coin.market_data.price_change_percentage_24h_in_currency[currency]),
            }}
          >
            {coin.market_data.price_change_percentage_24h_in_currency[currency].toFixed(1)}%
          </span>
        </div>
        <div>
          <span
            style={{
              color: colorChanger(coin.market_data.price_change_percentage_7d_in_currency[currency]),
            }}
          >
            {coin.market_data.price_change_percentage_7d_in_currency[currency].toFixed(1)}%
          </span>
        </div>
        <div>
          <span
            style={{
              color: colorChanger(coin.market_data.price_change_percentage_14d_in_currency[currency]),
            }}
          >
            {coin.market_data.price_change_percentage_14d_in_currency[currency].toFixed(1)}%
          </span>
        </div>
        <div>
          <span
            style={{
              color: colorChanger(coin.market_data.price_change_percentage_30d_in_currency[currency]),
            }}
          >
            {coin.market_data.price_change_percentage_30d_in_currency[currency].toFixed(1)}%
          </span>
        </div>
        <div>
          <span
            style={{
              color: colorChanger(coin.market_data.price_change_percentage_1y_in_currency[currency]),
            }}
          >
            {coin.market_data.price_change_percentage_1y_in_currency[currency].toFixed(1)}%
          </span>
        </div>
      </div>
    </div>
  );
};
