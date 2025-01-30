import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const Header = ({ setOrderPopup }) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-xl font-semibold text-black/70">Book Your Trip</h1>
      </div>
      <div>
        <IoCloseOutline
          className="text-2xl cursor-pointer "
          onClick={() => setOrderPopup(false)}
        />
      </div>
    </div>
  );
};

export default Header;
