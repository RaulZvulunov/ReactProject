import { Routes, Route } from 'react-router-dom';
import ROUTES from './routesModel';
import AboutPage from '../pages/AboutPage';
import CardsPage from '../cards/pages/CardsPage';
import ErrorPage from '../pages/ErrorPage';
import SignupPage from '../users/pages/SignupPage';
import LoginPage from '../users/pages/LoginPage';
import CardDetailsPage from '../cards/pages/CardDetailsPage';
import MyCardsPage from '../cards/pages/MyCardsPage';
import CreateCardPage from '../cards/pages/CreateCardPage';
import EditCardPage from '../cards/pages/EditCardPage';
import FavCardsPage from '../cards/pages/FavCardsPage';

const Router = () => {
    return (
        <Routes>
            <Route path={ROUTES.FAV_CARDS} element={<FavCardsPage />}></Route>
            <Route path={ROUTES.CREATE_CARD} element={<CreateCardPage />}></Route>
            <Route path={ROUTES.MY_CARDS} element={<MyCardsPage />}></Route>
            <Route path={ROUTES.ABOUT} element={<AboutPage />}></Route>
            <Route path={ROUTES.CARDS} element={<CardsPage />}></Route>
            <Route path={`${ROUTES.CARD_DETAILS}/:id`} element={<CardDetailsPage />}></Route>
            <Route path={`${ROUTES.EDIT_CARD}/:id`} element={<EditCardPage />}></Route>
            <Route path={ROUTES.SIGNUP} element={<SignupPage />}></Route>
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />

            
            <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
    );
}

export default Router;