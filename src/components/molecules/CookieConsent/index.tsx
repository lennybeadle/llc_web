import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import CookieIcon from '../../../assets/images/icons/cookies-V2.webp';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isManagePopupVisible, setIsManagePopupVisible] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    performance: false,
    functional: false,
    advertising: false,
  });

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setIsVisible(false);
  };

  const handleManage = () => {
    setIsManagePopupVisible(true);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setIsManagePopupVisible(false);
    setIsVisible(false);
  };

  const handleCancelPreferences = () => {
    setIsManagePopupVisible(false);
  };

  const togglePreference = (key: keyof typeof preferences) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      {/* Cookie Banner */}
      {isVisible && !isManagePopupVisible && (
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.titleContainer}>
              <h3 className={styles.title}>Guess what? Cookies!</h3>
              <img
                src={CookieIcon}
                alt="Cookie Icon"
                className={styles.cookieIcon}
              />
            </div>
            <p className={styles.text}>
              We use essential cookies to offer you a better experience. We'd
              like to use other cookies to analyze our website's performance and
              personalize ads, but only if you accept. Learn more about your
              choices in our{' '}
              <a href="/consent-policy">cookie policy</a>.
            </p>
            <div className={styles.buttons}>
              <button className={styles.acceptButton} onClick={handleAccept}>
                Accept All
              </button>
              <button className={styles.manageButton} onClick={handleManage}>
                Manage Cookies
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Manage Cookies Popup */}
      {isManagePopupVisible && (
        <div className={styles.managePopup}>
          <h3 className={styles.manageTitle}>Manage Your Cookie Preferences</h3>
          <div className={styles.manageOptions}>
            <div className={styles.preferenceRow}>
              <label className={styles.preferenceLabel}>
                <input
                  type="checkbox"
                  checked={preferences.essential}
                  disabled
                />
                Essential Cookies
              </label>
              <p className={styles.preferenceDescription}>
                Necessary for the website to function properly, such as enabling
                secure logins.
              </p>
            </div>
            <div className={styles.preferenceRow}>
              <label className={styles.preferenceLabel}>
                <input
                  type="checkbox"
                  checked={preferences.performance}
                  onChange={() => togglePreference('performance')}
                />
                Performance Cookies
              </label>
              <p className={styles.preferenceDescription}>
                Help us understand how visitors interact with our site,
                improving its performance and usability.
              </p>
            </div>
            <div className={styles.preferenceRow}>
              <label className={styles.preferenceLabel}>
                <input
                  type="checkbox"
                  checked={preferences.functional}
                  onChange={() => togglePreference('functional')}
                />
                Functional Cookies
              </label>
              <p className={styles.preferenceDescription}>
                Remember your preferences, such as language settings and login
                details.
              </p>
            </div>
            <div className={styles.preferenceRow}>
              <label className={styles.preferenceLabel}>
                <input
                  type="checkbox"
                  checked={preferences.advertising}
                  onChange={() => togglePreference('advertising')}
                />
                Advertising Cookies
              </label>
              <p className={styles.preferenceDescription}>
                Deliver personalized ads and measure their effectiveness.
              </p>
            </div>
          </div>
          <div className={styles.manageButtons}>
            <button
              className={styles.saveButton}
              onClick={handleSavePreferences}
            >
              Save Preferences
            </button>
            <button
              className={styles.cancelButton}
              onClick={handleCancelPreferences}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;