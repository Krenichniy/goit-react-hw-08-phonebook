import { NavLink } from 'react-router-dom';
import styles from './navbarmenu.module.css'
const getClassName = ({ isActive }) => {
    const className = isActive ? `${styles.link} ${styles.active}`: `${styles.link}`;
    return className;
}
const NavbarMenu = () => {
    return (
        <div>
              <ul>
                <li>
                    <NavLink className={getClassName} to='/'>Home</NavLink>
                </li>
                <li>
                    
                </li>
            </ul>
        </div>
    )
    
}

export default NavbarMenu;