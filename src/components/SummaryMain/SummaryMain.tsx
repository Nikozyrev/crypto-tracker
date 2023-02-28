import React, { useState } from 'react';
import { CURRENCIES } from '../../constants/currencies';
import { COMPACT_DISPLAY, NOTATION, numberFormatter, priceFormatter } from '../../helpers/price';
import { useAppSelector } from '../../hooks/redux';
import { useGetGlobalDataQuery } from '../../store/coingecko/coingecko.api';
import './SummaryMain.scss';

export const SummaryMain = () => {
  const { currency } = useAppSelector(state => state.currency);
  const { data } = useGetGlobalDataQuery();
  const [areStatsOpen, setAreStatsOpen] = useState(true);

  return (
    <div className="main__summary-data">
      {data && (
        <>
          <div className="summary__global-data">
            <h1>Cryptocurrency Prices by Market Cap</h1>
            <label className="switch">
              <input
                type="checkbox"
                checked={areStatsOpen}
                onChange={() => setAreStatsOpen(!areStatsOpen)}
              />
              <span className="slider round"></span>
            </label>
            <span>Show Stats</span>
          </div>
          <div>
            <p>
              The global cryptocurrency market cap today is{' '}
              {priceFormatter(CURRENCIES.USD, {notation: NOTATION.COMPACT, compactDisplay: COMPACT_DISPLAY.LONG, max: 2})(data?.total_market_cap[CURRENCIES.USD])}{', '}
              a {data.market_cap_change_percentage_24h_usd.toFixed(1)}% change in the last 24 hours.
            </p>
          </div>
          {areStatsOpen && (
            <div className="summary__global-data__body">
              <div>
                <p className="global-data-view__title">
                  {priceFormatter(currency, {max: 0})(data?.total_market_cap[currency])}
                </p>
                <div>Market Capitalization</div>
              </div>
              <div>
                <p>{priceFormatter(currency, {max: 0})(data?.total_volume[currency])}</p>
                <div>24h Trading Volume</div>
              </div>
              <div>
                <p>{`${data?.market_cap_percentage.btc.toFixed(2)}%`}</p>
                <div>Bitcoin Market Cap Dominance</div>
              </div>
              <div>
                <p>{numberFormatter(data?.active_cryptocurrencies)}</p>
                <div># of Coins</div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};
