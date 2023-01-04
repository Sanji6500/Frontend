import React from "react";
import useTimeout from "../Hocks/useTimout";
import { ReactComponent as False } from "../Images/false.svg";
import { ReactComponent as Success } from "../Images/success.svg";

export const Alertbox = ({ trigger, setclose, delay, type, message }) => {
  useTimeout(() => setclose(false), trigger && delay);

  const generateBackgroundColor = (type) => {
    switch (type) {
      case "WARNING":
        return (
          <False className="  fill-red-500 bg-red-200   h-7 w-7 rounded-lg" />
        );
      case "SUCCESS":
        return (
          <Success className="  fill-green-500 bg-green-200   h-7 w-7 rounded-lg" />
        );
      default:
        return;
    }
  };

  return trigger ? (
    <div
      id="toast-success"
      className=" animate-AlertOpen   overflow-x-hidden         flex items-center p-4 mb-4  w-full  max-w-xs text-gray-500 bg-white rounded-lg shadow absolute bottom-5 right-5 "
      role="alert"
    >
      {generateBackgroundColor(type)}
      <div className="ml-3 text-sm font-normal">{message}</div>
    </div>
  ) : null;
};
