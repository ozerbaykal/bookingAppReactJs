import React from "react";

import Image from "./Image";
import TextContent from "./TextContent";

const Banner = () => {
  return (
    <>
      <div className="min-h-[550px] bg-gray-100">
        <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 ">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              {/* Image section */}
              <Image />

              {/* text content section */}
              <TextContent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
