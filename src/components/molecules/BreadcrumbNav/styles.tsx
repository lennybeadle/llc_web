import styled from 'styled-components';
export const Nav = styled.nav`
  display: flex;
  width: 90px;
  gap: 10px;
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 30px;
  white-space: nowrap;
  text-transform: uppercase;
  line-height: 2;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

export const BreadcrumbList = styled.ol`
  display: flex;
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: 0;
  align-items: center;
  justify-content: center;
`;

export const BreadcrumbItem = styled.li`
  display: flex;
  align-items: center;
`;

export const HomeLink = styled.a`
  color: #ffd800;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const CurrentPage = styled.span`
  color: #ffd800;
`;

export const Separator = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 8px;
  align-self: center;
`;
