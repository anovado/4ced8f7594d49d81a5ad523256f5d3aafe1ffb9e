import React, { Fragment } from "react";
import SearchResult from "./SearchResult";

function ModalLocation(props) {
  const { openModal, setOpenModal, filtered, setKeyword, setLocation } = props;

  return (
    <div
      className={`modal-location ${openModal ? "show-modal block" : "hidden"}`}
    >
      <div className="modal-content modal-animation bg-white">
        <div
          className="text-charcoal mx-4 text-4xl text-right cursor-pointer"
          onClick={() => setOpenModal(false)}
        >
          &times;
        </div>
        <p className="text-xl text-charcoal mx-4 mt-2 pr-4 font-bold">
          Cari makanan yang tersedia di lokasi kamu!
        </p>
        <div className="ml-4 my-4 w-11/12 inline-flex overflow-hidden border border-solid border-platinum rounded-sm items-center">
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            className="location-marker w-6 h-6 mx-2 text-crayola"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          <input
            className="p-2 w-11/12 focus:outline-none"
            name="search"
            placeholder="Masukkan lokasi anda"
            autoComplete="OFF"
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
        {filtered
          ? filtered.map((el, i) => (
              <Fragment key={i}>
                <SearchResult
                  name={el.name}
                  address={el.address}
                  setLocation={(e) => setLocation(e)}
                />
              </Fragment>
            ))
          : null}
      </div>
    </div>
  );
}

export default ModalLocation;
