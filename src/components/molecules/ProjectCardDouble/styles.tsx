import styled from 'styled-components';

export const CardWrapper = styled.div<{ width: string }>`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: ${(props) => props.width};
  margin-left: 10px;
  @media (max-width: 991px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const DoubleCardContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  color: #fff;
  font: 700 20px Roboto, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const CardContent = styled.div<{
  height?: string;
  isSecond?: boolean;
  image: string;
}>`
  background: url(${(props) => props.image}) no-repeat center center;
  background-size: cover;
  padding: ${(props) =>
    props.height ? `${props.height} 40px 48px` : '169px 40px 48px'};
  margin-top: ${(props) => (props.isSecond ? '36px' : '0')};
  cursor: pointer;
  transition: transform 0.2s;
  border-radius: 20px;
  &:hover {
    transform: scale(1.02);
  }

  &:focus {
    outline: 3px solid #fff;
    outline-offset: -3px;
  }

  @media (max-width: 991px) {
    max-width: 100%;
    height: 500px;
    padding: 450px 40px 20px;
  }
`;
