import { ICoin } from '../../interfaces/coin';
import { CoinsTableRow } from '../CoinsTableRow';
import './CoinsTableBody.scss';


interface CoinsTableProps {
	data: ICoin[] | undefined
}


export const CoinsTableBody = ({data}:CoinsTableProps) => {
   return (
      <tbody>
				{data?.map(coin => <CoinsTableRow key = {coin.id} coin = {coin}/> )}
      </tbody>
   );
};
