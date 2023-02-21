import { CircularProgress } from '@mui/material';
import { useParams } from 'react-router';
import { CoinChart } from '../../components/charts/CoinChart';
import { CoinDescription } from '../../components/CoinDescription';
import { CoinDetailedStats } from '../../components/CoinDetailedStats';
import { CoinInfo } from '../../components/CoinInfo';
import { CoinMainStats } from '../../components/CoinMainStats';
import { NotFoundMessage } from '../../components/NotFoundMessage';
import { useGetCoinQuery } from '../../store/coingecko/coingecko.api';
import './CoinsPage.scss';

export const CoinsPage = () => {
  const { id } = useParams();
  const { data, isFetching, isError } = useGetCoinQuery(id as string);

  return (
    <main className='main'>
      {isFetching && <CircularProgress color='primary' />}
      {isError && <NotFoundMessage />}
      {data && id && (
        <>
          <div className='coin-main-info'>
            <CoinMainStats coin={data} />
            <CoinInfo coin={data} />
          </div>
          <div className='coin-price-info'>
            <CoinChart id={id} />
            <CoinDetailedStats coin={data} />
          </div>
          <CoinDescription coin={data} />
        </>
      )}
    </main>
  );
};
