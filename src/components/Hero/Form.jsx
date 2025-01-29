import React, { useState } from "react";

const Form = () => {
  const [priceValue, setPriceValue] = useState(100);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 py-3 gap-4">
      <div className="flex flex-col ">
        <label htmlFor="destination" className="opacity-75 whitespace-nowrap">
          Choose Your Travel <span className="max-md:hidden">Spot</span>
        </label>
        <input
          type="text"
          name="destination"
          id="destination"
          placeholder="Bodrum"
          className="w-full bg-gray-100 my-2 range accent-primary focus:outline-primary focus:outline outline-1 p-2 rounded-full"
        />
      </div>
      <div className="flex flex-col ">
        <label htmlFor="destination" className="opacity-75">
          Date
        </label>
        <input
          type="date"
          name="destination"
          id="destination"
          placeholder="Bodrum"
          className="w-full !placeholder-slate-400 bg-gray-100 my-2 range accent-primary focus:outline-primary focus:outline outline-1 p-2 rounded-full"
        />
      </div>
      <div>
        <label htmlFor="destination" className="opacity-70 block">
          <div className="w-full flex justify-between items-center">
            <p>Max Price</p>
            <p className="font-bold text-xl">$ {priceValue}</p>
          </div>
        </label>
        <div className=" bg-gray-100 rounded-full p-2 flex items-center justify-center ">
          <input
            type="range"
            name="destination"
            id="destination"
            className="appearance-none w-full bg-gradient-to-r from-primary to-secondary h-2 rounded-full my-2"
            min="150"
            max="1500"
            value={priceValue}
            step="10"
            onChange={(e) => setPriceValue(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
