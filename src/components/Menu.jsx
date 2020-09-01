import React, { Fragment } from "react";
import Card from "./Card";

function Menu(props) {
  const { days, selectedDate, menu, setOpenCart } = props;

  return (
    <div className="mx-4 my-8">
      <p className="text-charcoal text-xl font-bold mb-4">
        {days[selectedDate].day !== "MINGGU" &&
        days[selectedDate].day !== "SABTU"
          ? days[selectedDate].day[0] +
            days[selectedDate].day.slice(1).toLowerCase() +
            ", " +
            days[selectedDate].date +
            " Agustus 2020"
          : "Tidak Tersedia"}
      </p>
      {menu.map((el, i) => (
        <Fragment key={i}>
          <Card
            picture={el.picture}
            name={el.name}
            by={el.by}
            price={el.price}
            setOpenCart={(e) => setOpenCart(e)}
          />
        </Fragment>
      ))}
    </div>
  );
}

export default Menu;
