import { Button, CircularProgress } from '@mui/material';
import { useState } from 'react';
import { useAppSelector } from '../../hooks/redux';
import {
   useGetCoinsQuery,
   useGetGlobalDataQuery,
} from '../../store/coingecko/coingecko.api';
import { TablePagination } from '../TablePagination';
import { CoinsTable } from '../CoinsTable';
import './CoinsMain.scss';

export const CoinsMain = () => {
   const { favorites } = useAppSelector((state) => state.favorites);
   const { currency } = useAppSelector((state) => state.currency);
   const [page, setPage] = useState(1);
   const [view, setView] = useState(false);
   const { data, isFetching, isError } = useGetCoinsQuery({
      currency,
      page,
      ids: view ? favorites.join(',') : '',
   });
   const { data: globalData } = useGetGlobalDataQuery();
   const coinsQnty = Math.ceil(
      (globalData?.active_cryptocurrencies || 0) / 100
   );
   const favoritesQnty = Math.ceil(favorites.length / 100);
   const count = view ? favoritesQnty : coinsQnty;

   const onClickHandler = () => {
      if (favorites.length > 0 && !view) {
         setView(true);
         setPage(1);
      } else {
         setView(false);
      }
   };
   return (
      <div>
         {data && (
            <Button
               onClick={onClickHandler}
               disabled={!favorites.length}
               size="medium"
               sx={{ marginBottom: '20px', marginTop: '20px' }}
               variant="contained"
            >
               {view ? 'Show all coins' : 'Show Favorites'}
            </Button>
         )}
         {data && (
            <CoinsTable isFetching={isFetching} setView={setView} data={data} />
         )}
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
