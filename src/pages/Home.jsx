import React, { useState, Fragment } from "react";
import NavBar from "../components/NavBar";
import LunchDinner from "../components/LunchDinner";
import Menu from "../components/Menu";
import Cart from "../components/Cart";
import DateSelector from "../components/DateSelector";

function Home() {
  const [lunch, setLunch] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [selectedDate, setSelectedDate] = useState(0);

  const days = [
    { day: "SENIN", date: 10 },
    { day: "SELASA", date: 11 },
    { day: "RABU", date: 12 },
    { day: "KAMIS", date: 13 },
    { day: "JUMAT", date: 14 },
    { day: "SABTU", date: 15 },
    { day: "MINGGU", date: 16 },
    { day: "SENIN", date: 17 },
    { day: "SELASA", date: 18 },
    { day: "RABU", date: 19 },
    { day: "KAMIS", date: 20 },
    { day: "JUMAT", date: 21 },
    { day: "SABTU", date: 22 },
    { day: "MINGGU", date: 23 },
  ];

  const menu = [
    {
      picture: "carbonara.webp",
      name: "Carbonara Fettuccine",
      by: "by Kulina • Uptown Lunch",
      price: 35000,
    },
    {
      picture: "chicken-teriyaki.webp",
      name: "Japanese Chicken Teriyaki",
      by: "by Kulina • Uptown Lunch",
      price: 35000,
    },
    {
      picture: "duck-breast.webp",
      name: "Duck Breast with Red Curry",
      by: "by Kulina • Uptown Lunch",
      price: 35000,
    },
    {
      picture: "sweet-chicken.webp",
      name: "Sweet and Spicy Chicken",
      by: "by Kulina • Uptown Lunch",
      price: 35000,
    },
  ];

  return (
    <div className="font-body topbar">
      <div className="top-0 pt-4 sticky bg-white">
        {/* component navbar */}
        <NavBar setModal={(e) => setOpenModal(e)} />

        {/* component date selector */}
        <div className="date-selector">
          {days.map((el, i) => (
            <Fragment key={i}>
              <DateSelector
                selectedDate={selectedDate}
                setDate={(e) => setSelectedDate(e)}
                day={el.day}
                date={el.date}
                index={i}
              />
            </Fragment>
          ))}
        </div>
        <hr className="bg-cultured" />
      </div>

      {/* lunch and dinner button section */}
      <LunchDinner lunch={lunch} setMeal={(e) => setLunch(e)} />

      {/* menu section */}
      <Menu
        days={days}
        selectedDate={selectedDate}
        menu={menu}
        setOpenCart={(e) => setOpenCart(e)}
      />

      {/* location modal */}
      <div
        className={`modal-location ${
          openModal ? "show-modal block" : "hidden"
        }`}
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
              // type="search"
              name="search"
              placeholder="Masukkan lokasi anda"
            />
          </div>
          <div className="ml-2 mr-4 my-4 grid grid-cols-12 items-center">
            <div className="col-span-2 mx-auto bg-cultured rounded-full py-2">
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
              <p className="text-charcoal font-medium">Kulina</p>
              <p className="text-silver text-sm mb-2">
                Perum Gedongan Indah I No 19-20 Gedongan...
              </p>
              <hr />
            </div>
          </div>
          <div className="ml-2 mr-4 my-4 grid grid-cols-12 items-center">
            <div className="col-span-2 mx-auto bg-cultured rounded-full py-2">
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
              <p className="text-charcoal font-medium">Kulina</p>
              <p className="text-silver text-sm mb-2">
                Perum Gedongan Indah I No 19-20 Gedongan...
              </p>
              <hr />
            </div>
          </div>
        </div>
      </div>

      {/* Cart */}
      <Cart openCart={openCart} />
    </div>
  );
}

export default Home;
