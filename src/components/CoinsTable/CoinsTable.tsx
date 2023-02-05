import { useState } from 'react';
import { ORDER } from '../../constants/order';
import { coinKeys, sort } from '../../helpers/sort';
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

   function sortElements(e: React.MouseEvent) {
      const target = e.target as HTMLElement;
      if (target.tagName === 'TH') {
         if (order === '') {
            setOrder(ORDER.ASC);
         }
         if (order === ORDER.ASC) {
            setOrder(ORDER.DESC);
         }
         if (order === ORDER.DESC) {
            setOrder(ORDER.ASC);
         }
         const id = target.id as coinKeys;
         const sorted = sort(data, id, order);
         setSorted(sorted);
      }
   }

   return (
      <table className="coins__table" onClick={sortElements}>
         <CoinsTableHead />
         <CoinsTableBody data={sorted} />
      </table>
   );
};
