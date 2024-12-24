import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  width: 50%;
  flex-direction: column;
  align-items: center;
`;

export const HeaderTitle = styled.h1`
  color: #000;
  font-size: 30px;
  font-weight: 800;
  margin: 36px 0 0;
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
  }
`;
