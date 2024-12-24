import { BlogCard } from '../../components/molecules/BlogCard';
import { TeamMember } from '../../components/molecules/TeamMember';
import { TestimonialCard } from '../../components/molecules/TestimonialCard';
import { Header } from '../../components/molecules/Header';
import styles from './styles.module.css';

import MouseImage from '../../assets/images/icons/mouse.svg';
import { ServicesSection } from '../../components/organisms/ServiceSection';
import { CaseStudiesSection } from '../../components/organisms/CaseStudies';
import { Advertise } from '../../components/molecules/Advertise';

import KlarnaIcon from '../../assets/images/icons/klarna.svg';
import LunaIcon from '../../assets/images/icons/luna.svg';
import BananaIcon from '../../assets/images/icons/banana.svg';
import ItrexIcon from '../../assets/images/icons/itrex.svg';
import { Footer } from '../../components/organisms/Footer';
import Member1 from '../../assets/images/backgrounds/member1.svg';
import Member2 from '../../assets/images/backgrounds/member2.svg';
import Member3 from '../../assets/images/backgrounds/member3.svg';
import Blog1 from '../../assets/images/backgrounds/aboutBlog1.svg';
import Blog2 from '../../assets/images/backgrounds/aboutBlog2.svg';
import Blog3 from '../../assets/images/backgrounds/aboutBlog3.svg';
import Avatar1 from '../../assets/images/icons/avatar-1.svg';
import Avatar2 from '../../assets/images/icons/avatar-2.svg';

const teamMembers = [
  {
    image: Member1,
    name: 'Leonard Beadle',
    role: 'Head of Technology Solutions',
  },
  {
    image: Member2,
    name: 'Saket Gautam',
    role: 'Founder & CEO',
  },
  {
    image: Member3,
    name: 'Elliot White',
    role: 'Head of Business Partnerships & Solutions',
  },
];

const testimonials = [
  {
    image: Avatar1,
    name: 'Rebecca Ortiz',
    testimonial:
      'Duis rhoncus dui venenatis consequat porttitor. Etiam aliquet congue consequat. In posuere, nunc sit amet laoreet blandit, urna sapien imperdiet lectus, et molestie sem tortor quis dui.',
  },
  {
    image: Avatar2,
    name: 'Michael Berillo',
    testimonial:
      'Duis rhoncus dui venenatis consequat porttitor. Etiam aliquet congue consequat. In posuere, nunc sit amet laoreet blandit, urna sapien imperdiet lectus, et molestie sem tortor quis dui.',
  },
];

const blogPosts = [
  {
    image: Blog1,
    title: 'Massa Vitae Toutor Condimentum Lacinia Quis',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.…',
    meta: {
      tags: ['agency', 'news'],
      author: 'SAKET GAUTAM',
      date: 'JULY 5, 2024',
    },
    content: '',
  },
  {
    image: Blog2,
    title: 'Venenatis Urna Cursus Eget Nunc Scelerisque',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.…',
    meta: {
      tags: ['news'],
      author: 'SAKET GAUTAM',
      date: 'JULY 5, 2024',
    },
    content: '',
  },
  {
    image: Blog3,
    categories: ['news'],
    title: 'Donec Adipiscing Tristique Risus Nec Feugiat',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.…',
    meta: {
      tags: ['news'],
      author: 'SAKET GAUTAM',
      date: 'JULY 5, 2024',
    },
    content: '',
  },
];

const Dashboard = () => {
  return (
    <main className={styles.mainContainer}>
      <Header />

      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroTitleContent}>
            <h1 className={styles.heroTitle}>
              LLC Tech
              <span className={styles.heroSubtitle}>
                <span style={{ fontWeight: 'bold' }}>Trusted </span>in Public
                Technology Innovation
              </span>
            </h1>
            <p className={styles.heroTagline}>
              Precision. Integration. Solutions Built to Last...
            </p>
          </div>
          <div className={styles.heroButtonContent}>
            <button className={styles.heroButton}>More Details</button>
            <img
              loading="lazy"
              src={MouseImage}
              className={styles.heroIcon}
              alt=""
            />
          </div>
        </div>
      </section>
      <ServicesSection />
      <CaseStudiesSection />
      {/* <section className={styles.teamSection}>
        <div className={styles.leftDirection} />
        <h2 className={styles.sectionTitle}>Our Professional Team</h2>
        <p className={styles.sectionDescription}>
          Meet the experts driving innovation and delivering exceptional
          results.
        </p>
        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </section> */}

      <section className={styles.testimonialsSection}>
        <span className={styles.featuredProjectsLabel}>TESTIMONIALS</span>
        <h2 className={styles.sectionTitle}>What Our Client's Say</h2>
        <p className={styles.description}>
          Hear from our satisfied clients about the innovative solutions and
          exceptional service that have helped their business grow and thrive.
        </p>
        <div className={styles.testimonialGrid}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </section>
      <Advertise
        images={[KlarnaIcon, LunaIcon, BananaIcon, ItrexIcon]}
        digital={200}
        text={'Trusted Companies'}
      />
      <section className={styles.blogSection}>
        <h2 className={styles.sectionTitle}>Latest Case Study Work</h2>
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
export default Dashboard;
