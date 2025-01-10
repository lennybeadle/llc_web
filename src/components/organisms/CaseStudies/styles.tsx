import styled from 'styled-components';
export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  position: relative;
  z-index: 10;
`;

export const FeaturedProjectsLabel = styled.span`
  color: #000;
  text-align: center;
  text-transform: uppercase;
  font-size: 16px/2;
  font-weight: 700;
  @media (max-width: 991px) {
    margin-bottom: 20px;
  }
`;

export const SectionTitle = styled.h2`
  color: #000;
  text-align: center;
  margin: 36px 0 0 0;
  font-size: 35px;
  font-weight: 700;
  @media (max-width: 991px) {
    margin: 0 0 10px 0;
    font-size: 25px;
  }
`;

export const Description = styled.p`
  color: #5a5a5a;
  text-align: center;
  margin: 33px 0 0 0;
  width: 50%;
  font-size: 16px/26px;
  font-weight: 400;
  @media (max-width: 991px) {
    max-width: 90%;
    margin: 0;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const TopProjectsRow = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  margin-top: 37px;
  justify-content: center;

  @media (max-width: 991px) {
    flex-direction: column;

    /* Force each child (ProjectCard, etc.) to the same width on mobile */
    > * {
      width: 100% !important;
      margin-bottom: 20px; /* optional spacing between cards */
    }
  }
`;

export const BottomProjectsRow = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  margin-top: 35px;
  justify-content: center;

  @media (max-width: 991px) {
    flex-direction: column;

    /* Force each child (ProjectCard, etc.) to the same width on mobile */
    > * {
      width: 100% !important;
      margin-bottom: 20px; /* optional spacing between cards */
    }
  }
`;

export const RightDirection = styled.div<{ image: string }>`
  position: absolute;
  top: 0;
  left: -150px;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: url(${(props) => props.image}) no-repeat;
  @media (max-width: 991px) {
    display: none;
  }
`;
