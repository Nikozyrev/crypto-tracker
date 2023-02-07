import { useParams } from "react-router";
import { CoinMainStats } from "../../components/CoinMainStats";
import { useGetCoinQuery } from "../../store/coingecko/coingecko.api";

export const CoinsPage = () => {
  const { id } = useParams();
  const { data, isFetching, isError } = useGetCoinQuery(id as string);
  console.log(data);

  return (
    <main className="main">
      {isFetching && <div>Loading...</div>}
      {isError && <div>Coin not found</div>}
      {data && (
        <CoinMainStats coin={data}/>
      )}
    </main>
  );
}