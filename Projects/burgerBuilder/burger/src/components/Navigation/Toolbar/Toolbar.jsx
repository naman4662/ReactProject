import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../UI/Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const Toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <button onClick={props.openBar}>Click me</button>
      <Logo height="70%" />
      <nav>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
