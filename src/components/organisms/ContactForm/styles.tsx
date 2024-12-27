import styled from 'styled-components';
export const FormSection = styled.section`
  padding: 80px 20px;
  max-width: 1290px;
  margin: 0 auto;
  width: 100%;
`;

export const FormHeader = styled.div`
  text-align: center;
  margin-bottom: 64px;
`;

export const Subtitle = styled.p`
  color: #000;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;
  margin: 0 0 24px;
`;

export const Title = styled.h2`
  color: #000;
  font-size: 35px;
  font-weight: 700;
  margin: 0 0 13px;
`;

export const Description = styled.p`
  color: #5a5a5a;
  font-size: 16px;
  line-height: 26px;
  max-width: 600px;
  margin: 0 auto;
`;

export const FormContainer = styled.form`
  width: 100%;
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

export const FormColumn = styled.div``;

export const FormImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 15px;
`;

export const FormGroup = styled.div`
  margin-bottom: 26px;
`;

export const Label = styled.label`
  display: block;
  color: #5a5a5a;
  font-weight: 700;
  font-size: 15px;
  margin-bottom: 5px;
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
  font-size: 15px;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: #ffd800;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  border-radius: 15px;
  border: 2px solid #edeff2;
  padding: 15px 20px;
  font-size: 15px;
  resize: vertical;
  min-height: 220px;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: #ffd800;
  }
`;

export const SubmitButton = styled.button`
  background: #ffd800;
  color: #2f2207;
  border: none;
  border-radius: 15px;
  padding: 18px 37px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background: #ffe44d;
  }

  &:focus {
    outline: 2px solid #2f2207;
    outline-offset: 2px;
  }
`;
