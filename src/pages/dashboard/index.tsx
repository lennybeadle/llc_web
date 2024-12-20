import { Helmet } from 'react-helmet-async';
// import PageHeader from '../../components/organisms/PageHeader';
// import { ServiceCard } from '../../components/molecules/ServiceCard';
import { BlogCard } from '../../components/molecules/BlogCard';
import { TeamMember } from '../../components/molecules/TeamMember';
import { TestimonialCard } from '../../components/molecules/TestimonialCard';
import { Header } from '../../components/molecules/Header';
import styles from './styles.module.css';

import MouseImage from '../../assets/images/icons/mouse.svg';
import { ServicesSection } from '../../components/organisms/ServiceSection';
import { CaseStudiesSection } from '../../components/organisms/CaseStudies';
const services = [
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/24d744d5e496ce5c056cf5c1db03e560290bc394279b0a22367402e9e4254af1?placeholderIfAbsent=true&apiKey=6ec776122da54b10a52082d58cd3793b',
    title: 'Artificial Intelligence & Machine Learning',
    description:
      'Empowering smarter decisions and optimized operations with tailored AI solutions',
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0754b4c3b0d2237d1962edbbce86231a062e0b5fd013adac8c176136ccecd9d2?placeholderIfAbsent=true&apiKey=6ec776122da54b10a52082d58cd3793b',
    title: 'Software Solutions',
    description:
      'Custom-built software designed to meet your unique business goals and streamline processes',
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/08d87a460dadb69ee859d4a14efe6749740f0669b83ec86c72558504866775e4?placeholderIfAbsent=true&apiKey=6ec776122da54b10a52082d58cd3793b',
    title: 'Cloud Computing & Cybersecurity',
    description:
      'Secure, scalable cloud solutions backed by robust cybersecurity for peace of mind.',
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cda5fa2b2cf247caf49b9b64766babd78d2c90feb1cba2dc35ded478f14fb3ed?placeholderIfAbsent=true&apiKey=6ec776122da54b10a52082d58cd3793b',
    title: 'Design & Marketing',
    description:
      'Engage your audience with stunning visuals and strategic campaigns tailored to your brand.',
  },
];

const teamMembers = [
  {
    image:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/e708df1ec241838568d179127b8e4639498af8cb2f41072ef5e9d760a813904a?placeholderIfAbsent=true&apiKey=6ec776122da54b10a52082d58cd3793b',
    name: 'Leonard Beadle',
    role: 'Head of Technology Solutions',
  },
  {
    image:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/d84062a29806ff126e8f1172258623ce8579773e7b1c21927173aa054b3aa70d?placeholderIfAbsent=true&apiKey=6ec776122da54b10a52082d58cd3793b',
    name: 'Saket Gautam',
    role: 'Founder & CEO',
  },
  {
    image:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/bd4beeb97318db1b26428e0897af777223fb2b2c6c795b7164935302f34beb54?placeholderIfAbsent=true&apiKey=6ec776122da54b10a52082d58cd3793b',
    name: 'Elliot White',
    role: 'Head of Business Partnerships & Solutions',
  },
];

const testimonials = [
  {
    image:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/220cbd26205faef7e8f1c4d4baa95edbaffb091f2e54e5ba6633692db30e751d?placeholderIfAbsent=true&apiKey=6ec776122da54b10a52082d58cd3793b',
    name: 'Rebecca Ortiz',
    testimonial:
      'Duis rhoncus dui venenatis consequat porttitor. Etiam aliquet congue consequat. In posuere, nunc sit amet laoreet blandit, urna sapien imperdiet lectus, et molestie sem tortor quis dui.',
  },
  {
    image:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/1042db012b667954234085c7506e722a95c25b8d43dc101c1b54c9f4d32386e7?placeholderIfAbsent=true&apiKey=6ec776122da54b10a52082d58cd3793b',
    name: 'Michael Berillo',
    testimonial:
      'Duis rhoncus dui venenatis consequat porttitor. Etiam aliquet congue consequat. In posuere, nunc sit amet laoreet blandit, urna sapien imperdiet lectus, et molestie sem tortor quis dui.',
  },
];

const blogPosts = [
  {
    image:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/73bd445170be8f7389a266f78f0781f2b795b53601e61611ffef3dd1bee00af9?placeholderIfAbsent=true&apiKey=6ec776122da54b10a52082d58cd3793b',
    categories: ['agency', 'news'],
    title: 'Massa Vitae Toutor Condimentum Lacinia Quis',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.…',
  },
  {
    image:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/0cf015ab834e0c0cb1d9d61251991e9f80be9aa71eb6b13d01d2fb7d485ab5ff?placeholderIfAbsent=true&apiKey=6ec776122da54b10a52082d58cd3793b',
    categories: ['news'],
    title: 'Venenatis Urna Cursus Eget Nunc Scelerisque',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.…',
  },
  {
    image:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/0685e8b2bf4ce79e7b6b26f75d207a06e4d91a8358799b3adf78958d29eb3a84?placeholderIfAbsent=true&apiKey=6ec776122da54b10a52082d58cd3793b',
    categories: ['news'],
    title: 'Donec Adipiscing Tristique Risus Nec Feugiat',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.…',
  },
];

const Dashboard = () => {
  return (
    <main className={styles.mainContainer}>
      <Header />

      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            LLC Tech
            <span className={styles.heroSubtitle}>
              Trusted in Public Technology Innovation
            </span>
          </h1>
          <p className={styles.heroTagline}>
            Precision. Integration. Solutions Built to Last.
          </p>
          <button className={styles.heroButton}>More Details</button>
          <img
            loading="lazy"
            src={MouseImage}
            className={styles.heroIcon}
            alt=""
          />
        </div>
      </section>
      <ServicesSection />
      <CaseStudiesSection />
      <section className={styles.teamSection}>
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
      </section>

      <section className={styles.testimonialsSection}>
        <h2 className={styles.sectionTitle}>What Our Client's Say</h2>
        <div className={styles.testimonialGrid}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </section>

      <section className={styles.blogSection}>
        <h2 className={styles.sectionTitle}>Latest from Blog</h2>
        <div className={styles.blogGrid}>
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </section>
    </main>
  );
};
export default Dashboard;
