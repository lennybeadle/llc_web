import * as React from 'react';
import { FooterMenuSection } from '../../molecules/FooterMenuSection';
import { ContactSection } from '../../molecules/ContactSection';
import LogoIcon from '../../../assets/images/logos/logo.svg';
import FacebookIcon from '../../../assets/images/icons/footer_Facebook.svg';
import TwitterIcon from '../../../assets/images/icons/footer_Twitter.svg';
import InstagramIcon from '../../../assets/images/icons/footer_Instagram.svg';
import YouTubeIcon from '../../../assets/images/icons/footer_YouTube.svg';

import * as S from './styles';
export const Footer: React.FC = () => {
  const siteMenuLinks = [
    { text: 'Services', href: '/services' },
    { text: 'Our Team', href: '/team' },
    { text: 'Pricing Plans', href: '/pricing' },
    { text: 'We are Hiring', href: '/careers' },
    { text: 'Privacy Policy', href: '/privacy' },
  ];

  const usefulLinks = [
    { text: 'Introduction', href: '/intro' },
    { text: 'About Us', href: '/about' },
    { text: 'App Features', href: '/features' },
    { text: 'Pricing Plans', href: '/pricing' },
    { text: 'Cookie Policy', href: '/cookies' },
  ];

  return (
    <S.FooterContainer>
      <S.FooterContent>
        <S.MainSection>
          <S.CompanyInfo>
            <S.Logo src={LogoIcon} alt="LLC Tech Logo" loading="lazy" />
            <S.Description>
              At LLC Tech, we deliver tailored solutions to drive growth and
              build lasting partnerships, ensuring your business stays ahead.
            </S.Description>
            <S.SocialLinks>
              <img src={FacebookIcon} alt="facebook" />
              <img src={TwitterIcon} alt="twitter" />
              <img src={InstagramIcon} alt="instagram" />
              <img src={YouTubeIcon} alt="youtube" />
            </S.SocialLinks>
          </S.CompanyInfo>
        </S.MainSection>

        <S.SecondarySection>
          <FooterMenuSection title="Site Menu" links={siteMenuLinks} />
          <FooterMenuSection title="Useful Links" links={usefulLinks} />
          <ContactSection
            phone="(+63) 555 1212"
            fax="(+63) 555 0100"
            email="info@mail.com"
          />
        </S.SecondarySection>
      </S.FooterContent>

      <S.Copyright>
        <S.CopyrightText>
          <span>Copyright © 2024 - WordPress Theme by </span>
          <S.CompanyName>CreativeThemes</S.CompanyName>
        </S.CopyrightText>
      </S.Copyright>
    </S.FooterContainer>
  );
};
