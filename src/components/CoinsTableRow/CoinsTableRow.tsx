import './CoinsTableRaw.scss';

export const CoinsTableRow = () => {
   return (
      <tr>
         <td className="Coins__favorites"></td>
         <td className="Coins__num"></td>
         <td className="Coins__name"></td>
         <td className="Coins__price"></td>
         <td className="Coins__time1h"></td>
         <td className="Coins__time24h"></td>
         <td className="Coins__time7d"></td>
         <td className="Coins__volume"></td>
         <td className="Coins__market-cap"></td>
         <td className="Coins__graph"></td>
      </tr>
   );
};
