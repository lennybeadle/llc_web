import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './styles.module.css';
import LogoIcon from '../../../assets/images/logos/logo.svg';
import PersonIcon from '../../../assets/images/icons/person.svg';
export const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
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
            <div
              className={isActive('/') ? styles.activeNavItem : styles.navItem}
            >
              <div className={styles.navText}>
                <Link to="/">Home</Link>
              </div>
              {isActive('/') && <div className={styles.activeIndicator} />}
            </div>
            <div
              className={
                isActive('/services') ? styles.activeNavItem : styles.navItem
              }
            >
              <div className={styles.navText}>
                <Link to="/services">Services</Link>
              </div>
              {isActive('/services') && (
                <div className={styles.activeIndicator} />
              )}
            </div>
            <div
              className={
                isActive('/about') ? styles.activeNavItem : styles.navItem
              }
            >
              <div className={styles.navText}>
                <Link to="/about">About</Link>
              </div>
              {isActive('/about') && <div className={styles.activeIndicator} />}
            </div>
            <div
              className={
                isActive('/blog') ? styles.activeNavItem : styles.navItem
              }
            >
              <div className={styles.navText}>
                <Link to="/blog">Blog</Link>
              </div>
              {isActive('/blog') && <div className={styles.activeIndicator} />}
            </div>
            <div
              className={
                isActive('/contact') ? styles.activeNavItem : styles.navItem
              }
            >
              <div className={styles.navText}>
                <Link to="/contact">Contact</Link>
              </div>
              {isActive('/contact') && (
                <div className={styles.activeIndicator} />
              )}
            </div>
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
