import { useNavigate } from 'react-router-dom';
import * as S from './styles';

interface ProjectCardProps {
  title: string;
  width: string;
  image: string;
  dim?: boolean;
}

export function ProjectCard({ title, width, image, dim }: ProjectCardProps) {
  const navigate = useNavigate();
  return (
    <S.CardWrapper width={width} onClick={() => navigate('/case-studies')}>
      <S.CardContent tabIndex={0} image={image} dim={dim}>
        <span>{title}</span>
      </S.CardContent>
    </S.CardWrapper>
  );
}
