import React, { useState } from "react";
import Navbar from "../components/Navbar/index";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/index";
import Popup from "../components/PopUp";

const Layout = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Outlet />
      <Footer />
      <Popup
        orderPopup={orderPopup}
        setOrderPopup={setOrderPopup}
        handleOrderPopup={handleOrderPopup}
      />
    </>
  );
};

export default Layout;
