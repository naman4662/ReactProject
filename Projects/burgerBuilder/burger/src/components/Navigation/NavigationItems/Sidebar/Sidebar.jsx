import React from "react";
import Logo from "../../../UI/Logo/Logo";
import NavigationItems from "../NavigationItems";
import classes from "./Sidebar.module.css";
import Backdrop from "../../../UI/Backdrop/Backdrop";
import Auxilliary from "../../../../hoc/Auxiliary";

const Sidebar = (props) => {
  let attachedClasses = [classes.Sidebar, classes.Close];
  props.open
    ? (attachedClasses = [classes.Sidebar, classes.Open])
    : (attachedClasses = [classes.Sidebar, classes.Close]);
  return (
    <Auxilliary>
      <Backdrop show={props.open} clicked={props.closed} className={attachedClasses.join(' ')} />
      <div className={classes.Sidebar}>
        <Logo height="11%" />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Auxilliary>
  );
};

export default Sidebar;
