import { useGetExchangesQuery } from '../../store/coingecko/coingecko.api';
import { ExchangesPagination } from '../ExchangesPagination';
import { ExchangesTable } from '../ExchangesTable';
import './ExchangesMain.scss'


export const ExchangesMain = () => {

	const { data } = useGetExchangesQuery();
   console.log(data);

	 
	return (
		<div>
			{data && <ExchangesTable data = {data}/>}
			<ExchangesPagination/>
		</div>
	);
};

