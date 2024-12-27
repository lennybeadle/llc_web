import React from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import styles from './styles.module.css';

interface AdvertiseProp {
  images: string[];
  digital: number;
  text: string;
}

export const Advertise = ({ images, digital, text }: AdvertiseProp) => {
  // Setup Intersection Observer for this component
  const { ref, inView } = useInView({
    triggerOnce: true,  // Animate only once
    threshold: 0.2,     // 20% in view triggers
  });

  return (
    // Attach the "ref" to the container so we know when it enters the viewport
    <div className={styles.container} ref={ref}>
      <div className={styles.logos}>
        <p className={styles.header}>
          <span className={styles.highlight}>
            {/* 
              If inView is true, run CountUp; otherwise display a fallback 
              (e.g. 0, or just the static digital value).
            */}
            {inView ? (
              <CountUp start={0} end={digital} duration={2} />
            ) : (
              0
            )}
            +
          </span>{' '}
          {/* Keep “Trusted Companies” (or text) in a noWrap span */}
          <span className={styles.noWrap}>{text}</span>
        </p>

        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.LogoContainer} ${[4, 2].includes(index) ? styles.largeIcon : ''
              }`} // Apply `largeIcon` class to JoinPiggy and Banana icons
          >
            <img src={image} alt="Logo" className={styles.logo} />
          </div>
        ))}
      </div>
    </div>
  );
};