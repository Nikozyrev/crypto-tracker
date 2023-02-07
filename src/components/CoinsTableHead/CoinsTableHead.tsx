import './CoinsTableHead.scss';

export const CoinsTableHead = () => {
   return (
      <thead>
         <tr className="coins__head">
            <th id="favourites" className="thead"></th>
            <th id="market_cap_rank" className="thead">
               #
            </th>
            <th id="name" className="thead">
               Coin
            </th>
            <th id="current_price" className="thead">
               Price
            </th>
            <th id="price_change_percentage_1h_in_currency" className="thead">
               1h
            </th>
            <th id="price_change_percentage_24h_in_currency" className="thead">
               24h
            </th>
            <th id="price_change_percentage_7d_in_currency" className="thead">
               7d
            </th>
            <th id="total_volume" className="thead">
               24h Volume
            </th>
            <th id="market_cap" className="thead">
               Mkt Cap
            </th>
            <th id="" className="thead">
               Last 7 Days
            </th>
         </tr>
      </thead>
   );
};
