import React from "react";
import Socials from "./Socials";
import { FaLocationArrow, FaMobileAlt } from "react-icons/fa";
import FooterLogo from "../../assets/images/GoLogo.png";

const FooterLeft = () => {
  return (
    <div className="py-8 px-4">
      <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
        <img src={FooterLogo} alt="" className="max-h-[60px]" />
        {/* TravelloGo */}
      </h1>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde facere ab
        hic accusamus omnis dolor voluptatibus illo, tempore eum tenetur.
      </p>
      <br />
      <div className="flex items-center gap-3 ">
        <FaLocationArrow />
        <p>Noida, Uttar Pradesh</p>
      </div>
      <div className="flex items-center gap-3 mt-3">
        <FaMobileAlt />
        <p>+91 123456789</p>
      </div>
      {/* socials  */}
      <Socials />
    </div>
  );
};

export default FooterLeft;
