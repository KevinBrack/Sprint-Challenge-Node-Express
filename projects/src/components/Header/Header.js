import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin-top: 5rem;
`;

const Header = () => {
  return (
    <StyledContainer>
      <h1>Sprint Challenge Node Express</h1>
      <h2>By Kevin Brack</h2>
    </StyledContainer>
  );
};

export default Header;
