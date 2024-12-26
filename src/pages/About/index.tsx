import { Helmet } from 'react-helmet-async';

import { Header } from '../../components/molecules/Header';
import { Footer } from '../../components/organisms/Footer';
import styles from './styles.module.css';
import Transform from '../../components/organisms/Transform';
import PlayVideoImage from '../../assets/images/backgrounds/playVideo.svg';
import Innovation from '../../components/organisms/Innovation';
import { BreadcrumbNav } from '../../components/molecules/BreadcrumbNav';

const About = () => {
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
                <span style={{ fontWeight: 'bold' }}> Passion</span>in
                <span style={{ fontWeight: 'bold' }}>Rooted </span>
              </div>
              <div className={styles.heroSubtitle}>
                <span style={{ fontWeight: 'bold' }}> Built</span>for
                <span style={{ fontWeight: 'bold' }}>Innovation </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Innovation />
      <Transform image={PlayVideoImage} />

      <Footer />
    </main>
  );
};

export default About;
