import React from "react";
import nasa_logo_pic from "../nasa_logo_pic.jpg";
import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  height: max-content;
  justify-content: center;
  align-items: center;
`;

const StyledLogo = styled.img`
  width: 95px;
  height: 64px;
`;
const StyledH2 = styled.h2`
  color: rgb(13, 13, 133);
`;

const Header = (props) => {
  return (
    <StyledHeader>
      <StyledLogo src={nasa_logo_pic} alt="nasa-logo" />
      <StyledH2>Astronomy Picture of the Day</StyledH2>
    </StyledHeader>
  );
};

export default Header;
