
import { useParams } from "react-router";
import { CoinMainStats } from "../../components/CoinMainStats";
import { CoinChart } from "../../components/charts/CoinChart";
import { useGetCoinQuery } from "../../store/coingecko/coingecko.api";
import { CoinInfo } from "../../components/CoinInfo";
import './CoinsPage.scss';

export const CoinsPage = () => {
  const { id } = useParams();
  const { data, isFetching, isError } = useGetCoinQuery(id as string);
  console.log(data);

  return (
    <main className="main">
      {isFetching && <div>Loading...</div>}
      {isError && <div>Coin not found</div>}
      {(data && id) && (
        <>
          <div className="coin-main-info">
            <CoinMainStats coin={data}/>
            <CoinInfo coin={data}/>
          </div>
          <CoinChart id={id}/>
        </>
      )}
    </main>
  );
}
