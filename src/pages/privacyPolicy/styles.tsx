import styled from 'styled-components';

export const mainContainer = styled.main`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
`;
export const PageContainer = styled.div`
  padding: 2rem;
  font-family: system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  color: #333;
`;

export const Header = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #111;
`;

export const SubHeader = styled.h2`
  font-size: 1.5rem;
  margin: 1.5rem 0 0.5rem 0;
  color: #222;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

export const List = styled.ul`
  margin: 1rem 0;
  padding-left: 1.5rem;
`;

export const ListItem = styled.li`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export const Link = styled.a`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
