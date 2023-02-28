import { CurrencySelect } from '../CurrencySelect';
import { HeaderNav } from '../HeaderNav';
import { CoinSearch } from '../CoinSearch';
import { HeaderGlobalData } from '../HeaderGlobalData';
import logo from '../../assets/img/logo.png';
import './Header.scss';

export const Header = () => {
   return (
      <header className="header">
         <div className="_container">
            <div className="header_above-panel">
               <HeaderGlobalData />
               <CurrencySelect />
            </div>
         </div>
         <div className="header_below-panel">
            <div className="below-panel__container _container">
               <a
                  className="header__logo"
                  href="https://www.coingecko.com/en/api/documentation"
                  target="_blank"
               >
                  <img className="logo__img" src={logo} alt="logo" />
                  <span className="logo__api">API</span>
               </a>
               <HeaderNav />
               <CoinSearch />
            </div>
         </div>
      </header>
   );
};
