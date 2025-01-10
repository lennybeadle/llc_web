import styled from 'styled-components';

export const FormGroup = styled.div<{ type: string }>`
  margin-bottom: 26px;
  display: flex;
  flex-direction: ${(props) =>
    props.type === 'text' || props.type === 'email' ? 'row' : 'column'};
  gap: 5px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  color: #5a5a5a;
  font-weight: 700;
  font-size: 16px;
`;

export const Required = styled.span`
  color: #ff0000;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 15px;
  border: 2px solid #edeff2;
  padding: 0 20px;
  font-size: 16px;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: #ffd800;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  border-radius: 15px;
  border: 2px solid #edeff2;
  padding: 15px 20px;
  font-size: 16px;
  resize: vertical;
  min-height: 220px;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: #ffd800;
  }
`;
