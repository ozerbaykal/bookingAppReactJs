import React from "react";

const Input = ({ item }) => {
  return (
    <input
      type={item.type}
      placeholder={item.placeholder}
      className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
    />
  );
};

export default Input;
