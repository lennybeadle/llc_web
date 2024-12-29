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
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  align-items: center;
  width: 90%;
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

export const ImageColumn = styled.div`
  border-radius: 20px;
  width: 100%;
  position: relative;
`;

export const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  aspect-ratio: 1.3;
  border-radius: 20px;
`;

export const PlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  line-height: 1;

  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
  }
`;
export const ContentColumn = styled.div`
  display: flex;
  align-items: center;
`;

export const MissionInfo = styled.div`
  padding: 20px;
  @media (max-width: 991px) {
    text-align: center;
  }
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
  font-weight: 500;
  width: 30%;
  font-size: 15px;
  white-space: nowrap;
  @media (max-width: 991px) {
    width: 50%;
    margin: auto;
  }
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
  width: 90%;
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
    width: 80%;
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
