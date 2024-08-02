import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.scss"

function MainLayout() {
  return (
    <div className={styles.container} >
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
