import React, { useState, useEffect, useRef } from 'react';
import {
  Drawer,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import styles from './styles.module.css';
import LogoIcon from '../../../assets/images/logos/logo.svg';
import PersonIcon from '../../../assets/images/icons/person.svg';

export const Header = ({ type = 'icon' }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Track whether the drawer is open
  const [menuOpen, setMenuOpen] = useState(false);
  // Track which nav item is hovered
  const [hoveredPath, setHoveredPath] = useState<string>('');
  // Track whether user has scrolled
  const [scrolled, setScrolled] = useState(false);
  // We'll measure the header's height to insert a placeholder
  const [headerHeight, setHeaderHeight] = useState(0);

  // Ref to measure the header element
  const headerRef = useRef<HTMLDivElement | null>(null);

  // After mount, measure the header and add scroll listener
  useEffect(() => {
    if (headerRef.current) {
      // measure initial height
      setHeaderHeight(headerRef.current.offsetHeight);
    }

    const handleScroll = () => {
      // If window is scrolled down any amount, set scrolled = true
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle the drawer open/closed
  const toggleDrawer =
    (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      // Close drawer for Tab or Shift+Tab
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setMenuOpen(open);
    };

  // Helpers for active/hover states
  const isActive = (path: string) => location.pathname === path;
  const handleMouseEnter = (path: string) => setHoveredPath(path);
  const handleMouseLeave = () => setHoveredPath('');

  // Decide CSS classes for the header
  const headerClass = scrolled
    ? `${styles.header} ${styles.scrolled}`
    : styles.header;

  return (
    <>
      {/* Insert a placeholder ONLY when scrolled, matching header's height
          so the layout doesn't jump when header becomes fixed */}
      {scrolled && <div style={{ height: headerHeight }} />}

      {/* The actual header */}
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

          {/* If mobile, show the menu icon for drawer */}
          {isMobile && (
            <IconButton
              onClick={toggleDrawer(true)}
              aria-label="open navigation menu"
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* Navbar Links */}
          <nav className={styles.navigation}>
            <div className={styles.navGroup}>

              {/* Services Link */}
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
                    (isActive('/services') || hoveredPath === '/services')
                      ? `${styles.activeIndicator} ${styles.expanded}`
                      : styles.activeIndicator
                  }
                />
              </Link>

              {/* About Link */}
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
                    (isActive('/about') || hoveredPath === '/about')
                      ? `${styles.activeIndicator} ${styles.expanded}`
                      : styles.activeIndicator
                  }
                />
              </Link>

              {/* Case Studies Link */}
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
                    (isActive('/case-studies') || hoveredPath === '/case-studies')
                      ? `${styles.activeIndicator} ${styles.expanded}`
                      : styles.activeIndicator
                  }
                />
              </Link>

              {/* Blog Link */}
              <Link
                to="/blog"
                className={isActive('/blog') ? styles.activeNavItem : styles.navItem}
                onMouseEnter={() => handleMouseEnter('/blog')}
                onMouseLeave={handleMouseLeave}
              >
                <div className={styles.navText}>Blog</div>
                <div
                  className={
                    (isActive('/blog') || hoveredPath === '/blog')
                      ? `${styles.activeIndicator} ${styles.expanded}`
                      : styles.activeIndicator
                  }
                />
              </Link>

              {/* Contact Link */}
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
                    (isActive('/contact') || hoveredPath === '/contact')
                      ? `${styles.activeIndicator} ${styles.expanded}`
                      : styles.activeIndicator
                  }
                />
              </Link>
            </div>
          </nav>

          {/* Actions (Login + CTA Button) */}
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
            <button className={styles.ctaButton} onClick={() => navigate('/contact')}>
              Get in Touch
            </button>
          </div>

          {/* Drawer for Mobile */}
          <Drawer anchor="right" open={menuOpen} onClose={toggleDrawer(false)}>
            <div
              style={{
                width: 250,
                display: 'flex',
                flexDirection: 'column',
                padding: '20px',
              }}
              role="presentation"
              onClick={toggleDrawer(false)} // Close menu on click
              onKeyDown={toggleDrawer(false)} // Close menu on keydown
            >
              <List>
                <ListItem component="a" href="/services">
                  <ListItemText primary="Services" />
                </ListItem>
                <ListItem component="a" href="/about">
                  <ListItemText primary="About" />
                </ListItem>
                <ListItem component="a" href="/caseStudies">
                  <ListItemText primary="Case Studies" />
                </ListItem>
                <ListItem component="a" href="/blog">
                  <ListItemText primary="Blog" />
                </ListItem>
                <ListItem component="a" href="/contact">
                  <ListItemText primary="Contact" />
                </ListItem>
              </List>
              <Button
                variant="outlined"
                style={{
                  backgroundColor: '#fff',
                  color: '#2f2207',
                  marginTop: 'auto',
                  borderRadius: '15px',
                  fontWeight: '500',
                  padding: '10px 20px',
                }}
              >
                Login
              </Button>
              <Button
                variant="contained"
                style={{
                  backgroundColor: '#ffd800',
                  color: '#2f2207',
                  marginTop: '10px',
                  borderRadius: '15px',
                  fontWeight: '500',
                  padding: '10px 20px',
                }}
                component={Link}
                to="/contact"
              >
                Get in Touch
              </Button>
            </div>
          </Drawer>
        </div>
      </header>
    </>
  );
};