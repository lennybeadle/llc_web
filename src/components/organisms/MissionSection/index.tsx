import * as React from 'react';
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
            <S.Subtitle>Our mission</S.Subtitle>
            <S.Title>Turn Ideas into Reality</S.Title>
            <S.Description>
              Integer at faucibus urna. Nullam condimentum leo id elit sagittis
              auctor. Curabitur elementum nunc a leo imperdiet, nec elementum
              diam elementum.
            </S.Description>
            <S.SkillsGrid>
              {skills.map((skill, index) => (
                <S.SkillItem key={index}>
                  <S.SkillLabel>{skill.label}</S.SkillLabel>
                  <S.SkillPercentage>{skill.percentage}%</S.SkillPercentage>
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
