import { priceFormatter } from '../../helpers/price';
import { useAppSelector } from '../../hooks/redux';
import { useGetGlobalDataQuery } from '../../store/coingecko/coingecko.api';
import './SummaryMain.scss';

export const SummaryMain = () => {
  const { currency } = useAppSelector(state => state.currency);
  const { data } = useGetGlobalDataQuery();

  return (
    <div className="main__summary-data">
      {data && (
        <>
          <div className="summary__global-data">
            <h1>Cryptocurrency Prices by Market Cap</h1>
            <button>On/off</button>
            <span>Show Stats</span>
          </div>
          <div>
            <p>
              The global cryptocurrency market cap today is
              <span>
                {priceFormatter('usd')(data?.total_market_cap['usd']).slice(
                  0,
                  5
                )}
              </span>
              Trillion, a 0.2% change in the last 24 hours.
            </p>
          </div>
          <div className="summary__global-data__body">
            <div>
              <p className="global-data-view__title">
                {priceFormatter(currency)(data?.total_market_cap[currency])}
              </p>
              <div>Market Capitalization</div>
            </div>
            <div>
              <p>{priceFormatter(currency)(data?.total_volume[currency])}</p>
              <div>24h Trading Volume</div>
            </div>
            <div>
              <p>{`${data?.market_cap_percentage.btc.toFixed(2)}%`}</p>
              <div>Bitcoin Market Cap Dominance</div>
            </div>
            <div>
              <p>{data?.active_cryptocurrencies}</p>
              <div># of Coins</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
