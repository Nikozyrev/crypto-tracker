
import { useParams } from "react-router-dom";
import { CoinChart } from "../../components/charts/CoinChart";

export const CoinsPage = () => {
  const { id } = useParams();

  return (
    <main className="main">
      {id && (
        <CoinChart id={id}/>
      )}
    </main>
  );
}
