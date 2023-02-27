import { CircularProgress } from '@mui/material';
import { useParams } from 'react-router';
import { CoinChart } from '../../components/charts/CoinChart';
import { CoinChartTitle } from '../../components/CoinChartTitle';
import { CoinDescription } from '../../components/CoinDescription';
import { CoinDetailedStats } from '../../components/CoinDetailedStats';
import { CoinInfo } from '../../components/CoinInfo';
import { CoinMainStats } from '../../components/CoinMainStats';
import { CoinPriceChangePercentage } from '../../components/CoinPriceChangePercentage';
import { NotFoundMessage } from '../../components/NotFoundMessage';
import { useGetCoinQuery } from '../../store/coingecko/coingecko.api';
import './CoinsPage.scss';


export const CoinsPage = () => {
  const { id } = useParams();
  const { data, isFetching, isError } = useGetCoinQuery(id as string);

  return (
    <>
      {isFetching && <CircularProgress color='primary' />}
      {isError && <NotFoundMessage />}
      {data && id && (
        <>
          <div className='coin-main-info'>
            <CoinMainStats coin={data} />
            <CoinInfo coin={data} />
          </div>
          <div className='coin-price-info'>
            <div className='coin-chart'>
              <CoinChartTitle coin={data} />
              <CoinChart id={id} />
              <CoinPriceChangePercentage coin={data} />
            </div>
            <CoinDetailedStats coin={data} />
          </div>
          <CoinDescription coin={data} />
        </>
      )}
    </>
  );
};
