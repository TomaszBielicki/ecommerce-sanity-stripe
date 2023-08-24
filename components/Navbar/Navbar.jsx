import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

import { Cart } from "..";
import { useStateContext } from "../../context/StateContext";

import { NavWrapper } from "./Navbar.style";
const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <NavWrapper>
      <p className="logo">
        <Link href="/">Logo</Link>
      </p>

      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </NavWrapper>
  );
};

export default Navbar;
