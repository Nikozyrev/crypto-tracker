import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { MainPage } from '../../pages/MainPage';
import { CoinsPage } from '../../pages/CoinsPage';
import { ExchangesPage } from '../../pages/ExchangesPage';
import { ConverterPage } from '../../pages/ConverterPage';
import { NotFoundPage } from '../../pages/NotFoundPage';
import { Header } from '../Header';
import { Footer } from '../Footer';

export const App = () => {
   return (
      <div className="app">
         <Header />
         <div className="_container">
            <Routes>
               <Route path={ROUTES.MAIN} element={<MainPage />} />
               <Route path={`${ROUTES.COINS}/:id`} element={<CoinsPage />} />
               <Route path={ROUTES.EXCHANGES} element={<ExchangesPage />} />
               <Route path={ROUTES.CONVERTER} element={<ConverterPage />} />
               <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
            </Routes>
         </div>
         <Footer />
      </div>
   );
};
