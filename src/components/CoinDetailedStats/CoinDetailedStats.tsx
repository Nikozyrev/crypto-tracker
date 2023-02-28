import { FC } from 'react';
import { colorChanger } from '../../helpers/colorChanger';
import { priceFormatter } from '../../helpers/price';
import { useAppSelector } from '../../hooks/redux';
import { ICoinDetailed } from '../../interfaces/coinDetailed';
import './CoinDetailedStats.scss';

interface ICoinDetailedStatsProps {
  coin: ICoinDetailed;
}

export const CoinDetailedStats: FC<ICoinDetailedStatsProps> = ({ coin }) => {
  const { currency } = useAppSelector(state => state.currency);

  const athDate = new Date(coin.market_data.ath_date[currency]);
  const atlDate = new Date(coin.market_data.atl_date[currency]);
  const diff = (date: Date) => {
    const year = new Date().getFullYear() - date.getFullYear() - 1;
    return `(over ${year} ${year > 1 ? 'years' : 'year'})`;
  };

  return (
    <div className="coin-detailed-stats">
      <h2 className="coin-detailed-stats__title">
        {coin.symbol.toUpperCase()} Price Statistics
      </h2>
      <div>
        <table className='stats-table'>
          <tbody>
            <tr>
              <th>
                <span>{coin.name} Price</span>
              </th>
              <td>
                <span>
                  {priceFormatter(currency)(
                    coin.market_data.current_price[currency]
                  )}
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <span>24h Low / 24h High</span>
              </th>
              <td>
                <span>
                  {priceFormatter(currency)(coin.market_data.low_24h[currency])}{' '}
                  /{' '}
                  {priceFormatter(currency)(
                    coin.market_data.high_24h[currency]
                  )}
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <span>Trading Volume</span>
              </th>
              <td>
                <span>
                  {priceFormatter(currency)(
                    coin.market_data.total_volume[currency]
                  )}
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <span>Market Cap Rank</span>
              </th>
              <td>
                <span>#{coin.market_data.market_cap_rank}</span>
              </td>
            </tr>
            <tr>
              <th>
                <span>Market Cap</span>
              </th>
              <td>
                <span>
                  {priceFormatter(currency)(
                    coin.market_data.market_cap[currency]
                  )}
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <span>Volume / Market Cap</span>
              </th>
              <td>
                <span>
                  {(
                    coin.market_data.total_volume[currency] /
                    coin.market_data.market_cap[currency]
                  ).toFixed(4)}
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <span>All-Time High</span>
              </th>
              <td>
                <span>
                  {priceFormatter(currency)(coin.market_data.ath[currency])}{' '}
                  <span
                    style={{
                      color: colorChanger(
                        coin.market_data.ath_change_percentage[currency]
                      ),
                    }}
                  >
                    {coin.market_data.ath_change_percentage[currency].toFixed(
                      2
                    )}
                    %
                  </span>
                  <br />
                  <small>
                    {athDate.toDateString().slice(4)} {diff(athDate)}
                  </small>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <span>All-Time Low</span>
              </th>
              <td>
                <span>
                  {priceFormatter(currency)(coin.market_data.atl[currency])}{' '}
                  <span
                    style={{
                      color: colorChanger(
                        coin.market_data.atl_change_percentage[currency]
                      ),
                    }}
                  >
                    {coin.market_data.atl_change_percentage[currency].toFixed(
                      2
                    )}
                    %
                  </span>
                  <br />
                  <small>
                    {atlDate.toDateString().slice(4)} {diff(atlDate)}
                  </small>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
