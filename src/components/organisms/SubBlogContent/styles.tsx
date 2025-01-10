import styled from 'styled-components';
export const Content = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 991px) {
    width: 90%;
  }
`;
export const ContentWrapper = styled.article`
  width: 90%;
  margin: 60px auto;
  padding: 0 20px;
  font-size: 16px/1.6;
  font-weight: 400;
  color: #5a5a5a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 991px) {
    padding: 0;
  }
`;

export const FeaturedImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 40px;
`;

export const ContentText = styled.div`
  width: 90%;
  h2 {
    font-size: 25px;
    color: #000;
    margin: 40px 0 20px;
  }
  p {
    margin-bottom: 20px;
  }
  @media (max-width: 991px) {
    width: 100%;
  }
`;
