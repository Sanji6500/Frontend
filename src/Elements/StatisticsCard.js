import React from "react";
import vistbar from "../Images/Vistbar.svg";

export const StatisticsCard = (props) => {
  return (
    <div className="  w-full  md:w-1/2 lg:w-1/4 xl:w-1/2  p-3   ">
      <div className=" bg-white  h-[180px]  rounded-lg   ">
        <div className=" w-full h-full  p-2 flex flex-col  justify-around">
          <div className="flex flex-row items-center justify-between">
            <p className="font-InterSemiBold  text-[15px] font-semibold">
              {props.Description}
            </p>

            {props.img ? (
              <img src={props.img} height="38" width="38" alt="" />
            ) : (
              <div></div>
            )}
          </div>
          <p className="font-InterSemiBold   font-semibold text-[35px]">
            {" "}
            {props.value}
          </p>

          <div className="flex flex-row items-center">
            <p className="   font-InterSemiBold     font-semibold  text-gray-700/50 text-[13px]">
              {props.previousDescription} :
            </p>
            <p className=" text-[#007FC3]  inline ml-2 font-InterSemiBold     font-semibold">
              {props.previousValue}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StatisticsCard;
