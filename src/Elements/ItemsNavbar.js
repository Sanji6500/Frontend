import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";

export const ItemsNavbar = (props) => {
  return (
    <li className=" mb-3  h-[57px] ">
      <Link
        className=" flex w-full  justify-center  hover:bg-white/20  focus:bg-white/20  hover:text-[#F8EDE8]   cursor-pointer items-center px-3 py-3 space-x-3  mb-2 rounded-md "
        to={props.to}
      >
        {props.image}
        <p className="  text-[17px]   text-[#F8EDE8]  items-center   MediumPoppins">
          {props.items}
        </p>
      </Link>
    </li>
  );
};

export const NestItemNavbar = ({ FatherValue, FatherImgae, NestsItems }) => {
  /////// i need solution
  let ColumnName = Object.keys(NestsItems[0]);

  const [SidebarDropdown, setSidebarDropdown] = useState(false);
  return (
    <li className={` mb-3   ${SidebarDropdown ? null : ""}`}>
      <div
        className="   max-h-[49.48px]  flex w-full  justify-center  hover:bg-white/20  focus:bg-white/20  hover:text-[#F8EDE8]   cursor-pointer items-center px-3 py-3 space-x-3  mb-2 rounded-md "
        onClick={() => setSidebarDropdown(!SidebarDropdown)}
      >
        {FatherImgae}
        <p className="  text-[17px]   text-[#F8EDE8]  items-center   MediumPoppins">
          {FatherValue}
        </p>

        <BiChevronDown
          size={18}
          className={`${SidebarDropdown && "rotate-180  bg "}`}
          style={{ color: "white" }}
        />
      </div>

      <ul
        className={` overflow-y-hidden  bg-[#007FC3] w-full  ${
          SidebarDropdown
            ? " max-h-64 ease-in-out duration-500 "
            : "max-h-0  ease-in-out duration-500"
        }`}
      >
        {NestsItems.map((data, index) => (
          <li key={index} className=" ">
            <Link
              className="    pl-12 flex w-full  justify-center  hover:bg-white/20  focus:bg-white/20  hover:text-[#F8EDE8]   cursor-pointer items-center px-3 py-3 space-x-3   rounded-md "
              to={data[ColumnName[0]]}
            >
              {data[ColumnName[1]]}
              <p className="  text-[17px]   text-[#F8EDE8]  items-center   MediumPoppins">
                {data[ColumnName[2]]}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};
