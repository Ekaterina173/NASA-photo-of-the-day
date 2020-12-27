import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  padding-top: 30px;
`;

const StyledP = styled.p`
  font-size: larger;
  font-family: Arial, Helvetica, sans-serif;
`;

const StyledImg = styled.img`
  width: 100%;
`;

const ImageSection = (props) => {
  const { data } = props;
  console.log("date din imageSection", data);

  return (
    <StyledContainer>
      <StyledP>{data.title}</StyledP>
      <StyledImg src={data.url} alt={data.title} />
      <StyledP>
        <b>Description:</b>
        <br />
        {data.explanation}
      </StyledP>
    </StyledContainer>
  );
};

export default ImageSection;
