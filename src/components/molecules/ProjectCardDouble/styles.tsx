import styled from 'styled-components';

export const CardWrapper = styled.div<{ width?: string }>`
  /* Desktop/tablet styles */
  width: ${(props) => props.width || '100%'};
  position: relative;
  background-size: cover;
  background-position: center center;
  border-radius: 20px;
  cursor: pointer;
  transition: transform 0.2s;

  /* If you have any default heights or padding, define them: */
  height: 250px; 
  padding: 20px;

  &:hover {
    transform: scale(1.02);
  }
  &:focus {
    outline: 3px solid #fff;
    outline-offset: -3px;
  }

  @media (max-width: 991px) {
    width: 100% !important; 
    height: 250px; 
    padding: 20px; 
    border-radius: 20px; /* or unset, if you prefer no radius on mobile */
    margin-bottom: 20px; /* some spacing between stacked cards */
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

/**
 * CardContent now correctly types `height?: string; isSecond?: boolean; image: string;`
 * so TS recognizes those props when passed from the parent component.
 */
export const CardContent = styled.div<{ image: string; height?: string }>`
  background: url(${(props) => props.image}) no-repeat center center;
  background-size: cover;
  border-radius: 20px;
  cursor: pointer;
  transition: transform 0.2s;

  /* Desktop defaults */
  height: ${(props) => props.height || '250px'};
  padding: 20px;

  &:hover {
    transform: scale(1.02);
  }
  &:focus {
    outline: 3px solid #fff;
    outline-offset: -3px;
  }

  @media (max-width: 991px) {
    width: 100% !important; 
    height: 250px !important; /* override to keep uniform */
    padding: 20px;           /* unify padding */
    border-radius: 20px;     /* or unset if you want no radius */
    margin-bottom: 20px;     /* space between stacked items */
    background-size: cover;  /* or contain, but cover is typical for consistent fill */
  }
`;