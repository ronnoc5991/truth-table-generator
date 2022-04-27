import type { ReactElement } from 'react';
import { StyledA2Button } from './A2Button.styles';

type A2ButtonProps = {
  label: string;
  onClick?: () => void;
  type?: 'submit';
};

export default function A2Button({ label, onClick, type }: A2ButtonProps): ReactElement {
  const onButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onClick?.();
  };

  return (
    <StyledA2Button onClick={onButtonClick} type={type}>
      {label}
    </StyledA2Button>
  );
}
