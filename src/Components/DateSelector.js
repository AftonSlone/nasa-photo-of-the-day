import React from "react";

const DateSelector = (props) => {
  const { date, setDate } = props;
  return (
    <div>
      <input
        name="date"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
    </div>
  );
};

export default DateSelector;
