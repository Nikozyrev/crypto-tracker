import { useState } from 'react';
import { useGetExchangesQuery, useGetGlobalDataQuery } from '../../store/coingecko/coingecko.api';
import { TablePagination } from '../TablePagination';
import { ExchangesTable } from '../ExchangesTable';
import './ExchangesMain.scss'


export const ExchangesMain = () => {
	const [page, setPage] = useState(1);
	const { data } = useGetExchangesQuery(page);	
	const { data: globalData } = useGetGlobalDataQuery();
	const count = Math.ceil((globalData?.markets || 0) / 100) - 1; 

	return (
		<div>
			{data && <ExchangesTable data = {data}/>}
			<TablePagination count = {count} page={page} setPage={setPage}/>
		</div>
	);
};

