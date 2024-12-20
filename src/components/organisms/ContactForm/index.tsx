import * as React from 'react';
import * as S from './styles';
import ContactUserImage from '../../../assets/images/backgrounds/contactUser.svg';
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
export const ContactForm: React.FC = () => {
  const [formData, setFormData] = React.useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <S.FormSection>
      <S.FormHeader>
        <S.Subtitle>Let's talk</S.Subtitle>
        <S.Title>Your Input Matters to Us</S.Title>
        <S.Description>
          Share your thoughts or questions with us—your feedback helps us
          deliver tailored solutions that truly make a difference.
        </S.Description>
      </S.FormHeader>

      <S.FormContainer onSubmit={handleSubmit}>
        <S.FormGrid>
          <S.FormColumn>
            <S.FormImage src={ContactUserImage} alt="" aria-hidden="true" />
          </S.FormColumn>

          <S.FormColumn>
            <S.FormGroup>
              <S.Label htmlFor="name">
                Name <S.Required aria-hidden="true">*</S.Required>
              </S.Label>
              <S.Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                aria-required="true"
              />
            </S.FormGroup>

            <S.FormGroup>
              <S.Label htmlFor="email">
                Email <S.Required aria-hidden="true">*</S.Required>
              </S.Label>
              <S.Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-required="true"
              />
            </S.FormGroup>

            <S.FormGroup>
              <S.Label htmlFor="subject">Subject</S.Label>
              <S.Input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
              />
            </S.FormGroup>

            <S.FormGroup>
              <S.Label htmlFor="message">
                Comment or Message <S.Required aria-hidden="true">*</S.Required>
              </S.Label>
              <S.Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                aria-required="true"
                rows={8}
              />
            </S.FormGroup>

            <S.SubmitButton type="submit">Send Message</S.SubmitButton>
          </S.FormColumn>
        </S.FormGrid>
      </S.FormContainer>
    </S.FormSection>
  );
};
