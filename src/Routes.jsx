import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from 'components/Loader';
import { PrivateRoute } from './modules/PrivateRoute/PrivateRoute';
import {PublicRoute} from './modules/PublicRoute/PublicRoute'
const Homepage = lazy(() => import("pages/Homepage/Homepage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const PhoneBookPage = lazy(() => import("./pages/PhoneBookPage/PhoneBookPage"));

export const UserRoutes = () => {
    return (
        <Suspense fallback={<Loader/>}>
            <Routes>
                <Route element={<PublicRoute />}>
                    <Route path='/home' element={<Homepage />}></Route>
                    <Route path='/register' element={<RegisterPage />}></Route>
                    <Route path='/login' element={<LoginPage />}></Route>
                </Route>
                <Route element={<PrivateRoute />}>
                    <Route path='/contacts' element={<PhoneBookPage />}></Route>
                </Route>
                 
            {/* <Route path='/movies' element={<Movies />}></Route>
            <Route path='/movies/:id' element={<MovieById />}>
                
            </Route> */}
            <Route path ='*' element={<Homepage/>}></Route>
        </Routes>
        </Suspense>
    )
}