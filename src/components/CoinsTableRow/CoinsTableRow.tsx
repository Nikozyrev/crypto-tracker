import { priceFormatter } from '../../helpers/price';
import { useAppSelector } from '../../hooks/redux';
import { ICoin } from '../../interfaces/coin';
import starImg from '../../assets/img/tablestar.svg';
import './CoinsTableRow.scss';
import { colorChanger } from '../../helpers/colorChanger';

interface CoinsTableRowProps {
   coin: ICoin;
}

export const CoinsTableRow = ({ coin }: CoinsTableRowProps) => {
   const { currency } = useAppSelector((state) => state.currency);

   return (
      <tr>
         <td className="coins__favorites">
            <img className="fav-img" src={starImg} alt="" />
         </td>
         <td className="coins__num">{coin.market_cap_rank}</td>
         <td className="coins__name-img">
            <img src={coin.image} alt="coin" className="coins__image" />
            <span className="coins__name">{coin.name}</span>
         </td>
         <td className="coins__price">
            {priceFormatter(currency)(coin.current_price)}
         </td>
         <td
            className="coins__time1h"
            style={{
               color: colorChanger(coin.price_change_percentage_1h_in_currency),
            }}
         >
            {Number(coin.price_change_percentage_1h_in_currency).toFixed(1)}
         </td>
         <td
            className="coins__time24h"
            style={{
               color: colorChanger(
                  coin.price_change_percentage_24h_in_currency
               ),
            }}
         >
            {Number(coin.price_change_percentage_24h_in_currency.toFixed(1))}
         </td>
         <td
            className="coins__time7d"
            style={{
               color: colorChanger(coin.price_change_percentage_7d_in_currency),
            }}
         >
            {Number(coin.price_change_percentage_7d_in_currency.toFixed(1))}
         </td>
         <td className="coins__volume">
            {priceFormatter(currency)(coin.total_volume)}
         </td>
         <td className="coins__market-cap">
            {priceFormatter(currency)(coin.market_cap)}
         </td>
         <td className="coins__graph">GRAPG</td>
      </tr>
   );
};
