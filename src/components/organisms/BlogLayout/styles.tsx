import styled from 'styled-components';

export const Layout = styled.main`
  background-color: #f9fafb;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Roboto, sans-serif;
  text-align: center;
  justify-content: center;
  padding: 55px 80px;
  @media (max-width: 991px) {
    padding: 20px 20px;
  }
  width: 100%;
`;
