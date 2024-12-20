import * as React from 'react';
import * as S from './styles';
interface ProjectCardDoubleProps {
  titles: string[];
  width: string;
  height?: string;
}

export function ProjectCardDouble({
  titles,
  width,
  height,
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
          >
            {title}
          </S.CardContent>
        ))}
      </S.DoubleCardContainer>
    </S.CardWrapper>
  );
}
