import { CoinsPagination } from '../CoinsPagination';
import { CoinsTable } from '../CoinsTable';
import './CoinsMain.scss';

export const CoinsMain = () => {
   return (
      <div>
         <CoinsTable />
         <CoinsPagination />
      </div>
   );
};
