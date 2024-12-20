import * as React from 'react';
import * as S from './styles';
interface ContactInfoProps {
  phone: string;
  fax: string;
  email: string;
}
export const ContactSection = ({ phone, fax, email }: ContactInfoProps) => {
  return (
    <S.ContactContainer>
      <S.ContactTitle>Contact Us</S.ContactTitle>
      <S.ContactInfo>
        Phone: {phone}
        <br />
        Fax: {fax}
      </S.ContactInfo>
      <S.ContactSupport>
        Need help or have a question?
        <br />
        Contact us at: {email}
      </S.ContactSupport>
    </S.ContactContainer>
  );
};
