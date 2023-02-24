import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { MainPage } from '../../pages/MainPage';
import { CoinsPage } from '../../pages/CoinsPage';
import { ExchangesPage } from '../../pages/ExchangesPage';
import { ConverterPage } from '../../pages/ConverterPage';
import { NotFoundPage } from '../../pages/NotFoundPage';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { UpButton } from '../UpButton';
import '../App/App.scss'

export const App = () => {
   return (
      <div className="app">
         <Header />
         <main className="main">
            <div className="_container">
               <Routes>
                  <Route path={ROUTES.MAIN} element={<MainPage />} />
                  <Route path={`${ROUTES.COINS}/:id`} element={<CoinsPage />} />
                  <Route path={ROUTES.EXCHANGES} element={<ExchangesPage />} />
                  <Route path={ROUTES.CONVERTER} element={<ConverterPage />} />
                  <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
               </Routes>
            </div>
         </main>
         <Footer />
         <UpButton />
      </div>
   );
};
