import styles from '../../modules/Navbar/NavbarMenu/navbarmenu.module.css';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { isAuth } from '../../redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';
import { Navigate } from 'react-router-dom';
import { getUser } from '../../redux/auth/auth-selectors';
export const UserMenu = () => {
    const dispatch = useDispatch();
    const isLogin = useSelector(isAuth);
    const {name, email} = useSelector(getUser)
   if (!isLogin) {
        return <Navigate to='/home'/>
    }
      const onLogOut = (data) => {
        dispatch(logOut(data))
    }
    return (
        <div>
            <p>{name}</p>
            <p>{email}</p>
            <button onClick={onLogOut} className={styles.link}>Logout</button>
        </div>)
}