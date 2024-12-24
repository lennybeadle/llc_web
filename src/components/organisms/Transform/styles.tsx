import styled from 'styled-components';

export const MissionContainer = styled.section`
  width: 100%;
  margin: 100px auto 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

export const MissionContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  width: 80%;
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

  gap: 20px;
`;

export const MoreDetails = styled.button`
  border-radius: 15px;
  background-color: #ffd800;
  color: #2f2207;
  padding: 16px 23px;
  border: none;
  cursor: pointer;
  width: 30%;
`;
export const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
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

export const RightDirection = styled.div<{ image: string }>`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: url(${(props) => props.image}) no-repeat;
  background-position: right top;
`;

export const BlogSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
  text-align: center;
  margin-bottom: 50px;
  margin-top: 30px;
  @media (max-width: 991px) {
    padding: 40px 20px;
  }
`;

export const SectionTitle = styled.h2`
  color: #000;
  font-size: 35px;
  font-weight: 700;
  margin-bottom: 40px;
`;

export const BlogDescription = styled.p`
  color: #5a5a5a;
  text-align: center;
  margin: 0 0 20px 0;
  width: 50%;
  font: 400 16px/26px Roboto, sans-serif;
  @media (max-width: 991px) {
    width: 70%;
  }
`;

export const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;
