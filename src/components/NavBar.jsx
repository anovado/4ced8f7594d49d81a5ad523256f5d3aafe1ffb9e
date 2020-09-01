import React from "react";

function NavBar(props) {
  const { location, setModal } = props;

  return (
    <div className="flex items-center mx-2 mb-4 text-charcoal">
      <svg
        viewBox="0 0 20 20"
        fill="currentColor"
        className="arrow-left w-8 h-8 text-charcoal"
      >
        <path
          fillRule="evenodd"
          d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
          clipRule="evenodd"
        />
      </svg>
      <div className="ml-4">
        <p className="text-silver text-xs leading-none">ALAMAT PENGANTARAN</p>
        <button
          className="flex text-xl items-center font-semibold focus:outline-none"
          onClick={() => setModal(true)}
        >
          {location}{" "}
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            className="chevron-down text-silver w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default NavBar;
