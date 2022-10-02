import { useAuth } from '../../helpers/hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';
export const PublicRoute = () => {
    const isLogin = useAuth();
       if (isLogin) {
        return <Navigate to='/contacts'/>
    }
    return <Outlet/>
}