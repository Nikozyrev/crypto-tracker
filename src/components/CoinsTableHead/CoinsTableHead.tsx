import './CoinsTableHead.scss';

export const CoinsTableHead = () => {
   return (
      <thead>
         <tr>
            <th className="Coins__favorites"></th>
            <td className="Coins__num">#</td>
            <th className="Coins__name">Coin</th>
            <th className="Coins__price">Price</th>
            <th className="Coins__time1h">1h</th>
            <th className="Coins__time24h">24h</th>
            <th className="Coins__time7d">7d</th>
            <th className="Coins__volume">24h Volume</th>
            <th className="Coins__market-cap">Mkt Cap</th>
            <th className="Coins__graph">Last 7 Days</th>
         </tr>
      </thead>
   );
};
