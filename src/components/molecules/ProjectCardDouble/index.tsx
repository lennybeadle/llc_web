// ProjectCardDouble.tsx
import { useNavigate } from 'react-router-dom';
import * as S from './styles';

interface ProjectCardDoubleProps {
  titles: string[];
  width: string;
  height?: string;
  images: string[];
  dim?: boolean;
}

export function ProjectCardDouble({
  titles,
  width,
  height,
  images,
  dim
}: ProjectCardDoubleProps) {
  const navigate = useNavigate();

  return (
    <S.CardWrapper width={width}>
      <S.DoubleCardContainer>
        {titles.map((title, index) => (
          <S.CardContent
            key={index}
            image={images[index]}
            height={height}
            dim={dim}
            onClick={() => navigate('/case-studies')}
          >
           <span>{title}</span> 
          </S.CardContent>
        ))}
      </S.DoubleCardContainer>
    </S.CardWrapper>
  );
}