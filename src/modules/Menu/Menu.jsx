import { NavLink } from 'react-router-dom';
import styles from './menu.module.css';
const getClassName = ({ isActive }) => {
    const className = isActive ? `${styles.link} ${styles.active}`: `${styles.link}`;
    return className;
}
export const Menu = () => {
    return (
        <div className={styles.wrapper}>
            <ul>
                <li>
                    <NavLink className={getClassName} to='/'>Home</NavLink>
                </li>
                 <li>
                <NavLink className={getClassName} to='/movies'>Movies</NavLink>
                </li>
            </ul>

            <div className={styles.logo}>
                    <a href="https://www.themoviedb.org/" referrerPolicy="no-referrer" alt="API site">
                        <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="logo" /></a>
                </div>
        </div>
      
        )
}