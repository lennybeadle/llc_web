import * as React from 'react';
import * as S from './styles';

export interface FooterLinkProps {
  text: string;
  href: string;
}

interface MenuSectionProps {
  title: string;
  links: FooterLinkProps[];
}
export const FooterMenuSection: React.FC<MenuSectionProps> = ({
  title,
  links,
}) => {
  return (
    <S.MenuContainer>
      <S.MenuTitle>{title}</S.MenuTitle>
      <S.LinkList>
        {links.map((link, index) => (
          <S.MenuItem key={index}>
            <S.MenuLink href={link.href}>{link.text}</S.MenuLink>
          </S.MenuItem>
        ))}
      </S.LinkList>
    </S.MenuContainer>
  );
};
