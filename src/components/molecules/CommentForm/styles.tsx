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
  align-items: left;
  @media (max-width: 991px) {
    width: 80%;
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
  @media (max-width: 991px) {
    margin-left: 10px;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 28px;
  gap: 20px;
  flex-wrap: wrap;
  width: 100%;
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
  font-size: 13px;
  line-height: 2;
  margin: 31px 0 0 0;
  align-items: center;
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
  margin: 28px 0 0 0;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  width: 20%;
  @media (max-width: 991px) {
    margin-left: 10px;
    padding: 0 20px;
    width: 40%;
  }
  @media (max-width: 541px) {
    margin-left: 10px;
    padding: 0 20px;
    width: 80%;
  }
`;

export const FormTextArea = styled.div`
  width: 100%;
`;
