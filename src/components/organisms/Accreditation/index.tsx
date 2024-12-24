import * as S from './styles';
import ISOIcon from '../../../assets/images/icons/iso.svg';
import AWSIcon from '../../../assets/images/icons/aws.svg';
import GoogleIcon from '../../../assets/images/icons/google-ad.svg';
import MicrosoftIcon from '../../../assets/images/icons/microsoft.svg';
import CyberIcon from '../../../assets/images/icons/cyber.svg';

export function Accreditation() {
  const images = [ISOIcon, AWSIcon, GoogleIcon, MicrosoftIcon, CyberIcon];
  return (
    <S.StyledSection aria-labelledby="case-studies-title">
      <S.FeaturedProjectsLabel>ACCREDITATIONS</S.FeaturedProjectsLabel>
      <S.SectionTitle id="case-studies-title">
        Recognized Excellence
      </S.SectionTitle>
      <S.Description>
        Proudly recognized for our commitment to excellence and innovation, our
        ceertifications and partnerships reflect our dedication to delivering
        reliable, secure, and cutting-edge solutions for our clients
      </S.Description>
      <S.Logos>
        {images.map((image, index) => (
          <S.LogoContainer key={index}>
            <S.Logo src={image} alt={`Logo ${index}`} />
          </S.LogoContainer>
        ))}
      </S.Logos>
    </S.StyledSection>
  );
}
