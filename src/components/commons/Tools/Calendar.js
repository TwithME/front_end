import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "@emotion/styled";
import { useState } from "react";

// props로 setTripDate, setIsOpenCalendar 두개 보내야함!!
export default function CalendarTool(props) {
  const [selectDate, onChangeCalendar] = useState(null);

  const dateFormat = (date) => {
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${date.getFullYear()}-${month}-${day}`;
  };

  const handleDateChange = (date) => {
    onChangeCalendar(date);
    props.setTripDate([dateFormat(date[0]), dateFormat(date[1])]);
  };

  return (
    <>
      <CalendarOverlay
        onClick={() => {
          props.setIsOpenCalendar(false);
        }}
      />
      <StyledCalendar
        onChange={handleDateChange}
        value={selectDate}
        selectRange={true}
        minDate={props.restrict && new Date()}
        showNeighboringMonth={false}
        calendarType="US"
        formatDay={(locale, date) =>
          date.toLocaleString("en", { day: "numeric" })
        }
        next2Label={null}
        prev2Label={null}
      />
    </>
  );
}

const CalendarOverlay = styled.div`
  position: absolute;
  z-index: 60;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const StyledCalendar = styled(Calendar)`
  .react-calendar {
    width: 400px;
    max-width: 100%;
    background-color: #fff;
    color: #222;
    border-radius: 10px;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    line-height: 1.125em;
  }

  .react-calendar__navigation button {
    color: #6f48eb;
    min-width: 44px;
    background: none;
    font-size: 16px;
    margin-top: 8px;
  }

  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #f8f8fa;
  }

  .react-calendar__navigation button[disabled] {
    background-color: #f0f0f0;
  }

  abbr[title] {
    text-decoration: none;
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background: #f8f8fa;
    color: #6f48eb;
    border-radius: 6px;
  }
  .react-calendar__tile--now {
    background: none;
    border-radius: 6px;
    font-weight: default;
    color: default;
  }
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: #6f48eb33;
    border-radius: 6px;
    font-weight: bold;
    color: #6f48eb;
  }
  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: #f8f8fa;
  }
  .react-calendar__tile--active {
    background: #a587ff;
    border-radius: 6px;
    font-weight: bold;
    color: white;
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #a587ff;
    color: white;
  }
  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #f8f8fa;
  }
  .react-calendar__tile--range {
    background: rgba(200, 182, 255, 0.2);
    color: #a587ff;
    border-radius: 0;
  }
  .react-calendar__tile--rangeStart {
    border-radius: 6px;
    background: #a587ff;
    color: white;
  }
  .react-calendar__tile--rangeEnd {
    border-radius: 6px;
    background: #a587ff;
    color: white;
  }

  position: absolute;
  /* top: 55px;
  left: 120px; */
  z-index: 61;
`;
