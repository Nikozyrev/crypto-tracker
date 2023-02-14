import { IExchange } from '../../interfaces/exchanges';
import { ExchangesTableRow } from '../ExchangesTableRow';


import './ExchangesTableBody.scss';


interface ExchangesTableProps {
	data: IExchange[];
}


export const ExchangesTableBody = ({data}: ExchangesTableProps) => {
   return (
      <tbody>
				{data.map(el => <ExchangesTableRow key = {el.id} data = {el}/>)}
      </tbody>
   );
};
