import { useState } from 'react';
import {
   useGetExchangesQuery,
   useGetGlobalDataQuery,
} from '../../store/coingecko/coingecko.api';
import { TablePagination } from '../TablePagination';
import { ExchangesTable } from '../ExchangesTable';
import './ExchangesMain.scss';
import { CircularProgress } from '@mui/material';

export const ExchangesMain = () => {
   const [page, setPage] = useState(1);
   const { data, isFetching, isError } = useGetExchangesQuery(page);
   const { data: globalData } = useGetGlobalDataQuery();
   const count = Math.ceil((globalData?.markets || 0) / 100) - 1;

   return (
      <div>
         {data && <ExchangesTable data={data} />}
         {data && (
            <TablePagination count={count} page={page} setPage={setPage} />
         )}
         {isFetching && (
            <div className="progress">
               <CircularProgress color="primary" />
            </div>
         )}
         {isError && (
            <div className="error">Error. Something went wrong...</div>
         )}
      </div>
   );
};
