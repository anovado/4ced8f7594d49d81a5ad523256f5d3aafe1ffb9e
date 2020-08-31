import React, { useState } from "react";
import NavBar from "../components/NavBar";

function Home() {
  const [lunch, setLunch] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [selectedDate, setSelectedDate] = useState(0);

  const days = [
    { day: "SEN", date: 10 },
    { day: "SEL", date: 11 },
    { day: "RAB", date: 12 },
    { day: "KAM", date: 13 },
    { day: "JUM", date: 14 },
    { day: "SAB", date: 15 },
    { day: "MIN", date: 16 },
    { day: "SEN", date: 17 },
    { day: "SEL", date: 18 },
    { day: "RAB", date: 19 },
    { day: "KAM", date: 20 },
    { day: "JUM", date: 21 },
    { day: "SAB", date: 22 },
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
    <div className="font-body">
      <div className="top-0 fixed bg-white">
        <NavBar setModal={(e) => setOpenModal(e)} />
        <div className="ml-4 mt-6 mb-2 flex overflow-x-auto overflow-y-hidden text-center">
          {days.map((el, i) => (
            <div
              className={`ml-2 mr-2 ${
                i === selectedDate && el.day !== "SAB" && el.day !== "MIN"
                  ? "text-white bg-charcoal rounded-full py-2 px-3"
                  : el.day === "SAB" || el.day === "MIN"
                  ? "text-platinum bg-white rounded-full py-2 px-3"
                  : "text-charcoal bg-white rounded-full py-2 px-3"
              }`}
              key={i}
              onClick={() => setSelectedDate(i)}
            >
              <p className="text-xs leading-none">{el.day}</p>
              <p className="font-semibold leading-none">{el.date}</p>
            </div>
          ))}
        </div>
        <hr className="bg-cultured" />
      </div>
      {/* lunch and dinner button section */}
      <div className="mx-4 mt-36 mb-2 grid grid-cols-12">
        <button
          className={`col-span-6 py-2 focus:outline-none radius-first ${
            lunch
              ? "border border-solid border-charcoal bg-charcoal text-white"
              : "border border-solid border-platinum text-platinum font-bold"
          }`}
          onClick={() => setLunch(!lunch)}
        >
          Lunch
        </button>
        <button
          className={`col-span-6 py-2 focus:outline-none radius-second ${
            lunch
              ? "border border-solid border-platinum text-platinum font-bold"
              : "border border-solid border-charcoal bg-charcoal text-white"
          }`}
          onClick={() => setLunch(!lunch)}
        >
          Dinner
        </button>
      </div>
      {/* menu section */}
      <div className="mx-4 my-8">
        <p className="text-charcoal text-xl font-bold mb-4">
          Senin, 10 Agustus 2020
        </p>
        {menu.map((el, i) => (
          <div
            className="rounded-lg overflow-hidden border border-solid border-cultured shadow-outer mb-6"
            key={i}
          >
            <img src={require(`../assets/images/${el.picture}`)} alt="Meal" />
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
              <p className="font-medium text-xl">{el.name}</p>
              <p className="text-silver text-sm my-1">{el.by}</p>
              <div className="flex items-center my-4 justify-between">
                <p className="text-lg font-medium">
                  Rp {el.price.toLocaleString()}
                </p>
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
        ))}
      </div>

      {/* location modal */}
      <div
        className={`modal-location ${
          openModal ? "show-modal block" : "hidden"
        }`}
      >
        <div className="modal-content modal-animation bg-white">
          <div
            className="text-charcoal mx-4 text-4xl text-right"
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
      <div
        className={`fixed bottom-0 w-full ${openCart ? "block" : "hidden"} `}
      >
        <div className="flex justify-between bg-brown rounded-sm mx-2 px-4 py-2 text-white">
          <div className="">
            <p className="font-bold leading-none">5 Items | Rp 125.000</p>
            <p className="text-sm">Termasuk ongkos kirim</p>
          </div>
          <div className="flex items-center">
            <img src={require("../assets/images/cart.svg")} alt="Cart" />
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="chevron-right w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="cart-bg h-4" />
      </div>
      <div className="h-10" />
    </div>
  );
}

export default Home;
