import './CoinsTableHead.scss';

export const CoinsTableHead = () => {
   return (
      <thead>
         <tr>
            <th className="coins__favorites"></th>
            <td className="coins__num">#</td>
            <th className="coins__name">Coin</th>
            <th className="coins__price">Price</th>
            <th className="coins__time1h">1h</th>
            <th className="coins__time24h">24h</th>
            <th className="coins__time7d">7d</th>
            <th className="coins__volume">24h Volume</th>
            <th className="coins__market-cap">Mkt Cap</th>
            <th className="coins__graph">Last 7 Days</th>
         </tr>
      </thead>
   );
};
