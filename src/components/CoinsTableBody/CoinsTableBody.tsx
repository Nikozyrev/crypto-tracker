import { ICoin } from '../../interfaces/coin';
import { CoinsTableRow } from '../CoinsTableRow';
import './CoinsTableBody.scss';

interface CoinsTableProps {
   data: ICoin[];
}

export const CoinsTableBody = ({ data }: CoinsTableProps) => {
   return (
      <tbody>
         {data.map((coin) => (
            <CoinsTableRow key={coin.id} coin={coin} />
         ))}
      </tbody>
   );
};

// При нажатии на кнопку, вызывается функция сортировки. функции онклик будет аргумент связывающий кнопку и параметр сортировки
