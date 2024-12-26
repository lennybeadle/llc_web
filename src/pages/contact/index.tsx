import { Helmet } from 'react-helmet-async';

import { Header } from '../../components/molecules/Header';
import { Footer } from '../../components/organisms/Footer';
import styles from './styles.module.css';

import { ContactForm } from '../../components/organisms/ContactForm';
import { BreadcrumbNav } from '../../components/molecules/BreadcrumbNav';
import AddressIcon from '../../assets/images/icons/address.svg';
import EmailIcon from '../../assets/images/icons/email.svg';
import PhoneIcon from '../../assets/images/icons/phone.svg';
const Contact = () => {
  return (
    <main className={styles.mainContainer}>
      <Helmet>
        <title>Contact | LLC Tech</title>
      </Helmet>
      <Header />
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroTitleContent}>
            <BreadcrumbNav subTitle="contact" />
            <span className={styles.heroSubtitle}>
              <div className={styles.heroSubtext}>
                Let's <span style={{ fontWeight: 'bold' }}> Collaborate</span>{' '}
                on
              </div>
              <div className={styles.heroSubtext}>
                Your Next<span style={{ fontWeight: 'bold' }}> Big Idea</span>
              </div>
            </span>
            <div className={styles.contactContainer}>
              <div className={styles.contactWrapper}>
                <div className={styles.contactBox}>
                  <div className={styles.contactIcon}>
                    <img src={AddressIcon} alt="contact" />
                  </div>
                  <div className={styles.contactSubTitle}>
                    <h5 className={styles.subTitleFormat}>Physical Address</h5>
                  </div>
                  <div className={styles.contactContent}>
                    <p className={styles.contentFormat}>
                      10 Pipit Drive London - SW15 3AP
                    </p>
                  </div>
                </div>
                <div className={styles.contactBox}>
                  <div className={styles.contactIcon}>
                    <img src={EmailIcon} alt="contact" />
                  </div>
                  <div className={styles.contactSubTitle}>
                    <h5 className={styles.subTitleFormat}>Email Address</h5>
                  </div>
                  <div className={styles.contactContent}>
                    <p className={styles.contentFormat}>saket@llctech.co.uk</p>
                  </div>
                </div>
                <div className={styles.contactBox}>
                  <div className={styles.contactIcon}>
                    <img src={PhoneIcon} alt="contact" />
                  </div>
                  <div className={styles.contactSubTitle}>
                    <h5 className={styles.subTitleFormat}>Phone Numbers</h5>
                  </div>
                  <div className={styles.contactContent}>
                    <p className={styles.contentFormat}>+44 0000 000 000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Contact;
