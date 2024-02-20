import React from 'react';
import { StyledButton } from './StyledButton';

const Button = ({ children, type, onClick, disabled }) => {
  return (
    <StyledButton type={type} onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
