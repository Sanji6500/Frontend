import React from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

function Pagination({ pageNumber, paginate, currentPage }) {
  const pageNumbers = [];
  const Countpage = !Number.isInteger(pageNumber) ? pageNumber + 1 : pageNumber;

  for (let i = 1; i <= Countpage; i++) pageNumbers.push(i);

  const Paginate = (e) => {
    paginate(Number(e.target.id));
  };

  const handleNextbtn = () => {
    if (currentPage < Countpage) paginate(currentPage + 1);
  };

  const handlePrevbtn = () => {
    if (currentPage > 1) paginate(currentPage - 1);
  };

  ////////////// first and last child not working as

  return (
    <div className=" mt-5">
      <ul className=" list-none flex h-full   last:rounded-r-lg   ">
        <li
          onClick={handlePrevbtn}
          className={
            currentPage > 1
              ? " cursor-pointer  px-2  text-sm font-InterSemiBold my-0 hover:bg-[#e9ecef] hover:text-white text-center flex  bg-white  items-center rounded-l-lg"
              : "   px-2  text-sm font-InterSemiBold my-0  text-center flex  bg-white  items-center rounded-l-lg"
          }
        >
          <GrFormPrevious />
        </li>

        {pageNumbers.map((number, index) => (
          <li
            onClick={Paginate}
            id={number}
            className={
              currentPage === number
                ? "bg-[#007FC3] text-white cursor-pointer  px-2  text-sm font-InterSemiBold my-0"
                : " cursor-pointer  px-2  text-sm font-InterSemiBold my-0 hover:bg-[#007FC3] hover:text-white text-center bg-white"
            }
            key={index}
          >
            {number}
          </li>
        ))}

        <li
          onClick={handleNextbtn}
          className={
            currentPage < pageNumber
              ? " cursor-pointer  px-2  text-sm font-InterSemiBold my-0 hover:bg-[#e9ecef] hover:text-white text-center flex  bg-white  items-center rounded-r-lg"
              : "   px-2  text-sm font-InterSemiBold my-0  text-center flex  bg-white  items-center rounded-r-lg"
          }
        >
          <GrFormNext />
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
