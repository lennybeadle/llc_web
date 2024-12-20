import styled from 'styled-components';
export const CardWrapper = styled.div<{ width: string }>`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: ${(props) => props.width};
  margin-left: ${(props) => (props.width === '65%' ? '0' : '20px')};
  @media (max-width: 991px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const CardContent = styled.div<{ image: string }>`
  background-image: url(${(props) => props.image});
  flex-grow: 1;
  color: #fff;
  width: 100%;
  padding: 437px 40px 44px;
  font: 700 20px Roboto, sans-serif;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }

  &:focus {
    outline: 3px solid #fff;
    outline-offset: -3px;
  }

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 35px;
    padding: 100px 20px 0;
  }
`;
