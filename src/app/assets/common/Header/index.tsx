import Head from "next/head";
import React from "react";
import { IconIgniteShop } from "@/app/assets/img";
import "./styles.css";

const Header = () => {
  return (
    <div className="Header__Container">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
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
