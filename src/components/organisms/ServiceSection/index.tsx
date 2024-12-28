import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import { ServiceCard } from '../../molecules/ServiceCard';
import LeftImage from '../../../assets/images/icons/large-left.svg';
import ServiceIcon1 from '../../../assets/images/icons/serviceIcon1.svg';
import ServiceIcon2 from '../../../assets/images/icons/serviceIcon2.svg';
import ServiceIcon3 from '../../../assets/images/icons/serviceIcon3.svg';
import ServiceIcon4 from '../../../assets/images/icons/serviceIcon4.svg';
import styled from 'styled-components';

const Spacer = styled.div`
  height: 80px;

  @media (max-width: 768px) {
    height: 40px; /* Smaller height on mobile */
  }
`;

const servicesData1 = [
  {
    icon: ServiceIcon1,
    title: 'Artificial Intelligence & Machine Learning',
    description:
      'Empowering smarter decisions and optimized operations with tailored AI solutions',
  },
  {
    icon: ServiceIcon2,
    title: 'Software Solutions',
    description:
      'Custom-built software designed to meet your unique business goals and streamline processes',
  },
];
const servicesData2 = [
  {
    icon: ServiceIcon3,
    title: 'Cloud Computing & Cybersecurity',
    description:
      'Secure, scalable cloud solutions backed by robust cybersecurity for peace of mind.',
  },
  {
    icon: ServiceIcon4,
    title: 'Design & Marketing',
    description:
      'Engage your audience with stunning visuals and strategic campaigns tailored to your brand.',
  },
];

export const ServicesSection = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <S.SectionWrapper ref={sectionRef}>
      <S.ContentContainer>
        <S.LeftColumn>
          <S.HeaderTag>Our Services</S.HeaderTag>
          <S.MainHeading>
            Innovative Solutions for a Smarter Future
          </S.MainHeading>
          <S.Description>
            Discover how LLC Tech can transform your business with innovative
            solutions tailored to your needs. From cutting-edge AI to
            user-focused design, we're here to help you thrive in today's
            digital world.
          </S.Description>
          <S.ExploreButton
            role="button"
            tabIndex={0}
            onClick={() => navigate('/services')}
          >
            Explore More
          </S.ExploreButton>
        </S.LeftColumn>
        <Spacer />
        <S.RightColumn>
          <S.ServicesGrid isVisible={isVisible}>
            {servicesData1.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </S.ServicesGrid>
          <S.ServicesGridLow isVisible={isVisible}>
            {servicesData2.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </S.ServicesGridLow>
        </S.RightColumn>
      </S.ContentContainer>
      <S.LeftDirection image={LeftImage} />
    </S.SectionWrapper>
  );
};