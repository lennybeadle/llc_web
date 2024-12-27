import styled from 'styled-components';

export const FormContainer = styled.form`
  margin: 30px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 991px) {
    width: 90%;
  }
`;

export const FormTitle = styled.h2`
  color: rgba(0, 0, 0, 1);
  font-size: 20px;
  font-weight: 800;
  margin: 97px 0 0 0;
  @media (max-width: 991px) {
    margin: 40px 0 0 10px;
  }
`;

export const FormDisclaimer = styled.p`
  font-size: 13px;
  line-height: 2;
  margin: 20px 0 0 0;
  color: #5a5a5a;
  @media (max-width: 991px) {
    margin-left: 10px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px; /* Increased padding for a more spacious feel */
  font-size: 16px; /* Slightly larger text */
  border: 2px solid #bbb; /* Thicker border */
  border-radius: 10px; /* Rounder corners */
  outline: none;
  box-sizing: border-box;

  &:focus {
    border-color: #ffd800;
    box-shadow: 0 0 6px rgba(255, 216, 0, 0.6); /* Enhanced focus effect */
  }

  &::placeholder {
    color: #999;
    font-size: 15px; /* Slightly larger placeholder text */
  }
`;

export const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 28px;
  gap: 20px;
  width: 100%;

  /* Force all inputs to share space evenly on desktop */
  > * {
    flex: 1;
  }

  @media (max-width: 991px) {
    flex-direction: column; /* Stack inputs on mobile */
    gap: 10px; /* Reduce gap between inputs for smaller screens */
  }
`;

export const CommentArea = styled.div`
  display: flex;
  margin-top: 28px;
  gap: 20px;
  flex-wrap: wrap;
  width: 100%;
`;

export const RememberMeContainer = styled.div`
  display: flex;
  gap: 9px;
  font-size: 14px;
  line-height: 2;
  margin: 31px 0 0 0;
  align-items: center;
  color: #5a5a5a;
  input[type="checkbox"] {
    cursor: pointer;
  }
  label {
    cursor: pointer;
  }
`;

export const RequiredMark = styled.span`
  font-weight: 700;
  color: rgba(204, 0, 0, 1);
`;

export const SubmitButton = styled.button`
  border-radius: 15px;
  background-color: rgba(255, 216, 0, 1);
  color: rgba(47, 34, 7, 1);
  font-weight: 500;
  text-align: center;
  line-height: 2;
  white-space: nowrap;
  margin: 28px 0 0 0;
  padding: 12px 20px; /* Slightly larger padding for better click area */
  border: none;
  cursor: pointer;
  width: 30%;
  font-size: 16px; /* Slightly larger text */
  @media (max-width: 991px) {
    margin-left: 10px;
    padding: 10px 20px;
    width: 40%;
  }
  @media (max-width: 541px) {
    margin: 45px auto 10px;
    padding: 10px 20px;
    width: 100%;
    height: 60px;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 15px; /* Increased padding for a more spacious feel */
  font-size: 16px; /* Larger text for readability */
  border: 2px solid #bbb; /* Thicker border */
  border-radius: 10px; /* Rounder corners */
  outline: none;
  resize: none;
  height: 120px; /* Slightly taller default height */
  box-sizing: border-box;

  &:focus {
    border-color: #ffd800;
    box-shadow: 0 0 6px rgba(255, 216, 0, 0.6); /* Enhanced focus effect */
  }

  &::placeholder {
    color: #999;
    font-size: 15px; /* Slightly larger placeholder text */
  }
`;

export const FormTextArea = styled.div`
  width: 100%;
`;