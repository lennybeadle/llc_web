import styled from 'styled-components';
export const CardWrapper = styled.div<{ width: string }>`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: ${(props) => props.width};
  height: 100%;
  object-fit: cover;
  margin-left: ${(props) => (props.width === '66%' ? '0' : '0px')};
  margin-right: ${(props) => (props.width === '32%' ? '0' : '5px')};
  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const CardContent = styled.div<{ image: string }>`
  background: url(${(props) => props.image}) no-repeat center center;
  background-size: cover;
  flex-grow: 1;
  color: #fff;
  width: 100%;
  height: 500px;
  padding: 450px 40px 20px;
  font: 700 20px Roboto, sans-serif;
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
  }
`;
