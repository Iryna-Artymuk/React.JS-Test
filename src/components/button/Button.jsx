import React from 'react';
import { StyledButton } from './StyledButton';

const Button = ({ children, type, onClick }) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
