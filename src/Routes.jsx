import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from 'components/Loader';
const Homepage = lazy(() => import("pages/Homepage/Homepage"));
// const Movies = lazy(() => import("pages/Movies/Movies"));
// const MovieById = lazy(() => import('./pages/MovieById/MovieById'));
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const PhoneBookPage = lazy(() => import("./pages/PhoneBookPage/PhoneBookPage"));

export const UserRoutes = () => {
    return (
        <Suspense fallback={<Loader/>}>
        <Routes>
                <Route path='/' element={<Homepage />}></Route>
                <Route path='/register' element={<RegisterPage />}></Route>
                <Route path='/login' element={<LoginPage />}></Route>
                 <Route path='/contacts' element={<PhoneBookPage />}></Route>
            {/* <Route path='/movies' element={<Movies />}></Route>
            <Route path='/movies/:id' element={<MovieById />}>
                
            </Route> */}
            <Route path ='*' element={<Homepage/>}></Route>
        </Routes>
        </Suspense>
    )
}