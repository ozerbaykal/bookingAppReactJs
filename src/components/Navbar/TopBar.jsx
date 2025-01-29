import React from "react";

const TopBar = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container py-[2px] sm:block hidden ">
        <div className="flex justify-between  ">
          <p>20% off next booking</p>
          <p>Mobile No.444444444</p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
