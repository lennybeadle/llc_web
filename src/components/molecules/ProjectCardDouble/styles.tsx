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
  font: 700 20px Roboto, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
    gap: 10px; /* Adjust gap for mobile */
  }
`;

export const CardContent = styled.div<{ image: string; height?: string }>`
  background: url(${(props) => props.image}) no-repeat center center;
  background-size: cover;
  border-radius: 20px; /* Ensure consistent border radius */
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  height: ${(props) => props.height || '250px'};
  padding: 20px;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); /* Optional shadow on hover */
  }
  &:focus {
    outline: 3px solid #fff;
    outline-offset: -3px;
  }

  @media (max-width: 991px) {
    background-size: cover;
    height: 500px; /* Example height for mobile */
    padding: 400px 40px 20px;
    border-radius: 20px; /* Keep consistent on mobile */
  }
`;