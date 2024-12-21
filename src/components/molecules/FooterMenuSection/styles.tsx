import styled from 'styled-components';

export const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  color: rgba(90, 90, 90, 1);
  font: 400 16px Roboto, sans-serif;
`;

export const MenuTitle = styled.h2`
  color: rgba(0, 0, 0, 1);
  font-weight: 400;
  margin-bottom: 10px;
`;

export const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const MenuItem = styled.li`
  margin-bottom: 0px;
`;

export const MenuLink = styled.a`
  color: inherit;
  text-decoration: none;
  line-height: 2;
  &:hover {
    text-decoration: underline;
  }
  &:focus {
    outline: 2px solid #000;
    outline-offset: 2px;
  }
`;