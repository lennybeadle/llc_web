import styled from 'styled-components';
export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px 0 0 80px;
  @media (max-width: 991px) {
    padding-left: 20px;
  }
`;

export const FeaturedProjectsLabel = styled.span`
  color: #000;
  text-align: center;
  text-transform: uppercase;
  margin-left: 158px;
  font: 700 16px/2 Roboto, sans-serif;
`;

export const SectionTitle = styled.h2`
  color: #000;
  text-align: center;
  margin: 36px 0 0 158px;
  font: 700 35px Roboto, sans-serif;
`;

export const Description = styled.p`
  color: #5a5a5a;
  text-align: center;
  margin: 33px 0 0 158px;
  width: 50%;
  font: 400 16px/26px Roboto, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const TopProjectsRow = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  max-width: 1290px;
  margin-top: 37px;
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

export const BottomProjectsRow = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  max-width: 1290px;
  margin-top: 35px;
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;
