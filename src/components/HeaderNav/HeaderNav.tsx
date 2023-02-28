import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import './HeaderNav.scss';

export const HeaderNav = () => {
   return (
      <nav className="header__nav">
         <Link to={ROUTES.MAIN}>
            <span className="nav__link-text">Cryptocurrencies</span>
         </Link>
         <Link to={ROUTES.EXCHANGES}>
            <span className="nav__link-text">Exchanges</span>
         </Link>
         <Link to={ROUTES.CONVERTER}>
            <span className="nav__link-text">Converter</span>
         </Link>
      </nav>
   );
};
