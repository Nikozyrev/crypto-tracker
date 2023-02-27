import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import { FC } from 'react';
import { colorChanger } from '../../helpers/colorChanger';
import { CURRENCIES } from "../../constants/currencies";
import { numberFormatter, priceFormatter } from "../../helpers/price";
import { useAppSelector } from "../../hooks/redux";
import { ICoinDetailed } from "../../interfaces/coinDetailed";
import { CoinDailyPriceRange } from "../CoinDailyPriceRange";
import "./CoinMainStats.scss";


interface ICoinMainStatsProps {
  coin: ICoinDetailed;
}

export const CoinMainStats: FC<ICoinMainStatsProps> = ({ coin }) => {
  const { currency } = useAppSelector(state => state.currency);

  return (
    <div className='coin-main-stats'>
      <div className='coin-rank'>Rank #{coin.market_cap_rank}</div>
      <div className='coin-name-container'>
        <img src={coin.image.thumb} alt='coin' />
        <span className='coin-name'>{coin.name}</span>
        <span>{coin.symbol.toUpperCase()}</span>
      </div>
      <div className='coin-price-container'>
        <span className='coin-price in-currency'>
          {priceFormatter(currency)(coin.market_data.current_price[currency])}
        </span>
        <span
          className='change-percentage'
          style={{
            color: colorChanger(
              coin.market_data.price_change_percentage_24h_in_currency[currency]
            ),
          }}
        >{`${coin.market_data.price_change_percentage_24h_in_currency[
          currency
        ].toFixed(1)}%`}</span>
      </div>
      <div className='coin-price-container'>
        <span className='coin-price'>{`${priceFormatter(CURRENCIES.BTC, {min: 8})(coin.market_data.current_price[CURRENCIES.BTC])}`}</span>
        <span
          className='in-btc'
          style={{
            color: colorChanger(
              coin.market_data.price_change_percentage_24h_in_currency[
                CURRENCIES.BTC
              ]
            ),
          }}
        >{`${coin.market_data.price_change_percentage_24h_in_currency[
          CURRENCIES.BTC
        ].toFixed(1)}%`}</span>
      </div>
      <CoinDailyPriceRange coin={coin} />
      <div className='coin-global-stats'>
        <ul className='coin-market-stats'>
          <li className='coin-global-stats_item'>
            <span>Market Cap</span>
            <span>
              {priceFormatter(currency)(coin.market_data.market_cap[currency])}
            </span>
          </li>
          <li className='coin-global-stats_item'>
            <span>24 Hour Trading Vol</span>
            <span>
              {priceFormatter(currency)(
                coin.market_data.total_volume[currency]
              )}
            </span>
          </li>
          <li className='coin-global-stats_item'>
            <span>Fully Diluted Valuation</span>
            <span>{
              coin.market_data.fully_diluted_valuation[currency] 
                ? priceFormatter(currency)(coin.market_data.fully_diluted_valuation[currency])
                : '-'
              }</span>
          </li>
        </ul>
        <ul className='coin-tokenomics-stats'>
          <li className='coin-global-stats_item'>
            <span>Circulating Supply</span>
            <span>{numberFormatter(coin.market_data.circulating_supply)}</span>
          </li>
          <li className='coin-global-stats_item'>
            <span>Total Supply</span>
            <span>{numberFormatter(coin.market_data.total_supply)}</span>
          </li>
          <li className='coin-global-stats_item'>
            <span>Max Supply</span>
            {coin.market_data.max_supply 
              ? <span>{numberFormatter(coin.market_data.max_supply)}</span>
              : <AllInclusiveIcon fontSize='inherit'/>
            }
          </li>
        </ul>
      </div>
    </div>
  );
};
