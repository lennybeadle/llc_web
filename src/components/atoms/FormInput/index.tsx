import * as React from 'react';
import * as S from './styles';
export interface FormInputProps {
  label: string;
  required?: boolean;
  type?: string;
  id: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
export const FormInput: React.FC<FormInputProps> = ({
  label,
  required = false,
  type = 'text',
  id,
  value,
  onChange,
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
          value={value}
          onChange={onChange}
        />
      ) : (
        <S.TextArea
          id={id}
          name={id}
          required={required}
          aria-required={required}
          rows={8}
          value={value}
          onChange={onChange}
        />
      )}
    </S.FormGroup>
  );
};
