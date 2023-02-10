import { ORDER } from '../../constants/order';
import './CoinsTableHead.scss';

interface ICoinsTableHeadProps {
	column: string
	order: ORDER
}

export const CoinsTableHead = ({column, order}: ICoinsTableHeadProps) => {

	const rows = [{text: '', id: 'favourites', class: ''}, {text: '#', id: 'market_cap_rank', class: '_s'},{text:'Coin', id:'name', class: '_s'},{text:'Price', id:'current_price', class: '_s'},{text:'1h', id:'price_change_percentage_1h_in_currency', class: '_s'},{text:' 24h', id:'price_change_percentage_24h_in_currency', class: '_s'},{text:'7d', id:'price_change_percentage_7d_in_currency', class: '_s'}, {text:' 24h Volume', id:'total_volume', class: '_s'},{text:'Mkt Cap', id:'market_cap', class: '_s'},{text:'Last 7 Days', id:'graph', class: ''}]
	

   return (
      <thead>
         <tr className="coins__head">
           {rows.map(el => <th className={`thead${el.class} ${el.id === column ? order : ''}`} key={el.id} id={el.id}>{el.text}</th>)}
         </tr>
      </thead>
   );
};
