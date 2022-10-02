import styles from '../NavbarMenu/navbarmenu.module.css';
import { NavLink } from 'react-router-dom';
const NavbarAuth = () => {
    return (
        <div className={styles.nav_container}>
            <NavLink to='/register' className={styles.link}>Register</NavLink>
            <NavLink to='/login' className={styles.link}>Login</NavLink>
        </div>
    )
}
export default NavbarAuth;