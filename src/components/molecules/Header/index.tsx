import React, { useState, useEffect, useRef } from 'react';
import {
  IconButton,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import styles from './styles.module.css';
import LogoIcon from '../../../assets/images/logos/logo.svg';
import WhiteLogoIcon from '../../../assets/images/logos/white-logo.svg';

export const Header = ({ type = 'icon' }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [hoveredPath, setHoveredPath] = useState<string>('');

  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }

    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const isActive = (path: string) => location.pathname === path;

  const headerClass = scrolled
    ? `${styles.header} ${styles.scrolled}`
    : styles.header;

  const handleMouseEnter = (path: string) => setHoveredPath(path);
  const handleMouseLeave = () => setHoveredPath('');
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      {scrolled && <div style={{ height: headerHeight }} />}
      <header ref={headerRef} className={headerClass}>
        <div className={styles.headerContainer}>
          {/* Logo */}
          <img
            loading="lazy"
            src={LogoIcon}
            className={styles.logo}
            alt="LLC Tech company logo"
            onClick={() => navigate('/')}
          />

          {/* Navigation */}
          {isMobile ? (
            <IconButton onClick={toggleMenu} aria-label="open navigation menu">
              <MenuIcon />
            </IconButton>
          ) : (
            <nav className={styles.navigation}>
              <div className={styles.navGroup}>
                <Link
                  to="/services"
                  className={
                    isActive('/services') ? styles.activeNavItem : styles.navItem
                  }
                  onMouseEnter={() => handleMouseEnter('/services')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className={styles.navText}>Services</div>
                  <div
                    className={
                      isActive('/services') || hoveredPath === '/services'
                        ? `${styles.activeIndicator} ${styles.expanded}`
                        : styles.activeIndicator
                    }
                  />
                </Link>

                <Link
                  to="/about"
                  className={
                    isActive('/about') ? styles.activeNavItem : styles.navItem
                  }
                  onMouseEnter={() => handleMouseEnter('/about')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className={styles.navText}>About</div>
                  <div
                    className={
                      isActive('/about') || hoveredPath === '/about'
                        ? `${styles.activeIndicator} ${styles.expanded}`
                        : styles.activeIndicator
                    }
                  />
                </Link>

                <Link
                  to="/case-studies"
                  className={
                    isActive('/case-studies')
                      ? styles.activeNavItem
                      : styles.navItem
                  }
                  onMouseEnter={() => handleMouseEnter('/case-studies')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className={styles.navText}>Case Studies</div>
                  <div
                    className={
                      isActive('/case-studies') || hoveredPath === '/case-studies'
                        ? `${styles.activeIndicator} ${styles.expanded}`
                        : styles.activeIndicator
                    }
                  />
                </Link>

                <Link
                  to="/blog"
                  className={
                    isActive('/blog') ? styles.activeNavItem : styles.navItem
                  }
                  onMouseEnter={() => handleMouseEnter('/blog')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className={styles.navText}>Blog</div>
                  <div
                    className={
                      isActive('/blog') || hoveredPath === '/blog'
                        ? `${styles.activeIndicator} ${styles.expanded}`
                        : styles.activeIndicator
                    }
                  />
                </Link>

                <Link
                  to="/contact"
                  className={
                    isActive('/contact') ? styles.activeNavItem : styles.navItem
                  }
                  onMouseEnter={() => handleMouseEnter('/contact')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className={styles.navText}>Contact</div>
                  <div
                    className={
                      isActive('/contact') || hoveredPath === '/contact'
                        ? `${styles.activeIndicator} ${styles.expanded}`
                        : styles.activeIndicator
                    }
                  />
                </Link>
              </div>
            </nav>
          )}

          {/* Actions */}
          {!isMobile && (
            <div className={styles.actions}>
              <button
                className={styles.ctaButton}
                onClick={() => navigate('/contact')}
              >
                Get in Touch
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Full-Screen Overlay Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
        {/* White Logo Above Links */}
        <img
          loading="lazy"
          src={WhiteLogoIcon}
          className={styles.mobileLogo}
          alt="LLC Tech white logo"
          onClick={() => {
            closeMenu();
            navigate('/');
          }}
        />

        {/* Close Button (Hamburger Icon) */}
        <IconButton
          onClick={toggleMenu}
          className={`${styles.hamburgerIcon} ${menuOpen ? styles.open : ''}`}
          aria-label="toggle navigation menu"
        >
          <span className={styles.hamburgerBar} />
          <span className={styles.hamburgerBar} />
          <span className={styles.hamburgerBar} />
        </IconButton>

        {/* Menu Links */}
        <div className={styles.mobileMenuLinks}>
          <Link
            to="/services"
            className={isActive('/services') ? styles.activeMobileNavItem : ''}
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            to="/about"
            className={isActive('/about') ? styles.activeMobileNavItem : ''}
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="/case-studies"
            className={isActive('/case-studies') ? styles.activeMobileNavItem : ''}
            onClick={closeMenu}
          >
            Case Studies
          </Link>
          <Link
            to="/blog"
            className={isActive('/blog') ? styles.activeMobileNavItem : ''}
            onClick={closeMenu}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className={isActive('/contact') ? styles.activeMobileNavItem : ''}
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <button
          className={styles.mobileCtaButton}
          onClick={() => {
            closeMenu();
            navigate('/contact');
          }}
        >
          Get in Touch
        </button>
      </div>
    </>
  );
};