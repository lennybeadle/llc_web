import { Header } from '../../components/molecules/Header';
import { Footer } from '../../components/organisms/Footer';
import styles from './styles.module.css';
import Transform from '../../components/organisms/Transform';
import PlayVideoImage from '../../assets/images/backgrounds/playVideo.svg';
import AboutImage from '../../assets/images/backgrounds/About.svg';
import Innovation from '../../components/organisms/Innovation';
import cluster from 'cluster';
import { BreadcrumbNav } from '../../components/molecules/BreadcrumbNav';

const About = () => {
  return (
    <main className={styles.mainContainer}>
      <Header />
      {/* <TeamSection /> */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroTitleContent}>
            <BreadcrumbNav subTitle="About" />
            <span className={styles.heroSubtitle}>
              <span style={{ fontWeight: 'bold' }}> Passion</span>in
              <span style={{ fontWeight: 'bold' }}>Rooted </span>
            </span>
            <span className={styles.heroSubtitle}>
              <span style={{ fontWeight: 'bold' }}> Built</span>Innovation
              <span style={{ fontWeight: 'bold' }}>for </span>
            </span>
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
