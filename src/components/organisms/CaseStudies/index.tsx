import * as React from 'react';
import { ProjectCard } from '../../molecules/ProjectCard';
import { ProjectCardDouble } from '../../molecules/ProjectCardDouble';

import * as S from './styles';
interface CaseStudy {
  title: string;
  height?: string;
}

const caseStudies: CaseStudy[] = [
  { title: 'Sit dapibus auctor' },
  { title: 'Est mattis sit' },
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
          width="65%"
          image="../../../assets/images/backgrounds/study1.svg"
        />
        <ProjectCard
          title={caseStudies[1].title}
          width="35%"
          image="../../../assets/images/backgrounds/study2.svg"
        />
      </S.TopProjectsRow>
      <S.BottomProjectsRow>
        <ProjectCard
          title={caseStudies[2].title}
          width="33%"
          image="../../../assets/images/backgrounds/study3.svg"
        />
        <ProjectCard
          title={caseStudies[3].title}
          width="33%"
          image="../../../assets/images/backgrounds/study4.svg"
        />
        <ProjectCardDouble
          titles={[caseStudies[4].title, caseStudies[5].title]}
          width="33%"
          height={caseStudies[4].height}
          images={[
            '../../../assets/images/backgrounds/study5.svg',
            '../../../assets/images/backgrounds/study6.svg',
          ]}
        />
      </S.BottomProjectsRow>
    </S.StyledSection>
  );
}
