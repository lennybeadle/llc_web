import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleRefuse = () => {
    localStorage.setItem('cookieConsent', 'refused');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={styles.container}>
      <p className={styles.text}>
        This site uses cookies to offer you a better browsing experience. Find
        out more on <a href="/privacy-policy">how we use cookies</a> and{' '}
        <a href="/consent-policy">how you can change your settings</a>.
      </p>
      <div className={styles.buttons}>
        <button className={styles.acceptButton} onClick={handleAccept}>
          I accept cookies
        </button>
        <button className={styles.refuseButton} onClick={handleRefuse}>
          I refuse cookies
        </button>
      </div>
    </div>
  );
};
export default CookieConsent;
