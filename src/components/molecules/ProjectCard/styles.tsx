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
export const CardContent = styled.div<{ image: string; dim?: boolean }>`
  position: relative;
  background: url(${(props) => props.image}) no-repeat center center;
  background-size: cover;
  flex-grow: 1;
  color: #fff;
  width: 100%;
  height: 500px;
  padding: 450px 40px 20px;
  font: 700 20px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  border-radius: 20px;
  overflow: hidden;

  /* Dim overlay effect */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${(props) =>
      props.dim ? 'rgba(0, 0, 0, 0.5)' : 'transparent'};
    z-index: 1; /* Place the dim overlay behind the text */
    transition: background 0.2s ease;
    border-radius: 20px; /* Match the card's border radius */
  }

  /* Ensure content (text) is above the dimmed background */
  > * {
    position: relative;
    z-index: 99;
  }

  &:hover {
    transform: scale(1.02);
  }

  &:focus {
    outline: 3px solid #fff;
    outline-offset: -3px;
  }

  @media (max-width: 991px) {
    background-size: cover;
    height: auto; /* Adjust height for mobile if needed */
  }
`;
