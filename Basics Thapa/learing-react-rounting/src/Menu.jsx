import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <NavLink activeClassName="active_classes" to="/aboutus">
        About Us
      </NavLink>
      <NavLink to="/contactus">Contact Us</NavLink>
      <br />
      {/* <a href="/aboutus"> About Us</a>
      <a href="/contactus"> Contact Us</a> */}
    </>
  );
};

export default Menu;
