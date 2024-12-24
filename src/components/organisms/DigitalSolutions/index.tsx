import LeftImage from '../../../assets/images/icons/large-left.svg';
import LearnMoreCard from '../../molecules/LearnMoreCard';
import * as S from './styles';
import ServiceIcon1 from '../../../assets/images/icons/serviceIcon1.svg';
import ServiceIcon2 from '../../../assets/images/icons/serviceIcon2.svg';
import ServiceIcon3 from '../../../assets/images/icons/serviceIcon3.svg';
import ServiceIcon4 from '../../../assets/images/icons/serviceIcon5.svg';
import ServiceIcon5 from '../../../assets/images/icons/serviceIcon6.svg';
import ServiceIcon6 from '../../../assets/images/icons/serviceIcon7.svg';

const data1 = [
  {
    title: 'Artificial Intelligence & Machine Learning',
    description:
      'Expowering smarter decisions and optimize operations with tailored AI solutions for your business',
    icon: ServiceIcon1,
  },
  {
    title: 'Cloud Computing & Cybersecurity',
    description:
      'Secure, scalable cloud solutions backed by robust cybersecurity for peace of mind',
    icon: ServiceIcon2,
  },
  {
    title: 'Software Solutions',
    description:
      'Custom-built software designed to meet your unique business goals and streamline processes',
    icon: ServiceIcon3,
  },
];

const data2 = [
  {
    title: 'Project, Product & Service Management',
    description:
      'Ensure every project and product is delivered on time with structured, results-driven management',
    icon: ServiceIcon4,
  },
  {
    title: 'UX/UI Design',
    description:
      'Craft visually stunning designs and seamless user experiences that captivate and convert your audience',
    icon: ServiceIcon5,
  },
  {
    title: 'Marketing & SEO',
    description:
      'Boost your online presence with data-driven marketing strategies and effective SEO practices to rank higher and reach further.',
    icon: ServiceIcon6,
  },
];
export function DigitalSolutions() {
  return (
    <S.StyledSection aria-labelledby="case-studies-title">
      <S.FeaturedProjectsLabel>OUR SERVICES</S.FeaturedProjectsLabel>
      <S.SectionTitle id="case-studies-title">
        Innovative Digital Solutions Built for Success
      </S.SectionTitle>
      <S.Description>
        Brining Innovative ideas to life through seamless and impactful digital
        experiences
      </S.Description>
      <S.LearnMoreCards>
        <S.LearnMoreCardRow>
          {data1.map((data) => (
            <LearnMoreCard
              title={data.title}
              description={data.description}
              icon={data.icon}
            />
          ))}
        </S.LearnMoreCardRow>
        <S.LearnMoreCardRow>
          {data2.map((data) => (
            <LearnMoreCard
              title={data.title}
              description={data.description}
              icon={data.icon}
            />
          ))}
        </S.LearnMoreCardRow>
      </S.LearnMoreCards>
      <S.RightDirection image={LeftImage} />
    </S.StyledSection>
  );
}

export default DigitalSolutions;
