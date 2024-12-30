import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../../components/molecules/Header';
import { Footer } from '../../components/organisms/Footer';
import MissionSection from '../../components/organisms/MissionSection';
import MissionImage from '../../assets/images/backgrounds/mission.svg';
import styles from './styles.module.css';
import DigitalSolutions from '../../components/organisms/DigitalSolutions';
import { Advertise } from '../../components/molecules/Advertise';
import JoinPiggyIcon from '../../assets/images/icons/joinpiggy.svg';
import KlarnaIcon from '../../assets/images/icons/klarna.svg';
import LunaIcon from '../../assets/images/icons/luna.svg';
import BananaIcon from '../../assets/images/icons/banana.svg';
import ItrexIcon from '../../assets/images/icons/itrex.svg';
import { Accreditation } from '../../components/organisms/Accreditation';
import { BreadcrumbNav } from '../../components/molecules/BreadcrumbNav';
const missionData = [
  {
    label: 'Years of Industry Experience',
    percentage: 40,
  },
  {
    label: 'Projects Served',
    percentage: 50,
  },
  {
    label: 'Satisfaction',
    percentage: 100,
  },
];
const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className={styles.mainContainer}>
      <Helmet>
        <title>Services | LLC Tech</title>
      </Helmet>
      <Header />
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroTitleContent}>
            <BreadcrumbNav subTitle="services" />
            <span className={styles.heroSubtitle}>
              <div className={styles.heroSubtext}>
                <span style={{ fontWeight: 'bold' }}>Smart Solutions </span>for
                Your <span style={{ fontWeight: 'bold' }}> Growth</span>
              </div>
            </span>
          </div>
        </div>
      </section>
      <DigitalSolutions />
      <Accreditation />
      <MissionSection image={MissionImage} skills={missionData} />
      <Advertise
        images={[KlarnaIcon, LunaIcon, BananaIcon, ItrexIcon, JoinPiggyIcon]}
        digital={200}
        text={'Trusted Companies'}
      />
      <Footer />
    </main>
  );
};

export default Services;
