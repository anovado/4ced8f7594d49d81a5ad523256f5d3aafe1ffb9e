import React, { useState, Fragment } from "react";
import NavBar from "../components/NavBar";
import LunchDinner from "../components/LunchDinner";
import Menu from "../components/Menu";
import Cart from "../components/Cart";
import DateSelector from "../components/DateSelector";
import ModalLocation from "../components/ModalLocation";

function Home() {
  const [lunch, setLunch] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [selectedDate, setSelectedDate] = useState(0);
  const [keyword, setKeyword] = useState("");

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

  const locations = [
    {
      name: "Kulina",
      address: "Jalan Tulodong Atas 28, Senayan, Kebayoran Baru, Jakarta",
    },
    {
      name: "Kulinari",
      address: "Ariobimo Sentral, Jalan Seadanya 1, Kebayoran Lama, Jakarta",
    },
    {
      name: "Kurina",
      address: "Jalan Seadanya Juga 2, Jakarta",
    },
    {
      name: "Alterra",
      address: "Jalan Tambora, Tidar, Malang",
    },
    {
      name: "Warmindo ",
      address: "Jalan Adi Soemarmo 20, RT 07 RW 06, Colomadu, Karanganyar",
    },
  ];

  let filtered;
  if (keyword.length > 3) {
    filtered = locations.filter(
      (el) =>
        el.name.toLowerCase().includes(keyword.toLowerCase()) ||
        el.address.toLowerCase().includes(keyword.toLowerCase())
    );
  }

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
      <ModalLocation
        openModal={openModal}
        setOpenModal={(e) => setOpenModal(e)}
        filtered={filtered}
        setKeyword={(e) => setKeyword(e)}
      />

      {/* Cart */}
      <Cart openCart={openCart} />
    </div>
  );
}

export default Home;
