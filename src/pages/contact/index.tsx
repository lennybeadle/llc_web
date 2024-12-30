import { useEffect } from 'react';
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
                      {/* Link to Google Maps or Apple Maps */}
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=10+Pipit+Drive+London+-+SW15+3AP"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        10 Pipit Drive London - SW15 3AP
                      </a>
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
                    {/* Wrap the email in an <a> tag with mailto: */}
                    <p className={styles.contentFormat}>
                      <a href="mailto:saket@llctech.co.uk">
                        saket@llctech.co.uk
                      </a>
                    </p>
                  </div>
                </div>

                <div className={styles.contactBox}>
                  <div className={styles.contactIcon}>
                    <img src={PhoneIcon} alt="contact" />
                  </div>
                  <div className={styles.contactSubTitle}>
                    <h5 className={styles.subTitleFormat}>Phone Number</h5>
                  </div>
                  <div className={styles.contactContent}>
                    {/* Wrap the phone number in an <a> tag with tel: */}
                    <p className={styles.contentFormat}>
                      <a href="tel:+447380185860">+44 7380 185860</a>
                    </p>
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
