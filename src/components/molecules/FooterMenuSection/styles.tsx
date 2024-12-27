import styled from 'styled-components';

export const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  color: rgba(90, 90, 90, 1);
  font: 400 16px Roboto, sans-serif;
  @media (max-width: 991px) {
    align-items: center;
    justify-content: center;
  }
`;

export const MenuTitle = styled.h3`
  color: rgba(0, 0, 0, 1);
  font-weight: 800;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const MenuItem = styled.li`
  margin-bottom: 0px;
  @media (max-width: 991px) {
    text-align: center;
  }
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
