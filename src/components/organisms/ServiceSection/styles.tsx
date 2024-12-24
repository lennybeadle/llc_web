import styled from 'styled-components';
export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 1055px;
  width: 100%;
  padding: 2px 70px 11px;
  position: relative;
  z-index: 10;

  @media (max-width: 991px) {
    padding: 40px 20px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  max-width: 1290px;
  margin: 0 auto;
  gap: 20px;

  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

export const LeftColumn = styled.div`
  width: 42%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const HeaderTag = styled.span`
  text-transform: uppercase;
  font: 700 16px/2 Roboto, sans-serif;
  color: #000000;
`;

export const MainHeading = styled.h1`
  font-size: 60px;
  line-height: 72px;
  margin: 34px 0;
  font-weight: 700;
  color: #000000;
  @media (max-width: 991px) {
    font-size: 40px;
    line-height: 53px;
  }
`;

export const Description = styled.p`
  color: #5a5a5a;
  font-size: 16px;
  line-height: 26px;
  margin-bottom: 55px;
`;

export const ExploreButton = styled.button`
  border-radius: 15px;
  background-color: #ffd800;
  color: #2f2207;
  padding: 19px 40px;
  border: none;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s;
  width: 40%;
  &:hover {
    transform: translateY(-2px);
  }

  &:focus {
    outline: 2px solid #2f2207;
    outline-offset: 2px;
  }
`;

export const RightColumn = styled.div`
  width: 58%;
  display: flex;
  flex-direction: row;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const ServicesGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 10px;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;

export const ServicesGridLow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 50px 10px 10px 10px;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;

export const LeftDirection = styled.div<{ image: string }>`
  position: absolute;
  top: 0;
  right: 150px;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: url(${(props) => props.image}) no-repeat;
  background-position: right;
`;
