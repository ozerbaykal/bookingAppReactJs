import React from "react";

const TopBar = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container py-[2px] sm:block hidden ">
        <div className="flex justify-between  ">
          <p>Enjoy 25% discount on your next trip!</p>
          <p>Mobile No: 444-444 Vacation</p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
