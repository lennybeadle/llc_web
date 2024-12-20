import * as S from './styles';
import { ServiceCard } from '../../molecules/ServiceCard';
import LeftImage from '../../../assets/images/icons/large-left.svg';
import DesignIcon from '../../../assets/images/icons/design.svg';
interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const servicesData1: ServiceCardProps[] = [
  {
    icon: DesignIcon,
    title: 'Artificial Intelligence & Machine Learning',
    description:
      'Empowering smarter decisions and optimized operations with tailored AI solutions',
  },
  {
    icon: DesignIcon,
    title: 'Software Solutions',
    description:
      'Custom-built software designed to meet your unique business goals and streamline processes',
  },
];
const servicesData2: ServiceCardProps[] = [
  {
    icon: DesignIcon,
    title: 'Cloud Computing & Cybersecurity',
    description:
      'Secure, scalable cloud solutions backed by robust cybersecurity for peace of mind.',
  },
  {
    icon: DesignIcon,
    title: 'Design & Marketing',
    description:
      'Engage your audience with stunning visuals and strategic campaigns tailored to your brand.',
  },
];

export const ServicesSection = () => {
  return (
    <S.SectionWrapper>
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
          <S.ExploreButton role="button" tabIndex={0}>
            Explore More
          </S.ExploreButton>
        </S.LeftColumn>
        <S.RightColumn>
          <S.ServicesGrid>
            {servicesData1.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </S.ServicesGrid>
          <S.ServicesGridLow>
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
