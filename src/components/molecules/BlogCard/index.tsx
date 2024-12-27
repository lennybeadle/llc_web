import React from 'react';
import styles from './styles.module.css';
import { BlogProps } from '../../../utils/types';
import { useNavigate } from 'react-router-dom';

export const BlogCard = ({
  image,
  title,
  excerpt,
  meta,
  content,
}: BlogProps) => {
  const navigate = useNavigate();

  const goToDetail = () => {
    const id = title.replace(/ /g, '_');
    navigate(`/blog/${id}_of_blog`, {
      state: { image, title, excerpt, meta, content },
    });
  };
  return (
    <article className={styles.blogCard} onClick={goToDetail}>
      <img loading="lazy" src={image} className={styles.blogImage} alt="" />
      <div className={styles.content}>
        <div className={styles.categories}>
          {meta?.tags?.map((tag, index) => (
            <span key={index} className={styles.category}>
              {tag}
            </span>
          ))}
        </div>
        <h3 className={styles.blogTitle}>{title}</h3>
        <p className={styles.blogExcerpt}>{excerpt}</p>
      </div>
    </article>
  );
};
