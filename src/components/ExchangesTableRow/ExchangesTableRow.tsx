import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { priceFormatter } from '../../helpers/price';
import { IExchange } from '../../interfaces/exchanges';
import './ExchangesTableRow.scss';

interface IExchangesRow {
   coin: IExchange;
}

export const ExchangesTableRow = ({ coin }: IExchangesRow) => {
   console.log(coin.url);
   return (
      <tr className="_row">
         <td className="exchanges__number">{coin.trust_score_rank}</td>
         <td>
            <a
               className="exchanges__img-name"
               href={
                  coin.url === 'https://r.kraken.com/c/2223866/687155/10583'
                     ? 'https://www.kraken.com/'
                     : coin.url
               }
               target="_blank"
            >
               <img
                  className="exchanges__img"
                  src={coin.image}
                  alt="exchange__image"
               />
               <span className="exchanges__name">{coin.name}</span>
            </a>
         </td>
         <td className="exchanges__trust">
            <div className="trust__progres-line">
               <div
                  style={{ width: coin.trust_score * 10 }}
                  className="trust__inner-progress-line"
               ></div>
            </div>
            {coin.trust_score}
         </td>
         <td className="exchanges__24h-normalized">
            {priceFormatter('BTC')(coin.trade_volume_24h_btc_normalized)}
         </td>
         <td className="exchanges__24h">
            {priceFormatter('BTC')(coin.trade_volume_24h_btc)}
         </td>
      </tr>
   );
};
