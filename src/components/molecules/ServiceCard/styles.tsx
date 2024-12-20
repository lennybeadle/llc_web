import styled from 'styled-components';
export const CardWrapper = styled.div`
  border-radius: 25px;
  background-color: #ffffff;
  box-shadow: 0px 20px 80px rgba(193, 199, 212, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: start;
  padding: 62px 56px;
  margin-bottom: 39px;

  @media (max-width: 991px) {
    padding: 40px 20px;
  }
`;

export const ServiceIcon = styled.img`
  aspect-ratio: 0.62;
  object-fit: contain;
  object-position: center;
  width: 80px;
`;

export const ServiceTitle = styled.h3`
  color: #000000;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  margin: 24px 0;
`;

export const ServiceDescription = styled.p`
  color: #5a5a5a;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
`;
