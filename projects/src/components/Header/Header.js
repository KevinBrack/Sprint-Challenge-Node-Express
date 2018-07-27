import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin-top: 5rem;
`;

const CoralHeader = styled.h1`
  color: #f2697b;
`;

const Header = () => {
  return (
    <StyledContainer>
      <CoralHeader>Sprint Challenge Node Express</CoralHeader>
      <h2>By Kevin Brack</h2>
    </StyledContainer>
  );
};

export default Header;
