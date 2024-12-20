import { Header } from '../../components/molecules/Header';
import { Footer } from '../../components/organisms/Footer';
import { BlogCard } from '../../components/molecules/BlogCard';
import styles from './styles.module.css';

import Blog1 from '../../assets/images/backgrounds/blog1.svg';
import Blog2 from '../../assets/images/backgrounds/blog2.svg';
import Blog3 from '../../assets/images/backgrounds/blog3.svg';
import Blog4 from '../../assets/images/backgrounds/blog4.svg';
import Blog5 from '../../assets/images/backgrounds/blog5.svg';
import Blog6 from '../../assets/images/backgrounds/blog6.svg';
import { BlogLayout } from '../../components/organisms/BlogLayout';
const blogPosts = [
  {
    image: Blog1,
    categories: ['agency', 'news'],
    title: 'Massa Vitae Toutor Condimentum Lacinia Quis',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.…',
  },
  {
    image: Blog2,
    categories: ['news'],
    title: 'Venenatis Urna Cursus Eget Nunc Scelerisque',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.…',
  },
  {
    image: Blog3,
    categories: ['news'],
    title: 'Donec Adipiscing Tristique Risus Nec Feugiat',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.…',
  },
];
const blogPosts2 = [
  {
    image: Blog4,
    categories: ['agency', 'news'],
    title: 'Turpis Tincidunt Idaliquet Risus Feugiat Molestie',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.…',
  },
  {
    image: Blog5,
    categories: ['agency'],
    title: 'Vulputate Dinissim Suspendisse Inest Consequat',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.…',
  },
  {
    image: Blog6,
    categories: ['news'],
    title: 'Aliquam Vestibulum Morbi Blandit Cursus Risus',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.…',
  },
];
const Blog = () => {
  return (
    <main className={styles.mainContainer}>
      <Header />
      <BlogLayout />
      <section className={styles.blogSection}>
        <div className={styles.blogGrid}>
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
        <div className={styles.blogGrid}>
          {blogPosts2.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Blog;
