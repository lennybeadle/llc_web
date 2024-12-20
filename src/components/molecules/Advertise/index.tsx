import React from 'react';
import styles from './styles.module.css';

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
          <span className={styles.highlight}>{digital}+</span>{' '}
          <span>{text}</span>
        </p>
        {images.map((image, index) => (
          <img key={index} src={image} alt="Slack" className={styles.logo} />
        ))}
      </div>
    </div>
  );
};
