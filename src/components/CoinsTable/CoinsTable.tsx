import { ICoin } from '../../interfaces/coin';
import { CoinsTableBody } from '../CoinsTableBody';
import { CoinsTableHead } from '../CoinsTableHead';
import './CoinsTable.scss';


interface CoinsTableProps {
	data: ICoin[] | undefined
}


export const CoinsTable = ({data}:CoinsTableProps) => {
   return (
      <table className='coins__table'>
         <CoinsTableBody data = {data}/>
         <CoinsTableHead />
      </table>
   );
};
