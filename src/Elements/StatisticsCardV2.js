import React from "react";

const StatisticsCardV2 = (props) => {
  return (
    <div className="  w-full  md:w-1/2 lg:w-1/4 xl:w-1/2  p-3   ">
      <div className=" bg-white  h-[180px]  rounded-lg p-2  ">
        <div className=" w-full h-full p-1 flex flex-col  justify-around ">
          <div className="flex flex-row items-center justify-between">
            <p className="font-InterSemiBold  font-semibold  text-[15px]">
              {props.Description}
            </p>

            {props.img ? (
              <img src={props.img} height="38" width="38" alt="" />
            ) : (
              <div></div>
            )}
          </div>
          <p className="font-InterSemiBold font-semibold text-[35px]">
            {props.value}
          </p>

          <div className="flex flex-row items-center justify-between">
            <div className=" flex items-center">
              <p className="   font-InterSemiBold    font-semibold   text-gray-700/50 text-[13px] space-x-3">
                {props.previousDescription} :
              </p>

              <p
                className={
                  props.CheckPercentage === true
                    ? "  text-[#398B83] inline ml-2  font-InterSemiBold    font-semibold"
                    : " text-[#A90B0B] inline ml-2  font-InterSemiBold    font-semibold"
                }
              >
                {props.previousValue}
              </p>
            </div>
            <div
              className={
                props.CheckPercentage === true
                  ? " bg-[#398B83]/20 text-[#398B83] h-[25px]  rounded-xl  grid place-items-center font-InterSemiBold text-[13px]   min-w-[60px] "
                  : " bg-[#A90B0B]/20 text-[#A90B0B] h-[25px]  rounded-xl  grid place-items-center font-InterSemiBold text-[13px]  min-w-[60px] "
              }
            >
              <p className=" mx-3 lg:mx-2"> {props.ValuePercentage}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsCardV2;
