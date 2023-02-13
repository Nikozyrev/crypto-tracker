import { ICoin } from '../../interfaces/coin';
import { CoinsTableRow } from '../CoinsTableRow';
import './CoinsTableBody.scss';

interface CoinsTableProps {
   data: ICoin[];
	 setView: React.Dispatch<React.SetStateAction<boolean>>
}

export const CoinsTableBody = ({ data, setView }: CoinsTableProps) => {
   return (
      <tbody>
         {data.map((coin) => (
            <CoinsTableRow setView = {setView} key={coin.id} coin={coin} />
         ))}
      </tbody>
   );
};
