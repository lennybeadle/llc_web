import styled from 'styled-components';
export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 10;
`;

export const FeaturedProjectsLabel = styled.span`
  color: #000;
  margin-top: 60px;
  text-align: center;
  text-transform: uppercase;
  font: 700 16px/2 Roboto, sans-serif;
`;

export const SectionTitle = styled.h2`
  color: #000;
  text-align: center;
  margin-top: 36px;
  padding: 0 20px;
  font: 700 35px Roboto, sans-serif;
`;

export const Description = styled.p`
  color: #5a5a5a;
  text-align: center;
  margin-top: 33px;
  width: 50%;
  font: 400 16px/26px Roboto, sans-serif;
  @media (max-width: 991px) {
    width: 90%;
  }
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
  @media (max-width: 991px) {
    right: 0;
    background-size: 78%;
  }
`;

export const LearnMoreCards = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const LearnMoreCardRow = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;
