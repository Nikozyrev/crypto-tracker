import { IExchange } from '../../interfaces/exchanges';
import './ExchangesRow.scss';


interface IExchangesRow {
	data: IExchange
}

export const ExchangesRow = ({data}:IExchangesRow) => {
   return (
      <tr>
         <td className="exchanges__number">{data.trust_score_rank}</td>
         <td className="exchanges__img-name">
					<img src={data.image} alt="exchange__image" />
					<span>{data.name}</span>
				 </td>
         <td className="exchanges__trust">{data.trust_score}</td>
         <td className="exchanges__24h-normalized">
            {data.trade_volume_24h_btc_normalized}
         </td>
         <td className="exchanges__24h">{data.trade_volume_24h_btc}</td>
      </tr>
   );
};
