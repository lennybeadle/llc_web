import styled from 'styled-components';

export const Layout = styled.main`
  background-color: #f9fafb;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  text-align: center;
  justify-content: center;
  padding: 55px 80px;
  @media (max-width: 991px) {
    padding: 20px 20px;
  }
  width: 100%;
`;
