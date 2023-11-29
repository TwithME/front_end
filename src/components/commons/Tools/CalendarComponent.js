import { DateRange } from "react-date-range";
import React, { useEffect, useState } from "react";
import { getDate } from "date-fns";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

// props: setIsCalendar(캘린더 오픈), date(startDate, endDate, key), setDate
function CalendarComponent(props) {
  const onRangeChange = (ranges) => {
    console.log(ranges);

    props.setDate({
      startDate: ranges["selection"].startDate,
      endDate: ranges["selection"].endDate,
      key: ranges["selection"].key,
    });

    if (ranges["selection"].endDate !== ranges["selection"].startDate) {
      props.setIsCalendar(false);
    }
  };

  return (
    <DateRange
      ranges={[props.date]}
      onChange={onRangeChange}
      moveRangeOnFirstSelection={false}
      editableDateInputs={true}
    />
  );
}
export default CalendarComponent;
