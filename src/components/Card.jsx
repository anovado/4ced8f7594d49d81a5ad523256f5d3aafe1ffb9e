import React from "react";

function Card(props) {
  const { picture, name, by, price, setOpenCart } = props;

  return (
    <div className="rounded-lg overflow-hidden border border-solid border-cultured shadow-outer mb-6">
      <img src={require(`../assets/images/${picture}`)} alt="Meal" />
      <div className="m-4 text-charcoal">
        <div className="flex items-center">
          <p className="mr-1">4.5</p>
          {[1, 2, 3, 4].map((_, i) => (
            <img
              src={require("../assets/images/star.svg")}
              className="w-3 ml-1"
              alt="star icon"
              key={i}
            />
          ))}
          <img
            src={require("../assets/images/quality.svg")}
            className="w-3 ml-1"
            alt="star icon"
          />
        </div>
        <p className="font-medium text-xl">{name}</p>
        <p className="text-silver text-sm my-1">{by}</p>
        <div className="flex items-center my-4 justify-between">
          <p className="text-lg font-medium">Rp {price.toLocaleString()}</p>
          <button
            className="bg-crayola text-white px-6 py-2 rounded-md flex text-lg focus:outline-none"
            onClick={() => setOpenCart(true)}
          >
            ADD{" "}
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="plus w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
