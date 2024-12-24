import * as React from 'react';
import * as S from './styles';
export interface FormInputProps {
  label: string;
  required?: boolean;
  type?: string;
  id: string;
}
export const FormInput: React.FC<FormInputProps> = ({
  label,
  required = false,
  type = 'text',
  id,
}) => {
  return (
    <S.FormGroup type={type}>
      <S.Label htmlFor={id}>
        {label}
        {required && <S.Required aria-hidden="true">*</S.Required>}
      </S.Label>
      {type === 'text' || type === 'email' ? (
        <S.Input
          id={id}
          name={id}
          type={type}
          required={required}
          aria-required={required}
        />
      ) : (
        <S.TextArea
          id={id}
          name={id}
          required={required}
          aria-required={required}
          rows={8}
        />
      )}
    </S.FormGroup>
  );
};
