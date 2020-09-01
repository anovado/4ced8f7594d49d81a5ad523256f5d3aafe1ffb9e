import React from "react";

function LunchDinner(props) {
  const { lunch, setMeal } = props;

  return (
    <div className="mx-4 mt-36 mb-2 grid grid-cols-12">
      <button
        className={`col-span-6 py-2 focus:outline-none radius-first ${
          lunch
            ? "border border-solid border-charcoal bg-charcoal text-white"
            : "border border-solid border-platinum text-platinum font-bold"
        }`}
        onClick={() => setMeal(true)}
      >
        Lunch
      </button>
      <button
        className={`col-span-6 py-2 focus:outline-none radius-second ${
          lunch
            ? "border border-solid border-platinum text-platinum font-bold"
            : "border border-solid border-charcoal bg-charcoal text-white"
        }`}
        onClick={() => setMeal(false)}
      >
        Dinner
      </button>
    </div>
  );
}

export default LunchDinner;
