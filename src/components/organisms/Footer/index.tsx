import * as React from 'react';
import { FooterMenuSection } from '../../molecules/FooterMenuSection';
import { ContactSection } from '../../molecules/ContactSection';
import LogoIcon from '../../../assets/images/logos/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import Font Awesome
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Import the LinkedIn icon

import * as S from './styles';

export const Footer = ({ type = 'icon' }) => {
  const siteMenuLinks = [
    { text: 'Services', href: '/services' },
    { text: 'Cookie Policy', href: '/consent-policy' },
    { text: 'Privacy Policy', href: '/privacy-policy' },
  ];

  const usefulLinks = [
    { text: 'Home', href: '/home' },
    { text: 'About Us', href: '/about' },
    { text: 'Our Services', href: '/services' },
    { text: 'Case Studies', href: '/case-studies' },
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
              <S.SocialLabel>Find us on LinkedIn</S.SocialLabel>
              <a
                href="https://www.linkedin.com/company/local-london-contractors/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Find us on LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </S.SocialLinks>
          </S.CompanyInfo>
        </S.MainSection>

        <S.SecondarySection>
          <FooterMenuSection title="Site Menu" links={siteMenuLinks} />
          <FooterMenuSection title="Useful Links" links={usefulLinks} />
          <ContactSection
            phone="(+44) 7380 185860"
            email="info@llctech.co.uk"
          />
        </S.SecondarySection>
      </S.FooterContent>

      <S.Copyright>
        <S.CopyrightText>
          <span>Copyright © 2025 • LLC-Tech</span>
          <S.CompanyName>All Rights Reserved</S.CompanyName>
        </S.CopyrightText>
      </S.Copyright>
    </S.FooterContainer>
  );
};