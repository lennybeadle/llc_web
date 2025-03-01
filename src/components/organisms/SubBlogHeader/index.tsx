import * as React from 'react';
import * as S from './styles';
import KeyImage from '../../../assets/images/icons/fav-icon.svg';
interface SubBlogPostMeta {
  author: string;
  date: string;
  tags: string[];
}

interface SubBlogHeaderProps {
  title: string;
  meta: SubBlogPostMeta;
}

export const SubBlogHeader: React.FC<SubBlogHeaderProps> = ({
  title,
  meta,
}) => (
  <S.HeaderContainer>
    <S.Breadcrumb aria-label="Breadcrumb">
      <a href="/" style={{ color: '#FFD800' }}>
        Home
      </a>
      <span>{' > '}</span>
      <a style={{ textDecoration: 'none' }}>
        {meta.tags.map((tag, index) => (
          <React.Fragment key={index}>
            <span style={{ color: '#FFD800' }}> {tag} </span>
            {index < meta.tags.length - 1 && (
              <span style={{ color: '#54545' }}>{' > '}</span>
            )}
          </React.Fragment>
        ))}
      </a>
      <span>{'>'}</span>
      <span>{title}</span>
    </S.Breadcrumb>

    <S.Title>{title}</S.Title>

    <S.MetaInfo>
      <img src={KeyImage} alt="" width="24" height="24" loading="lazy" />
      <span>{meta.author}</span>
      <span>/</span>
      <time dateTime="2024-07-05">{meta.date}</time>
      <span>/</span>
      <span>{meta.tags.join(', ')}</span>
    </S.MetaInfo>
  </S.HeaderContainer>
);
