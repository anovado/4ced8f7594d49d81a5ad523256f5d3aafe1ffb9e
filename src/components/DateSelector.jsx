import React from "react";

function DateSelector(props) {
  const { selectedDate, setDate, date, day, index } = props;

  return (
    <li
      className={`ml-2 mr-2 ${
        index === selectedDate && day !== "SABTU" && day !== "MINGGU"
          ? "text-white bg-charcoal date-circle"
          : day === "SABTU" || day === "MINGGU"
          ? "text-platinum bg-white date-circle"
          : "text-charcoal bg-white date-circle"
      }`}
      onClick={() => setDate(index)}
    >
      <p className="text-xs leading-none">{day.slice(0, 3)}</p>
      <p className="font-semibold leading-none">{date}</p>
    </li>
  );
}
export default DateSelector;
