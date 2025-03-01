import styled from 'styled-components';
export const Nav = styled.nav<{
  textColor?: string;
  marginLeft?: string;
  textAlign?: string;
}>`
  display: flex;
  width: 100%;
  font-size: 13px;
  font-weight: 500;
  color: ${(props) => props.textColor || '#ffffff'};
  margin-left: ${(props) => props.marginLeft || '0'};
  white-space: nowrap;
  text-transform: uppercase;
  line-height: 2;
  display: flex;
  justify-content: ${(props) => props.textAlign};
  @media (max-width: 991px) {
    white-space: initial;
    justify-content: center;
    align-items: center;
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
    // text-decoration: underline;
    color: #ffd800;
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
