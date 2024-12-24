import styled from 'styled-components';

export const MissionContainer = styled.section`
  width: 100%;
  max-width: 1256px;
  margin: 254px auto 0;

  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 20px;
  }
`;

export const MissionContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;

export const ImageColumn = styled.div``;

export const MissionImage = styled.img`
  width: 100%;
  aspect-ratio: 1.3;
  object-fit: cover;
`;

export const ContentColumn = styled.div`
  display: flex;
  align-items: center;
`;

export const MissionInfo = styled.div`
  padding: 20px;
`;

export const Subtitle = styled.div`
  color: #000;
  font: 700 16px/2 Roboto, sans-serif;
  text-transform: uppercase;
`;

export const Title = styled.h2`
  color: #000;
  font: 700 35px Roboto, sans-serif;
  margin: 36px 0 20px;
`;

export const Description = styled.p`
  color: #5a5a5a;
  font: 400 16px/26px Roboto, sans-serif;
  margin-bottom: 71px;

  @media (max-width: 991px) {
    margin-bottom: 40px;
  }
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

export const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SkillLabel = styled.h3`
  color: #000;
  font: 700 20px Roboto, sans-serif;
  margin: 0;
`;

export const SkillPercentage = styled.div`
  color: #ffc900;
  font: 700 40px/1 Roboto, sans-serif;
  margin-top: 26px;
`;
