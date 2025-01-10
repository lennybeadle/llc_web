import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SectionTitle = styled.h2`
  color: #000;
  text-align: center;
  margin: 36px 0 0 36px;
  font: 700 35px;
`;

export const Description = styled.p`
  color: #5a5a5a;
  text-align: center;
  margin: 33px 0 0 33px;
  width: 50%;
  font: 400 16px/26px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;
