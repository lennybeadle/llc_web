import * as React from 'react';
import { FormInput } from '../../atoms/FormInput';
import * as S from './styles';
export interface CommentFormProps {
  onSubmit: (data: CommentFormData) => void;
}
export interface CommentFormData {
  name: string;
  email: string;
  website?: string;
  comment: string;
  rememberMe: boolean;
}

export const CommentForm: React.FC<CommentFormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    onSubmit({
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      website: formData.get('website') as string,
      comment: formData.get('comment') as string,
      rememberMe: formData.get('rememberMe') === 'on',
    });
  };

  return (
    <S.FormContainer onSubmit={handleSubmit}>
      <S.FormWrapper>
        <S.FormTitle>Leave a Reply</S.FormTitle>
        <S.FormDisclaimer>
          Your email address will not be published. Required fields are marked
          <S.RequiredMark> *</S.RequiredMark>
        </S.FormDisclaimer>

        <S.InputGroup>
          <FormInput label="Name" required id="name" />
          <FormInput label="Email" required type="email" id="email" />
          <FormInput label="Website" id="website" />
        </S.InputGroup>

        <S.CommentArea>
          <S.FormTextArea>
            <FormInput
              label="Add Comment"
              required
              type="textarea"
              id="website"
            />
          </S.FormTextArea>
        </S.CommentArea>

        <S.RememberMeContainer>
          <input type="checkbox" id="rememberMe" name="rememberMe" />
          <label htmlFor="rememberMe">
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </S.RememberMeContainer>

        <S.SubmitButton type="submit">Post Comment</S.SubmitButton>
      </S.FormWrapper>
    </S.FormContainer>
  );
};
