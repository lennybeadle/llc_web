import { Helmet } from 'react-helmet-async';

import { BlogCard } from '../../components/molecules/BlogCard';
import { TestimonialCard } from '../../components/molecules/TestimonialCard';
import { Header } from '../../components/molecules/Header';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MouseImage from '../../assets/images/icons/mouse.svg';
import { ServicesSection } from '../../components/organisms/ServiceSection';
import { CaseStudiesSection } from '../../components/organisms/CaseStudies';
import { Advertise } from '../../components/molecules/Advertise';

import JoinPiggyIcon from '../../assets/images/icons/joinpiggy.svg';
import KlarnaIcon from '../../assets/images/icons/klarna.svg';
import LunaIcon from '../../assets/images/icons/luna.svg';
import BananaIcon from '../../assets/images/icons/banana.svg';
import ItrexIcon from '../../assets/images/icons/itrex.svg';
import { Footer } from '../../components/organisms/Footer';

import Blog1 from '../../assets/images/backgrounds/case1.svg';
import Blog2 from '../../assets/images/backgrounds/case2.svg';
import Blog3 from '../../assets/images/backgrounds/case3.svg';
import Avatar1 from '../../assets/images/icons/avatar-1.svg';
import Avatar2 from '../../assets/images/icons/avatar-2.svg';

// const teamMembers = [
//   {
//     image: Member1,
//     name: 'Leonard Beadle',
//     role: 'Head of Technology Solutions',
//   },
//   {
//     image: Member2,
//     name: 'Saket Gautam',
//     role: 'Founder & CEO',
//   },
//   {
//     image: Member3,
//     name: 'Elliot White',
//     role: 'Head of Business Partnerships & Solutions',
//   },
// ];

const Spacer = styled.div`
  height: 80px;

  @media (max-width: 768px) {
    height: 40px; /* Smaller height on mobile */
  }
`;


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
    title: 'Klarna: Streamlining Collaboration with Real-Time Solutions',
    excerpt:
      'Boosting productivity with a real-time collaboration platform acquired by Klarna, featuring live updates and dynamic data tools.',
    meta: {
      author: 'SAKET Gautam',
      date: 'Octorber 23, 2024',
      tags: ['Collaboration', 'Real-time Solutions'],
    },
    content: `
    As businesses continue to embrace digital transformation, efficient collaboration has become a cornerstone for success. Klarna, a global leader in financial services, enhanced its operational capabilities by acquiring a groundbreaking real-time collaboration platform developed by a forward-thinking team. This platform revolutionized teamwork through seamless communication, dynamic data tools, and intuitive interfaces.
    <br/>
    <br/>
    The Challenge
    <br/>
    <br/>
    Before its acquisition, the collaboration platform faced the challenge of creating a system that would not only facilitate real-time teamwork but also address scalability and performance for growing enterprises. The objective was to design a solution that minimized communication delays, simplified data sharing, and enhanced productivity for teams spread across multiple locations.
    <br/>
    <br/>
    Our Contribution
    The team behind the collaboration platform introduced several innovative features to tackle these challenges:
    <br/>
    <br/>
    <ul>
    <li>
    Real-Time Collaboration: Implemented WebSocket technology to enable live updates, ensuring instant synchronization of changes across users.
    </li>
    <li>
    Dynamic Data Visualization: Designed interactive dashboards using D3.js, providing teams with actionable insights through clear and concise data representation.
    </li>
    <li>
    Optimized Performance: Applied techniques such as lazy loading and code-splitting to reduce load times by 40%, ensuring a smoother user experience.
    </li>
    <li>
    Scalable Infrastructure: Deployed the platform on AWS using EC2, S3, and RDS services, guaranteeing high availability and reliability during peak usage.
    </li>
    <li>
    Intuitive API Design: Built a robust backend API using Node.js and Express.js, facilitating secure and efficient data management.
    </li>
    </ul>
    <br/>
    <br/>
    Results
    <br/>
    <br/>
    The platform’s innovative approach yielded outstanding results:
    <br/>
    <br/>
    Increased team productivity by 50% through real-time collaboration tools.
    Enhanced decision-making capabilities with dynamic data visualization, enabling faster insights.
    Improved system reliability and scalability to support enterprise growth.
    The platform’s success caught the attention of Klarna, which acquired the solution to integrate it into their financial operations, further solidifying their leadership in the industry.
  
     `,
  },
  {
    image: Blog2,
    title: 'Luna: Elevating E-Commerce Experiences',
    excerpt:
      "Crafting innovative solutions for Luna's e-commerce platform with dynamic features and seamless user experiences.",
    meta: {
      author: 'ELLIOT WHITE',
      date: 'December 8, 2024',
      tags: ['e-commerce', 'online-shopping', 'user engagement'],
    },
    content: `
    The rapid growth of e-commerce has transformed the way businesses connect with customers. Luna, a leading e-commerce platform, sought to enhance its online shopping experience by integrating dynamic features and creating seamless user interactions. This project aimed to redefine how customers engage with e-commerce by prioritizing convenience, personalization, and efficiency.
    <br/><br/>
    The Challenge
    <br/><br/>
    As competition in the e-commerce space intensified, Luna faced the challenge of staying ahead by offering an engaging and intuitive platform. Customers expected faster response times, personalized recommendations, and a seamless shopping journey from discovery to checkout. Luna required a robust technological solution that could meet these demands and scale with its growing user base.
    Our Contribution
    <br/><br/>
    The development team implemented innovative solutions that elevated Luna’s e-commerce platform to new heights:
    <br/><br/>
    <ul>
    <li>
    Dynamic Personalization: Leveraged machine learning algorithms to provide tailored product recommendations based on user preferences and browsing history.
    </li>
    <li>
    Seamless User Experience: Enhanced the platform’s navigation and layout for better usability, ensuring customers could find and purchase products with ease.
    </li>
    <li>
    Real-Time Inventory Management: Integrated advanced tools to update inventory in real-time, minimizing stock issues and improving customer trust.
    <li>
    <li>
    Mobile Optimization: Developed a responsive design that optimized Luna’s platform for mobile devices, capturing a growing audience of mobile shoppers.
    </li>
    <li>
    Secure Payment Gateway: Built a secure and efficient payment system that supported multiple payment options, ensuring smooth transactions.
    </li>
    </ul>
    <br/>
    <br/>
    Results
    <br/>
    <br/>

    The upgrades to Luna’s platform delivered significant improvements:
    <ul>
    <li>
    A 35% increase in customer retention due to personalized shopping experiences.
    </li>
    <li>
    A 50% reduction in cart abandonment rates through seamless navigation and payment options.
    </li>
    <li>
    Enhanced scalability, allowing Luna to handle a 40% growth in user traffic during peak seasons.
    </li>
    </ul>
    <br/>
    <br/>
    https://weareluna.app/ `,
  },
  {
    image: Blog3,
    title: "Mr Banana: Revolutionising London's Cleaning Services",
    excerpt:
      'Redefining convenience with a cutting-edge platform that connects Londoners to reliable professional cleaners for homes, offices, and more.',
    meta: {
      author: 'SAKET Gautam',
      date: 'April 15, 2024',
      tags: ['on-demand service', 'user engagement'],
    },
    content: `
    In the bustling city of London, maintaining clean and organized spaces can be challenging for individuals and businesses alike. Mr. Banana emerged as a game-changer, providing a seamless cleaning platform that connects users with professional cleaners for home, office, and specialty cleaning services like carpets. This innovative approach has redefined convenience, offering users an "Airbnb-like" experience for their cleaning needs.
    <br/><br/>
    The Challenge
    <br/><br/>
    The cleaning industry lacked a unified platform where users could easily find, book, and track professional cleaning services. Consumers were often overwhelmed with fragmented service providers, outdated booking systems, and unreliable quality. The goal of Mr. Banana was to create a tech-driven solution that eliminated these challenges by simplifying the booking process and ensuring top-notch service quality.
    <br/><br/>
    Our Contribution
    <br/><br/>
    The development team behind Mr. Banana designed and implemented a cutting-edge platform with features tailored for the modern user. Key contributions include:
    <br/><br/>
    <ul>
    <li>
    User-Friendly App & Website: Developed an intuitive platform with streamlined search and booking functionalities, allowing users to find cleaners in their area effortlessly.
    </li>
    <li>
    Real-Time Tracking: Integrated a tracking feature that enables users to monitor the cleaner’s arrival and progress, providing transparency and reliability.
    </li>
    <li>
    Customizable Cleaning Options: Offered flexibility by allowing users to select specific cleaning services based on their unique requirements, whether it’s domestic cleaning, office cleaning, or specialized carpet cleaning.
    </li>
    <li>
    Secure Payment Integration: Built a secure and seamless payment system that ensures user convenience and safety.
    </li>
    </ul>
    <br/>
    <br/>
    Results
    <br/>
    <br/>

    Mr. Banana has quickly become one of London’s leading cleaning service platforms. It has enhanced the experience of thousands of users by:
    <br/>
    <ul>
    <li>
    Reducing booking times by 60% through streamlined processes.
    </li>
    <li>
    Increasing consumer satisfaction with a 4.8/5 average rating on service quality.
    </li>
    <li>
    Attracting a network of verified cleaning professionals, ensuring reliability and excellence.
    </li>
    </ul>
        `,
  },
];

const Dashboard = () => {
  return (
    <main className={styles.mainContainer}>
      <Helmet>
        <title>Dashboard | LLC Tech</title>
      </Helmet>
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
              Precision. Integration.{' '}
              <span className={styles.lineBreakOnMobile}>
                <br />&nbsp;
              </span>
              Solutions Built to Last...
            </p>
          </div>
          <div className={styles.heroButtonContent}>
            <Link to="/services">
              <button className={styles.heroButton}>More Details</button>
            </Link>
            <img
              loading="lazy"
              src={MouseImage}
              className={styles.heroIcon}
              alt=""
            />
          </div>
        </div>
      </section>
      <Spacer />
      <ServicesSection />
      <CaseStudiesSection />

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
        images={[KlarnaIcon, LunaIcon, BananaIcon, ItrexIcon, JoinPiggyIcon]}
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
