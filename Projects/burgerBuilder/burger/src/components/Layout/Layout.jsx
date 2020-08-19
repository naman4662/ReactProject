import React, { useState } from "react";
import Auxilliary from "../../hoc/Auxiliary";
import styles from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Sidebar from "../Navigation/NavigationItems/Sidebar/Sidebar";

const Layout = (props) => {
  const [showSideBar,setShowSideBar] = useState(false)

  const updateSidebarHandler = () => {
    showSideBar ? setShowSideBar(false):setShowSideBar(true)
  }

  const openSideBar = () => {
    console.log("m")
    setShowSideBar(true)
  }
  return (
    <Auxilliary>
    <Toolbar  openBar={openSideBar}/>
      <Sidebar  open={showSideBar} closed={updateSidebarHandler} />
      
      <main className={styles.Content}>{props.children}</main>
    </Auxilliary>
  );
};

export default Layout;
