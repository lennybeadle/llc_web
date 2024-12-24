import * as React from 'react';
import { ProjectCard } from '../../molecules/ProjectCard';
import { ProjectCardDouble } from '../../molecules/ProjectCardDouble';
import CaseImage1 from '../../../assets/images/backgrounds/study1.svg';
import CaseImage2 from '../../../assets/images/backgrounds/study2.svg';
import CaseImage3 from '../../../assets/images/backgrounds/case6.svg';
import CaseImage4 from '../../../assets/images/backgrounds/case4.svg';
import CaseImage5 from '../../../assets/images/backgrounds/case5.svg';
import CaseImage6 from '../../../assets/images/backgrounds/case3.svg';

import RightImage from '../../../assets/images/icons/large-right.svg';
import * as S from './styles';
interface CaseStudy {
  title: string;
  height?: string;
}

const caseStudies: CaseStudy[] = [
  { title: 'Luna - Healthcare Companion' },
  { title: 'Klarna - Web extension' },
  { title: 'Sed efficitur faucibus' },
  { title: 'Dapibus curabitur' },
  { title: 'Lacus vel', height: '169px' },
  { title: 'Sit dapibus auctor', height: '169px' },
];

export function CaseStudiesSection() {
  return (
    <S.StyledSection aria-labelledby="case-studies-title">
      <S.FeaturedProjectsLabel>Featured Projects</S.FeaturedProjectsLabel>
      <S.SectionTitle id="case-studies-title">Our Case Studies</S.SectionTitle>
      <S.Description>
        Explore how we've helped businesses transform and thrive with innovative
        technology and tailored solutions. Our case studies showcase real-world
        impact and measurable results
      </S.Description>
      <S.TopProjectsRow>
        <ProjectCard
          title={caseStudies[0].title}
          width="66%"
          image={CaseImage1}
        />
        <ProjectCard
          title={caseStudies[1].title}
          width="34%"
          image={CaseImage2}
        />
      </S.TopProjectsRow>
      <S.BottomProjectsRow>
        <ProjectCard
          title={caseStudies[2].title}
          width="32%"
          image={CaseImage3}
        />
        <ProjectCard
          title={caseStudies[3].title}
          width="32%"
          image={CaseImage4}
        />
        <ProjectCardDouble
          titles={[caseStudies[4].title, caseStudies[5].title]}
          width="34%"
          height={caseStudies[4].height}
          images={[CaseImage5, CaseImage6]}
        />
      </S.BottomProjectsRow>
      <S.RightDirection image={RightImage} />
    </S.StyledSection>
  );
}
