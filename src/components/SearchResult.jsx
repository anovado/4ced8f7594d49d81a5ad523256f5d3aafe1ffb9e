import React, { Fragment } from "react";

function SearchResult(props) {
  const { name, address, setLocation } = props;

  return (
    <Fragment>
      <div className="result-container" onClick={() => setLocation(name)}>
        <div className="col-span-2 mx-auto bg-platinum rounded-full py-2">
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            className="location-marker w-6 h-6 mx-2 text-silver"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="col-span-10">
          <p className="text-charcoal font-medium">{name}</p>
          <p className="text-silver text-sm">
            {address.length > 40 ? address.slice(0, 40) + "..." : address}
          </p>
        </div>
      </div>
      <div className="result-container">
        <div className="col-span-2" />
        <div className="col-span-10 py-1">
          <hr className="opacity-75" />
        </div>
      </div>
    </Fragment>
  );
}

export default SearchResult;
