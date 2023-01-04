import React from "react";
import { DataUpcoming } from "../Data/Data";

function BigStatisticCard() {
  return (
    <div className=" w-full xl:w-[calc(100%)]  p-3  xl:p-1   ">
      <div className=" bg-white   h-[370px]  rounded-lg   ">
        <div className=" w-full h-full p-3 flex flex-col justify-between">
          <div className=" flex  flex-wrap justify-between w-[calc(92%)] ">
            <p className="font-InterSemiBold  font-semibold  text-[20px]">
              Upcoming ads
            </p>
            <a
              className="  flex items-center  font-InterSemiBold  text-[9px] border-solid border-black/20 text-gray-700/50  max-h-[25px] border-[1px]  rounded-md "
              href="/"
            >
              <p className="mx-3"> View all</p>
            </a>
          </div>

          <div className=" flex  items-center flex-wrap justify-between w-[calc(90%)] ">
            <p className="   text-center font-InterSemiBold   font-semibold  text-[12px]  w-[calc(18%)]">
              Number
            </p>
            <p className="  text-center font-InterSemiBold  font-semibold  text-[12px]  w-[calc(18%)]">
              Product Name
            </p>
            <p className="   text-center font-InterSemiBold  font-semibold  text-[12px]  w-[calc(18%)]">
              From
            </p>
            <p className="   text-center font-InterSemiBold  font-semibold  text-[12px] w-[calc(18%)]">
              to
            </p>
            <p className="   text-center font-InterSemiBold  font-semibold  text-[12px]  w-[calc(18%)]">
              Stauts
            </p>
          </div>
          {DataUpcoming.slice(0, 3).map((Data, index) => (
            <React.Fragment key={Data.ProductName}>
              <div className=" flex  flex-wrap justify-between w-[calc(90%)] ">
                <div className=" text-center font-InterSemiBold  font-semibold  text-[12px]  w-[calc(18%)]   flex justify-center items-center ">
                  <div className="  bg-[#007FC3]/60 rounded-full   flex justify-center items-center font-InterSemiBold text-[12px] w-[25px] h-[25px]  ">
                    <p className="  ">{index + 1}</p>
                  </div>
                </div>

                <p className="  text-center font-InterSemiBold  font-semibold  text-[12px]  w-[calc(18%)]">
                  {Data.ProductName}
                </p>
                <p className="  text-center font-InterSemiBold  font-semibold  text-[12px]  w-[calc(18%)]">
                  {Data.from}
                </p>
                <p className="  text-center font-InterSemiBold  font-semibold  text-[12px]  w-[calc(18%)]">
                  {Data.to}
                </p>
                <p className="  text-center font-InterSemiBold  font-semibold  text-[12px]  w-[calc(18%)]">
                  Stauts
                </p>
              </div>
              <div className=" bg-black/10  h-[1px]  w-[calc(97%)]"></div>
              {/* {index < 3 &&(   <div className=" bg-black/10  h-[1px]  w-[calc(97%)]"></div>) : null} */}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BigStatisticCard;
