import LeftImage from '../../../assets/images/icons/large-left.svg';
import LearnMoreCard from '../../molecules/LearnMoreCard';
import * as S from './styles';

const data1 = [
  {
    title: 'Artificial Intelligence & Machine Learning',
    description:
      'Expowering smarter decisions and optimize operations with tailored AI solutions for your business',
  },
  {
    title: 'Cloud Computing & Cybersecurity',
    description:
      'Secure, scalable cloud solutions backed by robust cybersecurity for peace of mind',
  },
  {
    title: 'Software Solutions',
    description:
      'Custom-built software designed to meet your unique business goals and streamline processes',
  },
];

const data2 = [
  {
    title: 'Project, Product & Service Management',
    description:
      'Ensure every project and product is delivered on time with structured, results-driven management',
  },
  {
    title: 'UX/UI Design',
    description:
      'Craft visually stunning designs and seamless user experiences that captivate and convert your audience',
  },
  {
    title: 'Marketing & SEO',
    description:
      'Boost your online presence with data-driven marketing strategies and effective SEO practices to rank higher and reach further.',
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
            <LearnMoreCard title={data.title} description={data.description} />
          ))}
        </S.LearnMoreCardRow>
        <S.LearnMoreCardRow>
          {data2.map((data) => (
            <LearnMoreCard title={data.title} description={data.description} />
          ))}
        </S.LearnMoreCardRow>
      </S.LearnMoreCards>
      <S.RightDirection image={LeftImage} />
    </S.StyledSection>
  );
}

export default DigitalSolutions;
