import styled from 'styled-components';
export const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: rgba(90, 90, 90, 1);
  font: 400 16px Roboto, sans-serif;
`;

export const ContactTitle = styled.h2`
  color: rgba(0, 0, 0, 1);
  font-weight: 400;
  margin-bottom: 10px;
`;

export const ContactInfo = styled.p`
  line-height: 26px;
  margin: 0;
`;

export const ContactSupport = styled.p`
  line-height: 26px;
  margin: 35px 0 0;
`;
