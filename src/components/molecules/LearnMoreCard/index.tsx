import * as S from './styles';
import DesignIcon from '../../../assets/images/icons/design.svg';
interface LearnMoreCardProps {
  title: string;
  description: string;
}

export const LearnMoreCard = ({ title, description }: LearnMoreCardProps) => {
  return (
    <S.CardContainer>
      <S.ServiceIcon loading="lazy" src={DesignIcon} alt="" />
      <S.ServiceTitle>{title}</S.ServiceTitle>
      <S.ServiceDescription>{description}</S.ServiceDescription>
      <S.LearnMoreButton>
        <span>Learn More</span>
        <S.ArrowIcon loading="lazy" src="/arrow-icon.svg" alt="" />
      </S.LearnMoreButton>
    </S.CardContainer>
  );
};

export default LearnMoreCard;
