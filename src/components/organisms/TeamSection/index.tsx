import { TeamMember } from '../../molecules/SocialTeamMember';
import * as S from './styles';
import Member1 from '../../../assets/images/backgrounds/member1.svg';
import Member2 from '../../../assets/images/backgrounds/member2.svg';
import Member3 from '../../../assets/images/backgrounds/member3.svg';
import FacebookIcon from '../../../assets/images/icons/facebook.svg';
import TwitterIcon from '../../../assets/images/icons/twitter.svg';
import InstagramIcoon from '../../../assets/images/icons/instagram.svg';
import DividerIcon from '../../../assets/images/icons/divider.svg';
import BagIcon from '../../../assets/images/icons/bag.svg';
const teamData = [
  {
    name: 'Terry Green',
    role: 'Chief Executive',
    image: Member1,
    socialLinks: [FacebookIcon, TwitterIcon, InstagramIcoon],
  },
  {
    name: 'Brandon Hudson',
    role: 'Developer',
    image: Member2,
    socialLinks: [FacebookIcon, TwitterIcon, InstagramIcoon],
  },
  {
    name: 'Sara Fox',
    role: 'Web Designer',
    image: Member3,
    socialLinks: [FacebookIcon, TwitterIcon, InstagramIcoon],
  },
];

export const TeamSection = () => {
  return (
    <S.SectionWrapper>
      <S.ContentWrapper>
        <S.Navigation>
          <S.NavLink href="/">Home</S.NavLink>
          <S.NavDivider loading="lazy" src={DividerIcon} alt="" />
          <S.NavLink href="/about" aria-current="page">
            About
          </S.NavLink>
        </S.Navigation>

        <S.HeaderSection>
          <S.Title>
            <span>Meet the</span> Innovators <span>Behind</span> LLC Tech
          </S.Title>
          <S.HiringButton>
            <S.HiringIcon loading="lazy" src={BagIcon} alt="" />
            <span>We are hiring</span>
          </S.HiringButton>
        </S.HeaderSection>

        <S.TeamGrid>
          <S.MainTeamSection>
            <S.TeamRow>
              {teamData.map((member, index) => (
                <S.TeamColumn key={index}>
                  <TeamMember {...member} />
                </S.TeamColumn>
              ))}
            </S.TeamRow>
          </S.MainTeamSection>
        </S.TeamGrid>
      </S.ContentWrapper>
    </S.SectionWrapper>
  );
};
