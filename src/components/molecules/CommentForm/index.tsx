import { useState } from 'react';
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
    const { id, value } = e.target;
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
          <S.Input
            id="name"
            type="text"
            placeholder="Name *"
            value={formValues.name}
            onChange={handleInputChange}
            required
          />
          <S.Input
            id="email"
            type="email"
            placeholder="Email *"
            value={formValues.email}
            onChange={handleInputChange}
            required
          />
          <S.Input
            id="website"
            type="url"
            placeholder="Website"
            value={formValues.website}
            onChange={handleInputChange}
          />
        </S.InputGroup>

        <S.CommentArea>
          <S.TextArea
            id="comment"
            placeholder="Add Comment *"
            value={formValues.comment}
            onChange={handleInputChange}
            required
          />
        </S.CommentArea>

        <S.RememberMeContainer>
          <input
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            checked={formValues.rememberMe}
            onChange={(e) =>
              setFormValues({
                ...formValues,
                rememberMe: e.target.checked,
              })
            }
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