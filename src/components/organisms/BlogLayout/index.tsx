import * as React from 'react';
import * as S from './styles';
import { BlogHeader } from '../../molecules/BlogHeader';
export const BlogLayout: React.FC = () => {
  return (
    <S.Layout>
      <BlogHeader
        title="Blog"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus turpis in eu mi bibendum neque egestas congue quisque."
      />
    </S.Layout>
  );
};
