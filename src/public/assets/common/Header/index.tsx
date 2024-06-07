import Head from "next/head";
import React from "react";
import { IconIgniteShop } from "@/public/assets/images";
import "./styles.css";

const Header = () => {
  return (
    <div className="Header__Container">
      <div className="header">
        <div className="header__logo">
          <IconIgniteShop />
        </div>
        <div className="header__title">
          <h1 className="header__title--text">Ignite</h1>
          <p>Shop</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
