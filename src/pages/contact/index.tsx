import { Header } from '../../components/molecules/Header';
import { Footer } from '../../components/organisms/Footer';
import styles from './styles.module.css';

import ContactImage from '../../assets/images/backgrounds/contact.svg';
import { ContactForm } from '../../components/organisms/ContactForm';
const Contact = () => {
  return (
    <main className={styles.mainContainer}>
      <Header />
      <section className={styles.heroSection}>
        <img
          src={ContactImage}
          alt="contact"
          className={styles.heroSectionImage}
        />
      </section>
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Contact;
