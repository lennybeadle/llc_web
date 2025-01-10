import styled from 'styled-components';
export const HeaderContainer = styled.header`
  background-color: #f9fafb;
  padding: 86px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media (max-width: 991px) {
    padding: 40px 20px;
  }
`;

export const Breadcrumb = styled.nav`
  display: flex;
  align-items: center;
  gap: 9px;
  text-transform: uppercase;
  font: 500 12px;
  color: #5a5a5a;
`;

export const Title = styled.h1`
  color: #000;
  font-size: 30px;
  font-weight: 800;
  line-height: 1;
  text-align: center;
  margin: 31px 0;
  max-width: 629px;
`;

export const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #5a5a5a;
  font: 700 12px;
  text-transform: uppercase;
`;
