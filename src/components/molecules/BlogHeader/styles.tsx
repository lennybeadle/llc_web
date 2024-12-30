import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  width: 50%;
  flex-direction: column;
  align-items: center;
  @media (max-width: 991px) {
    width: 70%;
  }
`;

export const HeaderTitle = styled.h1`
  color: #000;
  font-size: 30px;
  font-weight: 800;
  margin-top: 20px;
  @media (max-width: 991px) {
    margin-top: 12px;
    font-size: 24px;
  }
`;

export const HeaderDescription = styled.p`
  color: #5a5a5a;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  align-self: stretch;
  margin: 32px 0 0;
  @media (max-width: 991px) {
    max-width: 100%;
    display: none;
  }
`;
