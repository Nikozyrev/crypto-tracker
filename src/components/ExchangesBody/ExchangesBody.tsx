import { ExchangesRow } from '../ExchangesRow';
import { ExchangesProps } from '../ExchangesTable/ExchangesTable';
import './ExchangesBody.scss';

export const ExchangesBody = ({data}: ExchangesProps) => {
   return (
      <tbody>
				{data.map(el => <ExchangesRow key = {el.id} data = {el}/>)}
      </tbody>
   );
};
