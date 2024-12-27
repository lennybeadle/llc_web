import { useNavigate } from 'react-router-dom';
import * as S from './styles';

interface ProjectCardProps {
  title: string;
  width: string;
  image: string;
}

export function ProjectCard({ title, width, image }: ProjectCardProps) {
  const navigate = useNavigate();
  return (
    <S.CardWrapper width={width} onClick={() => navigate('/case-studies')}>
      <S.CardContent tabIndex={0} image={image}>
        {title}
      </S.CardContent>
    </S.CardWrapper>
  );
}
