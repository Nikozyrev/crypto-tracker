import { IExchange } from '../../interfaces/exchanges';
import { ExchangesBody } from '../ExchangesBody';
import { ExchangesHead } from '../ExchangesHead';
import './ExchangesTable.scss'

export interface ExchangesProps {
	data: IExchange[]
}

export const ExchangesTable = ({data}:ExchangesProps) => {
	return (
		<table>
			<ExchangesHead/>
			<ExchangesBody data = {data}/>
		</table>
	);
};
