import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { CURRENCIES } from '../../constants/currencies';
import { priceFormatter } from '../../helpers/price';
import { IExchange } from '../../interfaces/exchanges';
import './ExchangesTableRow.scss';

interface IExchangesRow {
   exchange: IExchange;
}

export const ExchangesTableRow = ({ exchange }: IExchangesRow) => {
   console.log(exchange.url);
   return (
      <tr className="_row">
         <td className="exchanges__number">{exchange.trust_score_rank}</td>
         <td>
            <a
               className="exchanges__img-name"
               href={
                  exchange.url === 'https://r.kraken.com/c/2223866/687155/10583'
                     ? 'https://www.kraken.com/'
                     : exchange.url
               }
               target="_blank"
            >
               <img
                  className="exchanges__img"
                  src={exchange.image}
                  alt="exchange__image"
               />
               <span className="exchanges__name">{exchange.name}</span>
            </a>
         </td>
         <td className="exchanges__trust">
            <div className="trust__progres-line">
               <div
                  style={{ width: exchange.trust_score * 10 }}
                  className="trust__inner-progress-line"
               ></div>
            </div>
            {exchange.trust_score}
         </td>
         <td className="exchanges__24h-normalized">
            {priceFormatter(CURRENCIES.BTC, { max: 0 })(
               exchange.trade_volume_24h_btc_normalized
            )}
         </td>
         <td className="exchanges__24h">
            {priceFormatter(CURRENCIES.BTC, { max: 0 })(
               exchange.trade_volume_24h_btc
            )}
         </td>
         <td>{exchange.country}</td>
         <td>{exchange.year_established}</td>
      </tr>
   );
};
