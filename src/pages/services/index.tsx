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
import StudyImage from '../../assets/images/backgrounds/service.svg';
const missionData = [
  {
    label: 'SEO',
    percentage: 80,
  },
  {
    label: 'Design',
    percentage: 90,
  },
  {
    label: 'Development',
    percentage: 87,
  },
];
const Services = () => {
  return (
    <main className={styles.mainContainer}>
      <Header />
      <section className={styles.heroSection}>
        <img src={StudyImage} alt="services" />
      </section>
      <DigitalSolutions />
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
