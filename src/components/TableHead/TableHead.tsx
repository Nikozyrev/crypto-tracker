import { ORDER } from '../../constants/order';
import { IHeader } from '../../constants/tableHeaders';
import './TableHead.scss';

interface ITableHeadProps {
   column: string;
   order: ORDER;
   header: IHeader[];
}

export const TableHead = ({ header, column, order }: ITableHeadProps) => {
   return (
      <thead>
         <tr className="coins__head">
            {header.map((el) => (
               <th
                  className={`thead${el.class} ${
                     el.id === column ? order : ''
                  }`}
                  key={el.id}
                  id={el.id}
               >
                  {el.text}
               </th>
            ))}
         </tr>
      </thead>
   );
};
