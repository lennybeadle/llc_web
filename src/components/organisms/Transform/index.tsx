import * as React from 'react';
import * as S from './styles';

interface TransformProps {
  image: string;
}

export const Transform: React.FC<TransformProps> = ({ image }) => {
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
              <S.MoreDetails>More Details</S.MoreDetails>
            </S.SkillsGrid>
          </S.MissionInfo>
        </S.ContentColumn>
      </S.MissionContent>
    </S.MissionContainer>
  );
};
export default Transform;
