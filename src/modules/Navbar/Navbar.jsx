import {Link } from 'react-router-dom';
import styles from './navbar.module.css';
import NavbarMenu from './NavbarMenu/NavbarMenu';
import NavbarAuth from './NavbarAuth/NavbarAuth'
export const Navbar = () => {
    return (
        <div className={styles.wrapper}>
            <Link to='/' className={styles.logo}>
                <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="logo" />
            </Link>
            <NavbarMenu/>
            <NavbarAuth/>
        </div>
        )
}