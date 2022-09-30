import styles from './navbar-auth.module.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isAuth } from '../../../redux/auth/auth-selectors';
const NavbarAuth = () => {
     const isLoggedIn = useSelector(isAuth);
    return (
        <div>
           {!isLoggedIn && <NavLink to='/register'>Register</NavLink>} 
            |
             {!isLoggedIn && <NavLink to='/login'>Login</NavLink>} 
            
        </div>
    )
}
export default NavbarAuth;