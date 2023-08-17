import React from "react";
import { MainHeader } from "./Header.style";
function Header() {
  return (
    <MainHeader>
      <div>
        <p>Nowości</p>
      </div>
      <div>
        <a href="/products">
          <p>Produkty</p>
        </a>
      </div>
      <div>
        <p>O nas</p>
      </div>
      <div>
        <p>Regulamin</p>
      </div>
    </MainHeader>
  );
}

export default Header;
