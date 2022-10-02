import {Link } from 'react-router-dom';
import styles from './navbar.module.css';
import NavbarMenu from './NavbarMenu/NavbarMenu';
import NavbarAuth from './NavbarAuth/NavbarAuth';
import { UserMenu } from '../../components/UserMenu/UserMenu';
import { isAuth } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
export const Navbar = () => {
         const isLoggedIn = useSelector(isAuth);
    return (
        <div className={styles.wrapper}>
            <Link to='/' className={styles.logo}>
                <img src="https://previews.123rf.com/images/alexwhite/alexwhite1304/alexwhite130405542/19302763-phonebook-black-circle-web-glossy-icon.jpg" width='150' height='150' alt="logo" />
            </Link>
            <NavbarMenu/>
            {isLoggedIn ? <UserMenu/> : <NavbarAuth />}
            
        </div>
        )
}