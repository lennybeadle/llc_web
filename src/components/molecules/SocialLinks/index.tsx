import * as S from './styles';
interface SocialLinksProps {
  links: string[];
}
export const SocialLinks = ({ links }: SocialLinksProps) => {
  return (
    <S.SocialLinksWrapper>
      {links.map((link, index) => (
        <S.SocialIcon
          key={index}
          loading="lazy"
          src={link}
          alt="Social media icon"
        />
      ))}
    </S.SocialLinksWrapper>
  );
};
