import * as React from 'react';
import * as S from './styles';
import DividerIcon from '../../../assets/images/icons/divider.svg';

interface BreadcrumbNavProps {
  subTitle: string;
}
export const BreadcrumbNav: React.FC<BreadcrumbNavProps> = ({ subTitle }) => {
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
          <S.CurrentPage>{subTitle}</S.CurrentPage>
        </S.BreadcrumbItem>
      </S.BreadcrumbList>
    </S.Nav>
  );
};
