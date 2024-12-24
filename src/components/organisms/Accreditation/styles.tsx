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
  font: 700 16px/2 Roboto, sans-serif;
`;

export const SectionTitle = styled.h2`
  color: #000;
  text-align: center;
  margin: 36px 0 0 36px;
  font: 700 35px Roboto, sans-serif;
`;

export const Description = styled.p`
  color: #5a5a5a;
  text-align: center;
  margin: 33px 0 0 33px;
  width: 50%;
  font: 400 16px/26px Roboto, sans-serif;
  @media (max-width: 991px) {
    max-width: 80%;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Logos = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 991px) {
    flex-direction: column;
    gap: 5px;
  }
`;
export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 220px;
  padding: 10px;
  box-sizing: border-box;
`;
export const Logo = styled.img`
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
`;
