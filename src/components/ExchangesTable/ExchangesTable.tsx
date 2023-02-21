import { useEffect, useState } from 'react';
import { ORDER } from '../../constants/order';
import { exchangesHeader } from '../../constants/tableHeaders';
import { sort } from '../../helpers/sort';
import { IExchange } from '../../interfaces/exchanges';
import { TableHead } from '../TableHead';
import './ExchangesTable.scss';
import { ExchangesTableRow } from '../ExchangesTableRow';

export interface ExchangesProps {
   data: IExchange[];
}

export const ExchangesTable = ({ data }: ExchangesProps) => {
   const [order, setOrder] = useState<ORDER>(ORDER.NONE);
   const [sorted, setSorted] = useState<IExchange[]>(data);
   const [column, setColumn] = useState('');

   useEffect(() => {
      setSorted(data);
   }, [data]);

   function sortHandler(e: React.MouseEvent) {
      const target = e.target as HTMLElement;
      if (target.className.includes('thead_s')) {
         const newOrder = order === ORDER.ASC ? ORDER.DESC : ORDER.ASC;
         setOrder(newOrder);
         setColumn(target.id);
         const sorted = sort(data, target.id as keyof IExchange, newOrder);
         setSorted(sorted);
      }
   }

   return (
      <table className="table" onClick={sortHandler}>
         <TableHead header={exchangesHeader} order={order} column={column} />
         <tbody>
            {sorted.map((el) => (
               <ExchangesTableRow key={el.id} coin={el} />
            ))}
         </tbody>
      </table>
   );
};
