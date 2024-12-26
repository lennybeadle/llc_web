// MissionSection.tsx
import React from 'react';
import CountUp from 'react-countup'; // <-- import CountUp
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
  return (
    <S.MissionContainer>
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
                  {/* CountUp from 0 to skill.percentage over ~2 seconds */}
                  <S.SkillPercentage>
                    <CountUp start={0} end={skill.percentage} duration={2} />%
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