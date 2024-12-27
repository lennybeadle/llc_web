import { Header } from '../../components/molecules/Header';
import { Footer } from '../../components/organisms/Footer';
import * as S from './styles';
import { Helmet } from 'react-helmet-async';

const ConsentPolicy: React.FC = () => {
  return (
    <S.mainContainer>
      <Helmet>
        <title>Consent Policy | LLC Tech</title>
      </Helmet>
      <Header />
      <S.PageContainer>
        <S.Header>Cookie Consent Policy</S.Header>
        <S.Paragraph>
          Our website uses cookies to enhance your browsing experience, analyze
          website traffic, and personalize content. This Cookie Consent Policy
          explains what cookies are, how we use them, and how you can manage
          your preferences.
        </S.Paragraph>

        <S.SubHeader>What Are Cookies?</S.SubHeader>
        <S.Paragraph>
          Cookies are small text files that are stored on your device when you
          visit a website. They allow the website to remember your preferences,
          improve functionality, and deliver tailored content.
        </S.Paragraph>

        <S.SubHeader>Types of Cookies We Use</S.SubHeader>
        <S.List>
          <S.ListItem>
            <strong>Essential Cookies:</strong> Necessary for the website to
            function properly, such as enabling secure logins.
          </S.ListItem>
          <S.ListItem>
            <strong>Performance Cookies:</strong> Help us understand how
            visitors interact with our site, improving its performance and
            usability.
          </S.ListItem>
          <S.ListItem>
            <strong>Functional Cookies:</strong> Remember your preferences, such
            as language settings and login details.
          </S.ListItem>
          <S.ListItem>
            <strong>Advertising Cookies:</strong> Deliver personalized ads and
            measure their effectiveness.
          </S.ListItem>
        </S.List>

        <S.SubHeader>Managing Your Cookie Preferences</S.SubHeader>
        <S.Paragraph>
          You can manage your cookie preferences through our{' '}
          cookie settings or by
          adjusting your browser settings. Note that disabling cookies may
          impact the functionality of the website.
        </S.Paragraph>

        <S.SubHeader>Third-Party Cookies</S.SubHeader>
        <S.Paragraph>
          Some cookies on our website are placed by third parties, such as
          analytics providers and advertisers. These cookies are governed by the
          respective third-party privacy policies.
        </S.Paragraph>

        <S.SubHeader>Updates to This Policy</S.SubHeader>
        <S.Paragraph>
          We may update this Cookie Consent Policy from time to time. Please
          revisit this page periodically to stay informed about any changes.
        </S.Paragraph>
        <S.SubHeader>Contact Us</S.SubHeader>
        <S.Paragraph>
          If you have any questions or concerns about this Cookie Consent
          Policy, please contact us at{' '}
          <S.Link href="mailto:saket@llctech.co.uk">saket@llctech.co.uk</S.Link>
          .
        </S.Paragraph>
      </S.PageContainer>
      <Footer />
    </S.mainContainer>
  );
};

export default ConsentPolicy;
