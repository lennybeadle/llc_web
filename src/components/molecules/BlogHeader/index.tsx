import * as React from 'react';
import { BreadcrumbNav } from '../BreadcrumbNav';
import * as S from './styles';
interface BlogHeaderProps {
  title: string;
  description: string;
  subTitle: string;
}

export const BlogHeader: React.FC<BlogHeaderProps> = ({
  title,
  description,
  subTitle,
}) => {
  return (
    <S.HeaderContainer role="banner">
      <BreadcrumbNav subTitle={subTitle} />
      <S.HeaderTitle>{title}</S.HeaderTitle>
      <S.HeaderDescription>{description}</S.HeaderDescription>
    </S.HeaderContainer>
  );
};
