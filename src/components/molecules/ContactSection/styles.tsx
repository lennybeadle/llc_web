import styled from 'styled-components';
export const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: rgba(90, 90, 90, 1);
  font: 400 16px Roboto, sans-serif;
  @media (max-width: 991px) {
    align-items: center;
    justify-content: center;
  }
`;

export const ContactTitle = styled.h3`
  color: rgba(0, 0, 0, 1);
  font-weight: 800;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const ContactInfo = styled.p`
  line-height: 26px;
  margin: 0;
  @media (max-width: 991px) {
    text-align: center;
  }
`;

export const ContactSupport = styled.p`
  line-height: 26px;
  margin: 35px 0 0;
  @media (max-width: 991px) {
    text-align: center;
  }
`;
