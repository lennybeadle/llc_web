import { Header } from '../../components/molecules/Header';
import { Footer } from '../../components/organisms/Footer';
import styles from './styles.module.css';
import Transform from '../../components/organisms/Transform';
import PlayVideoImage from '../../assets/images/backgrounds/playVideo.svg';
import AboutImage from '../../assets/images/backgrounds/About.svg';
import Innovation from '../../components/organisms/Innovation';

const About = () => {
  return (
    <main className={styles.mainContainer}>
      <Header />
      {/* <TeamSection /> */}
      <section className={styles.heroSection}>
        <img src={AboutImage} alt="about" className={styles.heroSectionImage} />
      </section>
      <Innovation />
      <Transform image={PlayVideoImage} />

      <Footer />
    </main>
  );
};

export default About;
