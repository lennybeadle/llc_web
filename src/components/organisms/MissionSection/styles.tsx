import styled from 'styled-components';

export const MissionContainer = styled.section`
  width: 100%;
  margin: 90px auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

export const MissionContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 70%;
  @media (max-width: 991px) {
    width: 90%;

    flex-direction: column;
  }
`;

export const ImageColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

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
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  @media (max-width: 991px) {
    padding: 0;

    text-align: center;
    justify-content: center;
    align-items: center;
  }
`;

export const Subtitle = styled.div`
  color: #000;
  font-size: 16px/2;
  font-weight: 700;
  text-transform: uppercase;
  @media (max-width: 991px) {
    margin-top: 60px;
  }
`;

export const Title = styled.h2`
  color: #000;
  font-size: 35px;
  font-weight: 700;
  margin: 36px 0 20px;
  @media (max-width: 991px) {
    margin: 0;
  }
`;

export const Description = styled.p`
  color: #5a5a5a;
  font-size: 16px/26px;
  font-weight: 400;
  margin-bottom: 71px;

  @media (max-width: 991px) {
    margin-bottom: 40px;
  }
`;

export const SkillsGrid = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  @media (max-width: 991px) {
    flex-direction: column;
    gap: 40px;
  }
`;

export const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SkillLabel = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SkillPercentage = styled.div`
  color: #ffc900;
  font-size: 40px;
  font-weight: 700;
  margin-top: 26px;
`;
