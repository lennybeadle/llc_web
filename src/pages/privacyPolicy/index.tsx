import { Header } from '../../components/molecules/Header';
import { Footer } from '../../components/organisms/Footer';
import * as S from './styles';
import { Helmet } from 'react-helmet-async';
const PrivacyPolicy: React.FC = () => {
  return (
    <S.mainContainer>
      <Helmet>
        <title>Consent Policy | LLC Tech</title>
      </Helmet>
      <Header />
      <S.PageContainer>
        <S.Header>Privacy Policy</S.Header>
        <S.Paragraph>
          Your privacy is important to us. This Privacy Policy outlines how we
          collect, use, and protect your personal information.
        </S.Paragraph>

        <S.SubHeader>Information We Collect</S.SubHeader>
        <S.Paragraph>
          We may collect the following types of information:
        </S.Paragraph>
        <S.List>
          <S.ListItem>
            Personal details such as your name, email address, and contact
            information.
          </S.ListItem>
          <S.ListItem>
            Browsing data, including IP address, browser type, and visited
            pages.
          </S.ListItem>
          <S.ListItem>
            Any other information you voluntarily provide through forms or
            interactions on our site.
          </S.ListItem>
        </S.List>

        <S.SubHeader>How We Use Your Information</S.SubHeader>
        <S.Paragraph>We use your information to:</S.Paragraph>
        <S.List>
          <S.ListItem>Provide and improve our services.</S.ListItem>
          <S.ListItem>Respond to your inquiries and requests.</S.ListItem>
          <S.ListItem>
            Analyze website performance and user behavior.
          </S.ListItem>
          <S.ListItem>Comply with legal obligations.</S.ListItem>
        </S.List>

        <S.SubHeader>Sharing Your Information</S.SubHeader>
        <S.Paragraph>
          We do not sell or rent your personal information. However, we may
          share it with trusted third parties for purposes such as hosting,
          analytics, or legal compliance.
        </S.Paragraph>

        <S.SubHeader>Your Rights</S.SubHeader>
        <S.Paragraph>You have the right to:</S.Paragraph>
        <S.List>
          <S.ListItem>
            Access, update, or delete your personal information.
          </S.ListItem>
          <S.ListItem>Withdraw consent for data processing.</S.ListItem>
          <S.ListItem>File a complaint with relevant authorities.</S.ListItem>
        </S.List>

        <S.SubHeader>Contact Us</S.SubHeader>
        <S.Paragraph>
          If you have any questions or concerns about this Privacy Policy,
          please contact us at{' '}
          <S.Link href="mailto:saket@llctech.co.uk">saket@llctech.co.uk</S.Link>
        </S.Paragraph>
      </S.PageContainer>
      <Footer />
    </S.mainContainer>
  );
};

export default PrivacyPolicy;
