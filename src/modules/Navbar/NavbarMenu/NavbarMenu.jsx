import { NavLink } from 'react-router-dom';
import styles from './navbarmenu.module.css';
import { useSelector } from 'react-redux';
import { isAuth } from '../../../redux/auth/auth-selectors';
const getClassName = ({ isActive }) => {
    const className = isActive ? `${styles.link} ${styles.active}`: `${styles.link}`;
    return className;
}
const NavbarMenu = () => {
    const isLoggedIn = useSelector(isAuth);
    return (
        <div className={styles.wrapper}>
            <ul >
                  {!isLoggedIn &&    <li>
                    <NavLink className={getClassName} to='/home'>Home</NavLink>
                </li>}
                {isLoggedIn && <li>
                    <NavLink className={getClassName} to='/contacts'>Phonebook</NavLink>
                </li>}
            </ul>
        </div>
    )
    
}

export default NavbarMenu;