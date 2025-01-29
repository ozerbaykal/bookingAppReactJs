import React from "react";
import { Link } from "react-router-dom";
//import { LogoImg } from "../../assets/vocationLogo.png";

const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 right-0 w-full bg-white text-black shadow-md">
        <div className="bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container py-[2px] sm:block hidden ">
            <div className="flex justify-between  ">
              <p>20% off next booking</p>
              <p>Mobile No.444444444</p>
            </div>
          </div>
        </div>

        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            {/* logo */}
            <div>
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <img
                  src="./src/assets/Vocation.png"
                  alt="Gologo"
                  className="h-16"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
