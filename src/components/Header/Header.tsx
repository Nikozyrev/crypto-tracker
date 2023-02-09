import { CurrencySelect } from '../CurrencySelect';
import { HeaderNav } from '../HeaderNav';
import { CoinSearch } from '../CoinSearch';
import './Header.scss';

export const Header = () => {
  return (
    <header className='header'>
      <div className="header_above-panel">
        <CurrencySelect/>
      </div>
      <div className="header_below-panel">
        <HeaderNav/>
        <CoinSearch/>
      </div>
    </header>
  );
}
