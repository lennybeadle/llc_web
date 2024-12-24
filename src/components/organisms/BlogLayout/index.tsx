import * as React from 'react';
import * as S from './styles';
import { BlogHeader } from '../../molecules/BlogHeader';

interface BlogLayoutProps {
  title: string;
  subTitle: string;
  content: string;
}
export const BlogLayout: React.FC<BlogLayoutProps> = ({
  title,
  subTitle,
  content,
}) => {
  return (
    <S.Layout>
      <BlogHeader title={title} description={content} subTitle={subTitle} />
    </S.Layout>
  );
};
