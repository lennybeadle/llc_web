// MissionSection.tsx
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import * as S from './styles';

interface SkillProps {
  label: string;
  percentage: number;
}

interface MissionProps {
  image: string;
  skills: SkillProps[];
}

export const MissionSection: React.FC<MissionProps> = ({ image, skills }) => {
  // Use the IntersectionObserver hook
  // 'triggerOnce: true' means the observer unhooks after first enter
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // 20% of section in view triggers the callback
  });

  return (
    <S.MissionContainer ref={ref /* attach ref here */}>
      <S.MissionContent>
        <S.ImageColumn>
          <S.MissionImage
            loading="lazy"
            src={image}
            alt="Mission illustration"
          />
        </S.ImageColumn>
        <S.ContentColumn>
          <S.MissionInfo>
            <S.Subtitle>OUR MISSION</S.Subtitle>
            <S.Title>Turn Ideas into Reality</S.Title>
            <S.Description>
              We transform your vision into actionable solutions through
              innovation and expertise, delivering tailored results that drive
              success.
            </S.Description>

            <S.SkillsGrid>
              {skills.map((skill, index) => (
                <S.SkillItem key={index}>
                  <S.SkillLabel>{skill.label}</S.SkillLabel>

                  {/* CountUp runs from 0 -> skill.percentage ONLY when inView is true */}
                  <S.SkillPercentage>
                    {inView ? (
                      <CountUp start={0} end={skill.percentage} duration={2} />
                    ) : (
                      0
                    )}
                    %
                  </S.SkillPercentage>
                </S.SkillItem>
              ))}
            </S.SkillsGrid>
          </S.MissionInfo>
        </S.ContentColumn>
      </S.MissionContent>
    </S.MissionContainer>
  );
};

export default MissionSection;