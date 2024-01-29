import React from 'react';
import styles from './Header.module.scss';
import loop from '../../assets/img/search.svg'
import logo from '../../assets/img/icons_book.png';

const Header = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.logo_block}>
                    <img src={logo} alt="logo" />
                    <p className={styles.app_name}>Learn English Words</p>
                </div>
                <div className={styles.nav_block}>
                    <a href="/">
                        <img src={loop} alt="search_loop" />
                    </a>
                    <a href="/">Log in</a>
                    <a href="/">Sign Up</a>
                </div>
            </div>
        </>
    )
}

export default Header;