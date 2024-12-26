import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  background-color: rgba(255, 255, 255, 1);
  position: relative;
  backdrop-filter: blur(8px);
  z-index: 999;
  border-bottom: 1px solid rgba(26, 26, 26, 0.05);
  padding: 0.5rem 0;
  width: 100%;
  color: rgb(255, 255, 255);
  font-size: 20px;
  line-height: 32px;
`;

export const Wrapper = styled.div`
  background-color: transparent;
  width: 65%;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9px 0 3px;
`;

export const StyledLogo = styled.img`
  width: 140px;
  height: 26px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05) translateY(-1px);
  }
`;

export const StyledButton = styled.button`
  background-color: yellow;
  color: rgb(104, 104, 104);
  border-radius: 50px;
  padding: 10px 36px;
  text-transform: none;
  font-weight: 500;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    background-color: #a0ff00;
    box-shadow: 0px 6px 15px rgba(156, 39, 176, 0.8);
  }
`;

export const StyledLoginButton = styled.button`
  color: rgb(104, 104, 104);
  border-radius: 50px;
  padding: 10px 36px;
  text-transform: none;
  font-weight: 500;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  border: none;
  cursor: pointer;
  text-decoration: none;
  margin: 0 5px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    background-color: #a0ff00;
    box-shadow: 0px 6px 15px rgba(156, 39, 176, 0.8);
  }
`;
