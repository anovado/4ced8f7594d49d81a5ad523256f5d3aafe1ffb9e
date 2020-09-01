import React from "react";

function Cart(props) {
  return (
    <div
      className={`fixed bottom-0 w-full ${
        props.openCart ? "block" : "hidden"
      } `}
    >
      <div className="flex justify-between bg-brown rounded mx-2 px-4 py-2 text-white">
        <div>
          <p className="font-bold leading-none">5 Items | Rp 125.000</p>
          <p className="text-sm leading-none">Termasuk ongkos kirim</p>
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
  );
}

export default Cart;
