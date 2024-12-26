import React from 'react';
import styles from './styles.module.css';
import CountUp from 'react-countup';

interface AdvertiseProp {
  images: string[];
  digital: number;
  text: string;
}
export const Advertise = ({ images, digital, text }: AdvertiseProp) => {
  return (
    <div className={styles.container}>
      <div className={styles.logos}>
        <p className={styles.header}>
          <span className={styles.highlight}>
            <CountUp start={0} end={digital} duration={2} />+
          </span>{' '}
          <p className={styles.noWrap}>{text}</p>
        </p>

        {images.map((image, index) => (
          <div className={styles.LogoContainer}>
            <img key={index} src={image} alt="Slack" className={styles.logo} />
          </div>
        ))}
      </div>
    </div>
  );
};
