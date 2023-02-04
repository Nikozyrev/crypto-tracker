import { ICoin } from '../../interfaces/coin';
import './CoinsTableRaw.scss';

interface CoinsTableRowProps {
   coin: ICoin;
}

export const CoinsTableRow = ({ coin }: CoinsTableRowProps) => {
   return (
      <tr>
         <td className="coins__favorites">star</td>
         <td className="coins__num">{coin.market_cap_rank}</td>
         <td className="coins__name-img">
            <img src={coin.image} alt="coin" className="coins__image" />
            <span className="coins__name">{coin.name}</span>
         </td>
         <td className="coins__price">{coin.current_price}</td>
         <th className="coins__time1h">
            {coin.price_change_percentage_1h_in_currency.toFixed(1)}
         </th>
         <td className="coins__time24h">
            {coin.price_change_percentage_24h_in_currency.toFixed(1)}
         </td>
         <th className="coins__time7d">
            {coin.price_change_percentage_7d_in_currency.toFixed(1)}
         </th>
         <td className="coins__volume">{coin.total_volume}</td>
         <td className="coins__market-cap">{coin.market_cap}</td>
         <td className="coins__graph">GRAPG</td>
      </tr>
   );
};
