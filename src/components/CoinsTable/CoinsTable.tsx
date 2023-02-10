import { useState } from 'react';
import { ORDER } from '../../constants/order';
import { sort } from '../../helpers/sort';
import { ICoin } from '../../interfaces/coin';
import { CoinsTableBody } from '../CoinsTableBody';
import { CoinsTableHead } from '../CoinsTableHead';
import './CoinsTable.scss';

interface CoinsTableProps {
   data: ICoin[];
}

export const CoinsTable = ({ data }: CoinsTableProps) => {
   const [order, setOrder] = useState<ORDER>(ORDER.NONE);
   const [sorted, setSorted] = useState<ICoin[]>(data);
   const [column, setColumn] = useState('');

   function sortElements(e: React.MouseEvent) {
      const target = e.target as HTMLElement;
      if (target.className.includes('thead_s')) {
         const newOrder = order === ORDER.ASC ? ORDER.DESC : ORDER.ASC;
         setOrder(newOrder);
         setColumn(target.id)
         const sorted = sort(data, target.id as keyof ICoin, newOrder);
         setSorted(sorted);
      }
   }

   return (
      <table className="coins__table" onClick={sortElements}>
         <CoinsTableHead order = {order} column = {column}/>
         <CoinsTableBody data={sorted} />
      </table>
   );
};
