import React from 'react';
import styles from './styles.module.css';
import LogoIcon from '../../../assets/images/logos/logo.svg';
import PersonIcon from '../../../assets/images/icons/person.svg';
export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <img
          loading="lazy"
          src={LogoIcon}
          className={styles.logo}
          alt="LLC Tech company logo"
        />
        <nav className={styles.navigation}>
          <div className={styles.navGroup}>
            <div className={styles.activeNavItem}>
              <div className={styles.navText}>Home</div>
              <div className={styles.activeIndicator} />
            </div>
            <div className={styles.navItem}>Services</div>
            <div className={styles.navItem}>About</div>
            <div className={styles.navItem}>Blog</div>
            <div className={styles.navItem}>Contact</div>
          </div>
        </nav>
        <div className={styles.actions}>
          <div className={styles.loginGroup}>
            <img
              loading="lazy"
              src={PersonIcon}
              className={styles.loginIcon}
              alt=""
            />
            <div className={styles.loginText}>Login</div>
          </div>
          <button className={styles.ctaButton}>Get in Touch</button>
        </div>
      </div>
    </header>
  );
};
