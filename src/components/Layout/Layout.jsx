import React from 'react';
import { StyledContainer } from './StyledLayout';


function Layout({ children }) {
  return (
    <StyledContainer>
      {children}

    </StyledContainer>
  );
}

export default Layout;
