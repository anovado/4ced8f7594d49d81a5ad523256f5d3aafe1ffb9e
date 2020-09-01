import React from "react";

function LunchDinner(props) {
  const { lunch, setMeal } = props;

  return (
    <div className="mx-4 mb-2 mt-36 grid grid-cols-12">
      <button
        className={`col-span-6 py-2 focus:outline-none radius-first ${
          lunch ? "btn-active" : "btn-nonactive"
        }`}
        onClick={() => setMeal(true)}
      >
        Lunch
      </button>
      <button
        className={`col-span-6 py-2 focus:outline-none radius-second ${
          lunch ? "btn-nonactive" : "btn-active"
        }`}
        onClick={() => setMeal(false)}
      >
        Dinner
      </button>
    </div>
  );
}

export default LunchDinner;
