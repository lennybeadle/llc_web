import * as S from './styles';

interface ServiceCardProp {
  icon: string;
  title: string;
  description: string;
}
export const ServiceCard = ({ icon, title, description }: ServiceCardProp) => {
  return (
    <S.CardWrapper>
      <S.ServiceIcon loading="lazy" src={icon} alt={title} />
      <S.ServiceTitle>{title}</S.ServiceTitle>
      <S.ServiceDescription>{description}</S.ServiceDescription>
    </S.CardWrapper>
  );
};
