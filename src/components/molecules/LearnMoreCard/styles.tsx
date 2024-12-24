import styled from 'styled-components';

export const CardContainer = styled.article`
  border-radius: 25px;
  background-color: #fff;
  box-shadow: 0px 20px 80px rgba(193, 199, 212, 0.25);
  padding: 64px 63px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin: 20px;
  width: 100%;
  @media (max-width: 991px) {
    margin: 20px 0;
    padding: 40px 20px;
  }
`;

export const ServiceIcon = styled.img`
  aspect-ratio: 1.04;
  width: 80px;
`;

export const ServiceTitle = styled.h3`
  color: #000;
  font: 700 20px Roboto, sans-serif;
  margin: 53px 0 35px;

  @media (max-width: 991px) {
    margin: 40px 0 25px;
  }
`;

export const ServiceDescription = styled.p`
  color: #5a5a5a;
  font: 400 16px/26px Roboto, sans-serif;
  margin: 0 0 29px;
`;

export const LearnMoreButton = styled.button`
  display: flex;
  align-items: center;
  gap: 23px;
  color: #0a1821;
  font: 600 15px Mulish, sans-serif;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;

export const ArrowIcon = styled.img`
  width: 11px;
  aspect-ratio: 1;
`;
