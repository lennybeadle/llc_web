import LeftImage from '../../../assets/images/icons/large-left.svg';
import LearnMoreCard from '../../molecules/LearnMoreCard';
import * as S from './styles';
import StoryIcon1 from '../../../assets/images/icons/story1.svg';
import StoryIcon2 from '../../../assets/images/icons/story2.svg';
import StoryIcon3 from '../../../assets/images/icons/story3.svg';

const data = [
  {
    title: 'Quality',
    description:
      'At LLC Tech, we deliver excellence with meticulous attention to detail in every project we undertake.',
    icon: StoryIcon1,
  },
  {
    title: 'Skills',
    description:
      'Our team of experts brings a diverse set of skills, combining technical know-how and creative problem-solving to achieve impactful results.',
    icon: StoryIcon2,
  },
  {
    title: 'Passion',
    description:
      'We are driven by a genuine passion for technology and innovation, striving to create meaningful solutions that empower our clients.',
    icon: StoryIcon3,
  },
];

export function Innovation() {
  return (
    <S.StyledSection aria-labelledby="case-studies-title">
      <S.FeaturedProjectsLabel>OUR STORY</S.FeaturedProjectsLabel>
      <S.SectionTitle id="case-studies-title">
        Building a Legacy of Innovation
      </S.SectionTitle>
      <S.Description>
        From our directo's vision to a growing legacy of innovation, LLC Tech
        thrives on passion, expertise, and delivering impactful solutions.
      </S.Description>
      <S.LearnMoreCards>
        <S.LearnMoreCardRow>
          {data.map((data) => (
            <LearnMoreCard
              title={data.title}
              description={data.description}
              icon={data.icon}
            />
          ))}
        </S.LearnMoreCardRow>
      </S.LearnMoreCards>
    </S.StyledSection>
  );
}

export default Innovation;
