import { Header } from '../../components/molecules/Header';
import { Footer } from '../../components/organisms/Footer';
import { BlogCard } from '../../components/molecules/BlogCard';
import styles from './styles.module.css';
import Transform from '../../components/organisms/Transform';
import PlayVideoImage from '../../assets/images/backgrounds/playVideo.svg';
import { TeamSection } from '../../components/organisms/TeamSection';
import AboutParagraph from '../../components/organisms/AboutParagraph';
import Blog1 from '../../assets/images/backgrounds/blog1.svg';
import Blog2 from '../../assets/images/backgrounds/blog2.svg';
import Blog3 from '../../assets/images/backgrounds/blog3.svg';

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
const About = () => {
  return (
    <main className={styles.mainContainer}>
      <Header />
      <TeamSection />
      <AboutParagraph />
      <Transform image={PlayVideoImage} />
      <section className={styles.blogSection}>
        <h2 className={styles.sectionTitle}>Latest from Blog</h2>
        <p className={styles.description}>
          Stay informed with the latest insights, trends, and updates from our
          team. Explore how technology and innovation are shaping the future of
          public services.
        </p>
        <div className={styles.blogGrid}>
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default About;
