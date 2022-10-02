import { isAuth } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

export const useAuth = () => {
    const result = useSelector(isAuth);
    return result
}