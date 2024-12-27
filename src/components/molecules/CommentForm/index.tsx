import { useState } from 'react';
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
  currentDate: string;
}

export const CommentForm: React.FC<CommentFormProps> = ({ onSubmit }) => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    website: '',
    comment: '',
    rememberMe: false,
  });
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value, type } = e.target;
    setFormValues({
      ...formValues,
      [id]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formValues,
      currentDate: new Date().toISOString(),
    });

    setFormValues({
      name: '',
      email: '',
      website: '',
      comment: '',
      rememberMe: false,
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
          <FormInput
            label="Name"
            required
            id="name"
            value={formValues.name}
            onChange={handleInputChange}
          />
          <FormInput
            label="Email"
            required
            type="email"
            id="email"
            value={formValues.email}
            onChange={handleInputChange}
          />
          <FormInput
            label="Website"
            id="website"
            value={formValues.website}
            onChange={handleInputChange}
          />
        </S.InputGroup>

        <S.CommentArea>
          <S.FormTextArea>
            <FormInput
              label="Add Comment"
              required
              type="textarea"
              id="comment"
              value={formValues.comment}
              onChange={handleInputChange}
            />
          </S.FormTextArea>
        </S.CommentArea>

        <S.RememberMeContainer>
          <input
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            checked={formValues.rememberMe}
            onChange={handleInputChange}
          />
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
