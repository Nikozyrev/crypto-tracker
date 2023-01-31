import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { MainPage } from "../../pages/MainPage";
import { CoinsPage } from "../../pages/CoinsPage";
import { ExchangesPage } from "../../pages/ExchangesPage";
import { NotFoundPage } from "../../pages/NotFoundPage";

export const App = () => {

  return (
    <div className="app">
      <Routes>
        <Route path={ROUTES.MAIN} element={ <MainPage/> } />
        <Route path={`${ROUTES.COINS}/:id`} element={ <CoinsPage/> } />
        <Route path={ROUTES.EXCHANGES} element={ <ExchangesPage/> } />
        <Route path={ROUTES.NOT_FOUND} element={ <NotFoundPage/> } />
      </Routes>
    </div>
  );
}
