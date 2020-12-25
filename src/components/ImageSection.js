import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  padding-top: 10px;
`;

const StyledP = styled.p`
  font-size: larger;
  font-family: Arial, Helvetica, sans-serif;
  padding-left: 150px;
  padding-right: 150px;
`;

const ImageSection = (props) => {
  const { data } = props;
  console.log("date din imageSection", data);

  return (
    <StyledContainer>
      <StyledP>{data.title}</StyledP>
      <img src={data.url} alt={data.title} />
      <StyledP>
        <b>Description:</b>
        <br />
        {data.explanation}
      </StyledP>
    </StyledContainer>
  );
};

export default ImageSection;
