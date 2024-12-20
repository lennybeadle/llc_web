import React from 'react';
import styles from './styles.module.css';

interface BlogCardProp {
  image: string;
  categories: string[];
  title: string;
  excerpt: string;
}
export const BlogCard = ({
  image,
  categories,
  title,
  excerpt,
}: BlogCardProp) => {
  return (
    <article className={styles.blogCard}>
      <img loading="lazy" src={image} className={styles.blogImage} alt="" />
      <div className={styles.content}>
        <div className={styles.categories}>
          {categories.map((category, index) => (
            <span key={index} className={styles.category}>
              {category}
            </span>
          ))}
        </div>
        <h3 className={styles.blogTitle}>{title}</h3>
        <p className={styles.blogExcerpt}>{excerpt}</p>
      </div>
    </article>
  );
};
