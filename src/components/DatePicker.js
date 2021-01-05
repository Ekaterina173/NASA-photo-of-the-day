import React from "react";
import styled from "styled-components";
import { Input } from "reactstrap";

const StyledDatePicker = styled.div`
  @media only screen and (max-width: 575px) {
    Input {
      width: 170px;
    }
  }
  background-color: rgb(221, 218, 206);
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const DatePicker = (props) => {
  const { date, setDate } = props;
  return (
    <StyledDatePicker className="row">
      Pick-up a date for APOD to display &nbsp;
      <Input
        type="date"
        className="form-control col-xl-2 col-lg-2 col-md-3 col-sm-3"
        value={date}
        onChange={setDate}
      />
    </StyledDatePicker>
  );
};
export default DatePicker;
