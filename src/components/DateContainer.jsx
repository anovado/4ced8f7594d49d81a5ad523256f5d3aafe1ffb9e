import React, { Fragment } from "react";
import DateSelector from "../components/DateSelector";

function DateContainer(props) {
  const { selectedDate, setDate, days } = props;

  return (
    <div className="date-selector ">
      <div className="list-container">
        <ul className="list">
          {days.map((el, i) => (
            <Fragment key={i}>
              <DateSelector
                selectedDate={selectedDate}
                setDate={(e) => setDate(e)}
                day={el.day}
                date={el.date}
                index={i}
              />
            </Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DateContainer;
