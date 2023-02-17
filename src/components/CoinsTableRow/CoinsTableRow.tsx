import { Link } from 'react-router-dom';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import Checkbox from '@mui/material/Checkbox';
import { priceFormatter } from '../../helpers/price';
import { useAppActions, useAppSelector } from '../../hooks/redux';
import { ICoin } from '../../interfaces/coin';
import { colorChanger } from '../../helpers/colorChanger';
import { ROUTES } from '../../constants/routes';
import { Sparkline } from '../charts/Sparkline/Sparkline';
import './CoinsTableRow.scss';

interface CoinsTableRowProps {
   coin: ICoin;
   setView: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CoinsTableRow = ({ coin, setView }: CoinsTableRowProps) => {
   const { favorites } = useAppSelector((state) => state.favorites);
   const { addFavorites, deleteFavorites } = useAppActions();
   const { currency } = useAppSelector((state) => state.currency);

   const onChangeHandler = (e: React.ChangeEvent) => {
      const target = e.target as HTMLInputElement;
      if (target.checked) {
         addFavorites(coin.id);
      }
      if (!target.checked) {
         deleteFavorites(coin.id);
      }
      if (favorites.length === 1) {
         setView(false);
      }
   };

   return (
      <tr className='_row'>
         <td className="coins__favorites">
            <Checkbox
               onChange={onChangeHandler}
               checked={favorites.includes(coin.id) ? true : false}
               size="small"
               color="secondary"
               icon={<FavoriteBorder />}
               checkedIcon={<Favorite />}
            />
         </td>
         <td className="coins__num">{coin.market_cap_rank}</td>
         <td>
            <Link className="coins__name-img" to={`${ROUTES.COINS}/${coin.id}`}>
               <img src={coin.image} alt="coin" className="coins__image" />
               <span className="coins__name">{coin.name}</span>
							 <span className='coins__symbol'>{coin.symbol.toUpperCase()}</span>
            </Link>
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
            {Number(coin.price_change_percentage_1h_in_currency).toFixed(1)}%
         </td>
         <td
            className="coins__time24h"
            style={{
               color: colorChanger(
                  coin.price_change_percentage_24h_in_currency
               ),
            }}
         >
            {Number(coin.price_change_percentage_24h_in_currency).toFixed(1)}%
         </td>
         <td
            className="coins__time7d"
            style={{
               color: colorChanger(coin.price_change_percentage_7d_in_currency),
            }}
         >
            {Number(coin.price_change_percentage_7d_in_currency).toFixed(1)}%
         </td>
         <td className="coins__volume">
            {priceFormatter(currency)(coin.total_volume)}
         </td>
         <td className="coins__market-cap">
            {priceFormatter(currency)(coin.market_cap)}
         </td>
         <td className="coins__graph">
            <Sparkline data={coin.sparkline_in_7d.price} />
         </td>
      </tr>
   );
};
