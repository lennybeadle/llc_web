import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
import styles from './styles.module.css';
import LogoIcon from '../../../assets/images/logos/logo.svg';
import PersonIcon from '../../../assets/images/icons/person.svg';

export const Header = ({ type = 'icon' }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const toggleDrawer =
    (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent): void => {
      // Close drawer for certain key events
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setMenuOpen(open);
    };

  const isActive = (path: string) => location.pathname === path;
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <img
          loading="lazy"
          src={LogoIcon}
          className={styles.logo}
          alt="LLC Tech company logo"
          onClick={() => navigate('/')}
        />

        {isMobile && (
          <IconButton
            onClick={toggleDrawer(true)}
            aria-label="open navigation menu"
          >
            <MenuIcon />
          </IconButton>
        )}

        <nav className={styles.navigation}>
          <div className={styles.navGroup}>
            {/* <div
              className={isActive('/') ? styles.activeNavItem : styles.navItem}
            >
              <div className={styles.navText}>
                <Link to="/">Home</Link>
              </div>
              {isActive('/') && <div className={styles.activeIndicator} />}
            </div> */}
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
                isActive('/caseStudies') ? styles.activeNavItem : styles.navItem
              }
            >
              <div className={styles.navText}>
                <Link to="/caseStudies">Case Studies</Link>
              </div>
              {isActive('/caseStudies') && (
                <div className={styles.activeIndicator} />
              )}
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
          <button
            className={styles.ctaButton}
            onClick={() => navigate('/contact')}
          >
            Get in Touch
          </button>
        </div>

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
  );
};
