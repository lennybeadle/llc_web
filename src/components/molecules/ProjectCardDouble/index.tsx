import * as React from 'react';
import * as S from './styles';
interface ProjectCardDoubleProps {
  titles: string[];
  width: string;
  height?: string;
  images: string[];
}

export function ProjectCardDouble({
  titles,
  width,
  height,
  images,
}: ProjectCardDoubleProps) {
  return (
    <S.CardWrapper width={width}>
      <S.DoubleCardContainer>
        {titles.map((title, index) => (
          <S.CardContent
            key={index}
            height={height}
            isSecond={index === 1}
            tabIndex={0}
            image={images[index]}
          >
            {title}
          </S.CardContent>
        ))}
      </S.DoubleCardContainer>
    </S.CardWrapper>
  );
}
