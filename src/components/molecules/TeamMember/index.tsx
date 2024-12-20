import styles from './styles.module.css';
import FacebookIcon from '../../../assets/images/icons/facebook.svg';
import InstagramIcon from '../../../assets/images/icons/instagram.svg';
import TwitterIcon from '../../../assets/images/icons/twitter.svg';
interface TeamMemberProp {
  image: string;
  name: string;
  role: string;
}
export const TeamMember = ({ image, name, role }: TeamMemberProp) => {
  return (
    <div className={styles.memberCard}>
      <img
        loading="lazy"
        src={image}
        className={styles.memberImage}
        alt={`${name} - ${role}`}
      />
      <h3 className={styles.memberName}>{name}</h3>
      <p className={styles.memberRole}>{role}</p>
      <div className={styles.socialLinks}>
        <img src={FacebookIcon} alt="facebook" />
        <img src={TwitterIcon} alt="twitter" />
        <img src={InstagramIcon} alt="instagram" />
      </div>
    </div>
  );
};
