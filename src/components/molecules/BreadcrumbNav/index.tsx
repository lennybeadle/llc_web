import * as React from 'react';
import * as S from './styles';
import DividerIcon from '../../../assets/images/icons/divider.svg';
export const BreadcrumbNav: React.FC = () => {
  return (
    <S.Nav aria-label="Breadcrumb">
      <S.BreadcrumbList>
        <S.BreadcrumbItem>
          <S.HomeLink href="/" aria-current="page">
            Home
          </S.HomeLink>
        </S.BreadcrumbItem>
        <S.Separator aria-hidden="true" src={DividerIcon} alt="" />
        <S.BreadcrumbItem>
          <S.CurrentPage>Blog</S.CurrentPage>
        </S.BreadcrumbItem>
      </S.BreadcrumbList>
    </S.Nav>
  );
};
