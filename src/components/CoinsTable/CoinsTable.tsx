import { CoinsTableBody } from '../CoinsTableBody';
import { CoinsTableHead } from '../CoinsTableHead';
import './CoinsTable.scss';

export const CoinsTable = () => {
   return (
      <table>
         <CoinsTableBody />
         <CoinsTableHead />
      </table>
   );
};
