import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { useDebounce } from '../../hooks/debounce';
import { useSearchCoinsQuery } from '../../store/coingecko/coingecko.api';
import './CoinSearch.scss';

export const CoinSearch = () => {
   const [inputFocus, setInputFocus] = useState(false);
   const [search, setSearch] = useState('');
   const [dropdown, setDropdown] = useState(false);
   const debounced = useDebounce(search, 500);
   const { data, isFetching } = useSearchCoinsQuery(debounced, {
      skip: debounced.length < 1,
   });

   useEffect(() => {
      setDropdown(inputFocus && !!data?.length);
   }, [inputFocus, data]);

   return (
      <div className="coin-search__container">
         <input
            className="coin-search__input"
            type="search"
            name="coin-search"
            id="coin-search"
            placeholder="Search"
            autoComplete="off"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setInputFocus(true)}
            onBlur={(e) =>
               e.relatedTarget?.closest('.coin-search__item') ||
               setInputFocus(false)
            }
         />
         {dropdown && (
            <ul className="coin-search__drop-down">
               {isFetching && <div>Loading...</div>}
               {data?.map((coin) => (
                  <li className="coin-search__item" key={coin.id}>
                     <Link
                        onClick={() => setSearch('')}
                        to={`${ROUTES.COINS}/${coin.id}`}
                     >
                        <img src={coin.thumb} alt="c" />
                        <span>{`${
                           coin.name
                        } (${coin.symbol.toUpperCase()})`}</span>
                        {coin.market_cap_rank && (
                           <span className="coin-search__rank">{`#${coin.market_cap_rank}`}</span>
                        )}
                     </Link>
                  </li>
               ))}
            </ul>
         )}
      </div>
   );
};
