import styled from 'styled-components';
export const FooterContainer = styled.footer`
  background-color: rgba(250, 250, 250, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 45px 80px 0;
  @media (max-width: 991px) {
    padding: 50px 20px;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  max-width: 100%;
  gap: 20px;
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

export const MainSection = styled.div`
  display: flex;
  width: 45%;
  gap: 20px;
  @media (max-width: 991px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 82%;
  @media (max-width: 991px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const Logo = styled.img`
  width: 116px;
  margin-left: 11px;
  @media (max-width: 991px) {
    margin-left: 10px;
  }
`;

export const Description = styled.p`
  margin-top: 32px;
  color: rgba(90, 90, 90, 1);
  font: 400 16px/26px Roboto, sans-serif;
  @media (max-width: 991px) {
    text-align: center;
  }
`;

export const SocialLinks = styled.div`
  margin-top: 33px;
  display: flex;
  width: 50%;
  justify-content: space-between;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const SecondarySection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 55%;
  gap: 20px;
  @media (max-width: 991px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

export const Copyright = styled.div`
  border-top: 1px solid rgba(222, 222, 222, 0.35);
  width: 100%;
  margin-top: 70px;
  padding: 28px 70px;
  text-align: center;
  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 10px 20px;
  }
`;

export const CopyrightText = styled.p`
  color: rgba(90, 90, 90, 1);
  font: 400 15px/1.3 Roboto, sans-serif;
  display: flex;
  justify-content: center;
  gap: 12px;
`;

export const CompanyName = styled.span`
  flex-grow: 0;
`;

export const WebAgency = styled.p`
  color: #000;
  font-size: 28px;
  text-align: center;
  display: flex;
  align-items: center;
`;
