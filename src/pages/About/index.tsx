import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../../components/molecules/Header';
import { Footer } from '../../components/organisms/Footer';
import styles from './styles.module.css';
import Transform from '../../components/organisms/Transform';
import Innovation from '../../components/organisms/Innovation';
import { BreadcrumbNav } from '../../components/molecules/BreadcrumbNav';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className={styles.mainContainer}>
      <Helmet>
        <title>About | LLC Tech</title>
      </Helmet>
      <Header />
      {/* <TeamSection /> */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroTitleContent}>
            <BreadcrumbNav subTitle="About" />
            <div className={styles.heroSubText}>
              <div className={styles.heroSubtitle}>
                <span style={{ fontWeight: 'bold', display: 'block' }}>
                  Rooted <span style={{ fontWeight: 'normal' }}>in</span> Passion Built <span style={{ fontWeight: 'normal' }}>for</span> Innovation
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Innovation />
      <Transform />

      <Footer />
    </main>
  );
};

export default About;
