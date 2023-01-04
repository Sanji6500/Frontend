import React from "react";

export const SubmitButton = ({ value, width }) => {
  return (
    <button
      type="submit"
      className="    py-2 px-2 bg-[#007FC3]  border shadow-sm rounded-md w-full text-sm     text-white  font-InterSemiBold   font-medium  "
      style={{ width: width }}
    >
      {value}
    </button>
  );
};
export const NormalButton = ({ value, onClick, width }) => {
  return (
    <button
      type="button"
      className="      py-2 px-2 bg-[#007FC3]   text-sm   border shadow-sm rounded-md w-full  text-white  font-InterSemiBold   font-medium  "
      style={{ width: width }}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export const MiniButton = ({ value, onClick, width }) => {
  return (
    <button
      type="button"
      className="     py-2 px-2  bg-[#007FC3]  border shadow-sm rounded-md w-full       text-white  font-InterSemiBold   font-medium  "
      style={{ width: width }}
      onClick={onClick}
    >
      {value}
    </button>
  );
};
