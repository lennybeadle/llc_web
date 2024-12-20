import React from 'react';
import styles from './styles.module.css';

interface TestimonialCardProp {
  image: string;
  name: string;
  testimonial: string;
}
export const TestimonialCard = ({
  image,
  name,
  testimonial,
}: TestimonialCardProp) => {
  return (
    <div className={styles.testimonialCard}>
      <img
        loading="lazy"
        src={image}
        className={styles.authorImage}
        alt={name}
      />
      <h3 className={styles.authorName}>{name}</h3>
      <p className={styles.testimonialText}>{testimonial}</p>
    </div>
  );
};
