import { NOTATION, numberFormatter, priceFormatter } from '../../helpers/price';
import { useAppSelector } from '../../hooks/redux';
import { useGetGlobalDataQuery } from '../../store/coingecko/coingecko.api';
import './HeaderGlobalData.scss';

export const HeaderGlobalData = () => {
   const { currency } = useAppSelector((state) => state.currency);
   const { data } = useGetGlobalDataQuery();

   return (
      <div className="header__global-data">
         {data && (
            <>
               <div>
                  <span>Coins: </span>
                  <span className="global-data__colored">
                     {numberFormatter(data?.active_cryptocurrencies)}
                  </span>
               </div>
               <div>
                  <span>Exchanges: </span>
                  <span className="global-data__colored">{numberFormatter(data?.markets)}</span>
               </div>
               <div>
                  <span>Market Cap: </span>
                  <span className="global-data__colored">
                    {priceFormatter(currency, {max: 2, notation: NOTATION.COMPACT})(data?.total_market_cap[currency])}
                  </span>
               </div>
               <div>
                  <span>24h Vol: </span>
                  <span className="global-data__colored">
                     {priceFormatter(currency, {max: 2, notation: NOTATION.COMPACT})(data?.total_volume[currency])}
                  </span>
               </div>
               <div>
                  <span>Dominance: </span>
                  <span className="global-data__colored">
                     BTC{`${data?.market_cap_percentage.btc.toFixed(1)}%`}
                  </span>
                  <span className="global-data__colored">
                     {' '}
                     ETH {`${data?.market_cap_percentage.eth.toFixed(1)}%`}
                  </span>
               </div>
            </>
         )}
      </div>
   );
};
