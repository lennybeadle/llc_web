import styled from 'styled-components';

export const SectionWrapper = styled.section`
  border-radius: 25px;
  background-color: rgba(60, 34, 4, 1);
  display: flex;
  flex-direction: column;
  width: 90%;
`;

export const ContentWrapper = styled.div`
  background-color: rgba(60, 34, 4, 1);
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 186px 80px 75px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 100px 20px 0;
  }
`;

export const Navigation = styled.nav`
  align-self: start;
  display: flex;
  jutify-content: center;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
  text-transform: uppercase;
  font-size: 16px/2;
  font-weight: 700;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

export const NavLink = styled.a`
  color: ${(props) =>
    props['aria-current'] ? 'rgba(255, 216, 0, 1)' : 'rgba(255, 255, 255, 1)'};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const NavDivider = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 8px;
`;

export const HeaderSection = styled.header`
  display: flex;
  margin-top: 44px;
  width: 100%;
  gap: 20px;
  font-family: system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  font-weight: 700;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

export const Title = styled.h1`
  color: rgba(255, 255, 255, 1);
  font-size: 61px;
  line-height: 66px;
  span {
    font-weight: 300;
  }
  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
    line-height: 49px;
  }
`;

export const HiringButton = styled.button`
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 1);
  border: none;
  display: flex;
  align-items: center;
  gap: 21px;
  font-size: 17px;
  color: rgba(47, 34, 7, 1);
  padding: 18px 30px;
  cursor: pointer;
  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 0 20px;
  }
`;

export const HiringIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 16px;
`;

export const TeamGrid = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 88px;
  @media (max-width: 991px) {
    flex-direction: column;
    margin-top: 40px;
  }
`;

export const MainTeamSection = styled.div`
  width: 100%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const TeamRow = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

export const TeamColumn = styled.div`
  width: 50%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const SideTeamSection = styled.div`
  width: 32%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;
