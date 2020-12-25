import React from "react";
import styled from "styled-components";
import { Input, InputGroup } from "reactstrap";

const StyledDatePicker = styled.div`
  background-color: rgb(221, 218, 206);
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledH5 = styled.h5`
  padding-right: 5px;
`;
const DatePicker = (props) => {
  const { date, setDate } = props;
  return (
    <StyledDatePicker>
      <StyledH5>Pick-up a date for APOD to display: </StyledH5>
      <InputGroup>
        <Input type="date" value={date} onChange={setDate} />
      </InputGroup>
    </StyledDatePicker>
  );
};
export default DatePicker;
