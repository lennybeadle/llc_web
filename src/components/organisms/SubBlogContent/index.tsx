import * as React from 'react';
import * as S from './styles';
import SubBlogImage from '../../../assets/images/backgrounds/SubBlog1.svg';
interface SubBlogContentProps {
  title: string;
  content: string;
  image: string;
}
export const SubBlogContent: React.FC<SubBlogContentProps> = ({
  title,
  content,
  image,
}) => {
  return (
    <S.Content>
      <S.ContentWrapper>
        <S.FeaturedImage
          src={image}
          alt="AI in Public Sector Services"
          loading="lazy"
        />
        <S.ContentText>
          <h2>{title}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />
        </S.ContentText>
      </S.ContentWrapper>
    </S.Content>
  );
};
