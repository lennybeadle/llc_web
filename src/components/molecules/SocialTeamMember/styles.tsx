import styled from 'styled-components';

export const MemberWrapper = styled.article`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  font-family: system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  text-align: center;
  height: 100%;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 35px;
  }
`;

export const MemberImage = styled.img`
  aspect-ratio: 0.86;
  object-fit: contain;
  object-position: center;
  width: 100%;
  border-radius: 25px;
  align-self: stretch;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const MemberName = styled.h2`
  color: rgba(255, 255, 255, 1);
  font-size: 21px;
  font-weight: 700;
  margin-top: 48px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

export const MemberRole = styled.p`
  color: rgba(255, 216, 0, 1);
  font-size: 17px;
  font-weight: 400;
  line-height: 2;
  margin-top: 18px;
`;
