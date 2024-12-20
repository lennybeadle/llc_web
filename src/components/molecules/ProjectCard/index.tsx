import * as React from 'react';
import * as S from './styles';

interface ProjectCardProps {
  title: string;
  width: string;
  image: string;
}

export function ProjectCard({ title, width, image }: ProjectCardProps) {
  console.log(image);
  return (
    <S.CardWrapper width={width}>
      <S.CardContent tabIndex={0} image={image}>
        {title}
      </S.CardContent>
    </S.CardWrapper>
  );
}
