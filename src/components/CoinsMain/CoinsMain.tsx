import { Button } from '@mui/material';
import { useState } from 'react';
import { useAppSelector } from '../../hooks/redux';

import {
   useGetCoinsQuery,
} from '../../store/coingecko/coingecko.api';
import { CoinsPagination } from '../CoinsPagination';
import { CoinsTable } from '../CoinsTable';
import './CoinsMain.scss';





export const CoinsMain = () => {
	const { favorites } = useAppSelector(state => state.favorites);
	 const { currency } = useAppSelector((state) => state.currency);
   const [page, setPage] = useState(1);
	 const [view, setView] = useState(false)
   const { data } = useGetCoinsQuery({ currency, page, ids: view ? favorites.join(',') : '' });
	 console.log('render')
	 

		const onClickHandler = () => {
			if(favorites.length > 0 && !view) {
				setView(true)
			} else {
				setView(false)
			}
  }

	
   return (
      <div>
				<Button onClick={onClickHandler} size='medium' sx={{marginBottom: '20px', marginTop: '20px'}} variant="contained">{view ? 'Show all coins' : 'Show Favorites'}</Button>
				
         {data && <CoinsTable setView = {setView} data={data} />}
         {data && <CoinsPagination view ={view} data = {data} page={page} setPage={setPage} />}
      </div>
   );
};
