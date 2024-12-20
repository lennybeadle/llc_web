import * as S from './styles';
import { ServiceCard } from '../../molecules/ServiceCard';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

interface ServicesSectionProps {
  services: ServiceCardProps[];
}
const servicesData1: ServiceCardProps[] = [
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
];
const servicesData2: ServiceCardProps[] = [
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
    </S.SectionWrapper>
  );
};
