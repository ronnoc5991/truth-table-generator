import type { ReactElement } from 'react';
import A1Input from '../../atoms/a1-input';
import A2Button from '../../atoms/a2-button';
import { StyledM1FormField } from './M1FormField.styles';

type M1FormFieldProps = {
  value: string;
  onChange: (value: string) => void;
  onRemoveField: () => void;
};

export default function M1FormField({
  value,
  onChange,
  onRemoveField,
}: M1FormFieldProps): ReactElement {
  return (
    <StyledM1FormField>
      <A1Input type="text" value={value} onChange={onChange} />
      <A2Button label="X" onClick={onRemoveField} />
    </StyledM1FormField>
  );
}
