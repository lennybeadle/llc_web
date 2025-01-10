// styles.ts
import styled from 'styled-components';

export const CardWrapper = styled.div<{ width?: string }>`
  /* Desktop/tablet styles */
  width: ${(props) => props.width || '100%'};
  display: flex; /* Allows the DoubleCardContainer to layout properly */
  flex-direction: column;
  gap: 20px; /* Spacing between the cards */
  position: relative;
`;

export const DoubleCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #fff;
  font-size: 20px;
  font-weight: 700;

  @media (max-width: 991px) {
    max-width: 100%;
    gap: 10px; /* Adjust gap for mobile */
  }
`;

export const CardContent = styled.div<{
  image: string;
  height?: string;
  dim?: boolean;
}>`
  position: relative;
  border-radius: 20px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  height: ${(props) => props.height || '250px'};
  padding: 30px 40px;
  overflow: hidden;

  /* Background image */
  background: url(${(props) => props.image}) no-repeat center center;
  background-size: cover;

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
    z-index: 1; /* Ensure it covers the background */
    border-radius: 20px;
  }

  /* Content (text and children) */
  > * {
    position: relative;
    z-index: 999; /* Ensure content is above the dimmed background */
    color: #fff; /* Ensure text color remains readable */
    font-size: 20px;
    font-weight: 700;
  }

  /* No hover dimming */
  &:hover::before {
    background: ${(props) =>
      props.dim ? 'rgba(0, 0, 0, 0.5)' : 'transparent'};
  }

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); /* Optional shadow on hover */
  }

  &:focus {
    outline: 3px solid #fff;
    outline-offset: -3px;
  }

  @media (max-width: 991px) {
    height: 500px;
    padding: 450px 40px 20px;
  }
`;
