import { Helmet } from 'react-helmet-async';

import { Header } from '../../components/molecules/Header';
import { Footer } from '../../components/organisms/Footer';
import MissionSection from '../../components/organisms/MissionSection';
import MissionImage from '../../assets/images/backgrounds/mission.svg';
import styles from './styles.module.css';
import DigitalSolutions from '../../components/organisms/DigitalSolutions';
import { Advertise } from '../../components/molecules/Advertise';
import DropBoxIcon from '../../assets/images/icons/dropbox.svg';
import SlackIcon from '../../assets/images/icons/slack.svg';
import ShopifyIcon from '../../assets/images/icons/shopify.svg';
import GoogleIcon from '../../assets/images/icons/google.svg';
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
              </div>
              <div className={styles.heroSubtext}>
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
        images={[SlackIcon, DropBoxIcon, ShopifyIcon, GoogleIcon]}
        digital={200}
        text={'Trusted Companies'}
      />
      <Footer />
    </main>
  );
};

export default Services;
