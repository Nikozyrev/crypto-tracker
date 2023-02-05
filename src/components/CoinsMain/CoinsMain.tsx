import { useAppSelector } from '../../hooks/redux';

import { useGetCoinsQuery } from '../../store/coingecko/coingecko.api';
import { CoinsPagination } from '../CoinsPagination';
import { CoinsTable } from '../CoinsTable';
import './CoinsMain.scss';

export const CoinsMain = () => {
   const { currency } = useAppSelector((state) => state.currency);
   const { data } = useGetCoinsQuery(currency);

   return (
      <div>
         {data && <CoinsTable data={data} />}
         <CoinsPagination />
      </div>
   );
};
