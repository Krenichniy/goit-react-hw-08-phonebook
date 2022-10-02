import { useAuth } from '../../helpers/hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';
export const PrivateRoute = () => {
    const isLogin = useAuth();
       if (!isLogin) {
        return <Navigate to='/login'/>
    }
    return <Outlet/>
}