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
  const [hoveredPath, setHoveredPath] = useState<string>('');
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
  const handleMouseEnter = (path: string) => {
    setHoveredPath(path);
  };

  const handleMouseLeave = () => {
    setHoveredPath('');
  };
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
              to="/caseStudies"
              className={
                isActive('/caseStudies') ? styles.activeNavItem : styles.navItem
              }
              onMouseEnter={() => handleMouseEnter('/caseStudies')}
              onMouseLeave={handleMouseLeave}
            >
              <div className={styles.navText}>Case Studies</div>
              <div
                className={
                  (isActive('/caseStudies') || hoveredPath === '/caseStudies')
                    ? `${styles.activeIndicator} ${styles.expanded}`
                    : styles.activeIndicator
                }
              />
            </Link>

            {/* Blog Link */}
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
