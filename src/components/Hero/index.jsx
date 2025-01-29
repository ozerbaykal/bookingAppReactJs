import React from "react";
import Form from "./Form";
import TextContent from "./TextContent";
import Button from "../Button";

const Hero = () => {
  return (
    <div className="bg-black/10 h-full">
      <div className="h-full flex  justify-center items-center p-4 bg-primary/10">
        <div className="container grid grid-cols-1 gap-4">
          {/* text content */}
          <TextContent />
          {/* form */}
          <div className="bg-white space-y-4 rounded-md p-4 relative">
            <Form />

            <div
              className=" flex justify-center items-center absolute -bottom-5
           left-1/2 -translate-x-1/2 "
            >
              <Button item="Search Now" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
