import * as React from 'react';
import * as S from './styles';
interface ContactInfoProps {
  phone: string;
  email: string;
}
export const ContactSection = ({ phone, email }: ContactInfoProps) => {
  return (
    <S.ContactContainer>
      <S.ContactTitle>Contact Us</S.ContactTitle>
      <S.ContactInfo>
        Phone: {phone}
        <br />
      </S.ContactInfo>
      <S.ContactSupport>
        Need help or have a question?
        <br />
        Contact us at: {email}
      </S.ContactSupport>
    </S.ContactContainer>
  );
};
