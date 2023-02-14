import { IExchange } from '../../interfaces/exchanges';
import './ExchangesTableRow.scss';

interface IExchangesRow {
   data: IExchange;
}

export const ExchangesTableRow = ({ data }: IExchangesRow) => {
   return (
      <tr>
         <td className="exchanges__number">{data.trust_score_rank}</td>
         <td>
					<div className="exchanges__img-name">
            <img
               className="exchanges__img"
               src={data.image}
               alt="exchange__image"
            />
            <span className="exchanges__name">{data.name}</span>
						</div>
         </td>
         <td className="exchanges__trust">
            <div className="trust__progres-line">
               <div className="trust__inner-progress-line"></div>
            </div>
            {data.trust_score}
         </td>
         <td className="exchanges__24h-normalized">
            {data.trade_volume_24h_btc_normalized}
         </td>
         <td className="exchanges__24h">{data.trade_volume_24h_btc}</td>
      </tr>
   );
};
