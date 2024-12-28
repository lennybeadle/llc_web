import * as React from 'react';
import * as S from './styles';
import DividerIcon from '../../../assets/images/icons/divider.svg';
import { useLocation } from 'react-router-dom';

interface BreadcrumbNavProps {
  subTitle: string;
}
export const BreadcrumbNav: React.FC<BreadcrumbNavProps> = ({ subTitle }) => {
  const location = useLocation();
  const isBlogPage = location.pathname === '/blog' || location.pathname === '/case-studies';
  const isCaseStudies = location.pathname === '/case-studies';
  return (
    <S.Nav textColor={isBlogPage ? '#5a5a5a' : '#ffffff'} marginLeft={isCaseStudies ? '-60px' : '0'} aria-label="Breadcrumb">
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
