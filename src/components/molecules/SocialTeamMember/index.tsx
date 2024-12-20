import { SocialLinks } from '../SocialLinks';
import * as S from './styles';
interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
  socialLinks: string[];
}

export const TeamMember = ({
  image,
  name,
  role,
  socialLinks,
}: TeamMemberProps) => {
  return (
    <S.MemberWrapper>
      <S.MemberImage loading="lazy" src={image} alt={`${name}`} />
      <S.MemberName>{name}</S.MemberName>
      <S.MemberRole>{role}</S.MemberRole>
      <SocialLinks links={socialLinks} />
    </S.MemberWrapper>
  );
};
