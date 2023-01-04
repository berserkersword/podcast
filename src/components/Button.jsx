import React from "react";

const Button = ({ text }) => {
  return (
    <button className="text-white bg-[#118DA8] hover:bg-blue-800 focus:ring-4 font-dm rounded-lg text-md px-5 py-2.5 mr-2 mb-2 focus:outline-none">
      {text}
    </button>
  );
};

export default Button;
