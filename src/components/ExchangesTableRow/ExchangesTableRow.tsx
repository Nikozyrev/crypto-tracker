import { CURRENCIES } from '../../constants/currencies';
import { priceFormatter } from '../../helpers/price';
import { IExchange } from '../../interfaces/exchanges';
import './ExchangesTableRow.scss';

interface IExchangesRow {
   coin: IExchange;
}

export const ExchangesTableRow = ({ coin }: IExchangesRow) => {
   return (
      <tr>
         <td className="exchanges__number">{coin.trust_score_rank}</td>
         <td>
            <div className="exchanges__img-name">
               <img
                  className="exchanges__img"
                  src={coin.image}
                  alt="exchange__image"
               />
               <span className="exchanges__name">{coin.name}</span>
            </div>
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
            {priceFormatter(CURRENCIES.BTC, {max: 0})(coin.trade_volume_24h_btc_normalized)}
         </td>
         <td className="exchanges__24h">
            {priceFormatter(CURRENCIES.BTC, {max: 0})(coin.trade_volume_24h_btc)}
         </td>
      </tr>
   );
};
