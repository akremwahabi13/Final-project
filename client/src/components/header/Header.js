import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

import Search from "./Search";
import myPhoto from "../../images/LETS.png";
const Header = () => {
  return (
    <div className="header ">
      <nav
        className="navbar navbar-expand  justify-content-between align-middle"
        id="myNav"
        style={{
          borderRadius: "15px",
        }}
      >
        <Link to="/" className="logo">
          <img
            src={myPhoto}
            alt=""
            width="50px"
            style={{ marginRight: "10px" }}
          />
          <h1
            className="navbar-brand text-uppercase p-0 m-0"
            onClick={() => window.scrollTo({ top: 0 })}
          >
            Let's Camp
          </h1>
        </Link>

        <Search />

        <Menu />
      </nav>
    </div>
  );
};

export default Header;
