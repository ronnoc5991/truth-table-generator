import type { ReactElement } from 'react';
import { StyledA1Input } from './A1Input.styles';

type A1InputProps = {
  type: 'text';
  value: string;
  onChange: (value: string) => void;
};

export default function A1Input({ type, value, onChange }: A1InputProps): ReactElement {
  return (
    <StyledA1Input type={type} value={value} onChange={(event) => onChange(event.target.value)} />
  );
}
