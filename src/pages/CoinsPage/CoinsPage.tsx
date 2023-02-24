import { CircularProgress } from '@mui/material';
import { useParams } from 'react-router';
import { CoinMainStats } from '../../components/CoinMainStats';
import { CoinChart } from '../../components/charts/CoinChart';
import { useGetCoinQuery } from '../../store/coingecko/coingecko.api';
import { CoinInfo } from '../../components/CoinInfo';
import { NotFoundMessage } from '../../components/NotFoundMessage';
import './CoinsPage.scss';
import { CoinDetailedStats } from '../../components/CoinDetailedStats';

export const CoinsPage = () => {
   const { id } = useParams();
   const { data, isFetching, isError } = useGetCoinQuery(id as string);

   return (
      <>
         {isFetching && <CircularProgress color="primary" />}
         {isError && <NotFoundMessage />}
         {data && id && (
            <>
               <div className="coin-main-info">
                  <CoinMainStats coin={data} />
                  <CoinInfo coin={data} />
               </div>
               <div className="coin-price-info">
                  <CoinChart id={id} />
                  <CoinDetailedStats coin={data} />
               </div>
            </>
         )}
      </>
   );
};
