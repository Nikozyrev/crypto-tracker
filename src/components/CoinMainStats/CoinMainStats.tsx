import { FC } from "react";
import { CURRENCIES } from "../../constants/currencies";
import { priceFormatter } from "../../helpers/price";
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
    <div className="coin-main-stats">
      <div className="coin-rank">Rank #{coin.market_cap_rank}</div>
      <div className="coin-name-container">
        <img src={coin.image.thumb} alt="coin"/>
        <span className="coin-name">{coin.name}</span>
        <span>{coin.symbol.toUpperCase()}</span>
      </div>
      <div className="coin-price-container">
        <span className="coin-price">{priceFormatter(currency)(coin.market_data.current_price[currency])}</span>
        <span>{`${coin.market_data.price_change_percentage_24h_in_currency[currency].toFixed(1)}%`}</span>
      </div>
      <div className="coin-price-container">
        <span className="coin-price">{`${coin.market_data.current_price[CURRENCIES.BTC].toFixed(8)} BTC`}</span>
        <span>{`${coin.market_data.price_change_percentage_24h_in_currency[CURRENCIES.BTC].toFixed(1)}%`}</span>
      </div>
      <CoinDailyPriceRange coin={coin}/>
    </div>
  );
}