import React from "react";

const DatePicker = (props) => {
  const { date } = props;
  return <input type="date" value={date} />;
};
export default DatePicker;
