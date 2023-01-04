import React, { useState } from "react";

import uuid from "react-uuid";

import { ReactComponent as AAA } from "../Images/delete.svg";

import Pagination from "./Pagination";

export const DataTable = ({
  pagCountNumber,
  paginate,
  currentPage,
  currentPosts,
}) => {
  return (
    <div className=" flex flex-col justify-center items-center">
      <table className=" w-full  bg-white  border-[0.5px]   border-black/20  text-center">
        <thead>
          <tr className="     ">
            <th className=" w-[25px] whitespace-nowrap">
              <input type="checkbox" />
            </th>
            <th className=" text-[13px] p-3 font-InterSemiBold font-medium  w-[25px] relative  ">
              image
            </th>
            <th className=" text-[13px] p-3 font-InterSemiBold font-medium">
              Product Name
            </th>
            <th className=" text-[13px] p-3 font-InterSemiBold font-medium w-[25px]  ">
              price
            </th>
            <th className=" text-[13px] p-3 font-InterSemiBold font-medium w-[25px] ">
              Unit
            </th>
            <th className=" text-[13px] p-3 font-InterSemiBold font-medium ">
              links
            </th>
            <th className=" text-[13px] p-3 font-InterSemiBold font-medium w-[200px] ">
              Barcode
            </th>
            <th className=" text-[13px] p-3 font-InterSemiBold font-medium  w-[25px] ">
              Change
            </th>
            <th className=" text-[13px] p-3 font-InterSemiBold font-medium  w-[25px] ">
              hide/show
            </th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map((result, index) => (
            <tr key={index}>
              <td className=" p-4 overflow-hidden whitespace-nowrap relative  after:content-[''] after:absolute after:top-[0px]   after:w-[calc(100%-20px)]  after:h-[1px] after:bg-black/10 after:right-0 after:left-auto  text-[14px]  font-InterSemiBold font-medium ">
                <input type="checkbox" />
              </td>
              <th className=" p-4 overflow-hidden whitespace-nowrap flex items-center justify-center relative  after:content-[''] after:absolute after:top-[0px]  after:left-0  after:w-full after:h-[1px] after:bg-black/10  text-[14px]  font-InterSemiBold font-medium ">
                <img
                  src={result.productImage}
                  alt={result.ProductName}
                  className=" h-[23px] w-[23px] rounded-full  "
                />
              </th>
              <td className=" p-4 overflow-hidden whitespace-nowrap  relative  after:content-[''] after:absolute after:top-[0px]  after:left-0  after:w-full after:h-[1px] after:bg-black/10    text-[14px]  font-InterSemiBold font-medium ">
                {result.ProductName}
              </td>
              <td className=" p-4 overflow-hidden whitespace-nowrap  relative  after:content-[''] after:absolute after:top-[0px]  after:left-0  after:w-full after:h-[1px] after:bg-black/10   text-[14px]  font-InterSemiBold font-medium  ">
                {result.price}
              </td>
              <td className=" p-4 overflow-hidden whitespace-nowrap relative  after:content-[''] after:absolute after:top-[0px]  after:left-0  after:w-full after:h-[1px] after:bg-black/10   text-[14px]  font-InterSemiBold font-medium  ">
                {result.unit}
              </td>
              <td className=" p-4 overflow-hidden whitespace-nowrap relative  after:content-[''] after:absolute after:top-[0px]  after:left-0  after:w-full after:h-[1px] after:bg-black/10   text-[14px]  font-InterSemiBold font-medium ">
                {result.links}
              </td>
              <td className=" p-4 overflow-hidden whitespace-nowrap relative  after:content-[''] after:absolute after:top-[0px]  after:left-0  after:w-full after:h-[1px] after:bg-black/10   text-[14px]  font-InterSemiBold font-medium ">
                {result.barcode}
              </td>

              <td className=" p-3 relative  after:content-[''] after:absolute after:top-[0px]  after:left-0  after:w-full after:h-[1px] after:bg-black/10  text-[14px]  font-InterSemiBold font-medium ">
                {result.ProductName}
              </td>
              <td className=" p-3 relative  after:content-[''] after:absolute after:top-[0px]  after:left-0  after:w-[calc(100%-20px)] after:h-[1px] after:bg-black/10   text-[14px]  font-InterSemiBold font-medium ">
                {result.ProductName}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        pageNumber={pagCountNumber}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export const DataTableV2 = ({
  TableInhalt,
  getSelectData,
  ShowPopup,
  EditButton,
  Delete,
  getSerachedValue,
  Data,
  SerachField,
  AddButton,
}) => {
  const CrruentColum = TableInhalt.filter(
    (data) => data.checkbox === undefined
  );

  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 10;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const Counter = currentPage !== 1 ? (currentPage - 1) * postsPerPage : null;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const currentPosts =
    Data &&
    Data?.filter((data) =>
      SerachField.some((key) =>
        data[key]
          ?.toString()
          .toLocaleLowerCase()
          .includes(getSerachedValue.toLocaleLowerCase())
      )
    ).slice(indexOfFirstPost, indexOfLastPost);

  const pagCountNumber = Data
    ? Data?.filter((data) =>
        SerachField.some((key) =>
          data[key]
            .toString()
            .toLocaleLowerCase()
            .includes(getSerachedValue.toLocaleLowerCase())
        )
      ).length / postsPerPage
    : [];

  return (
    <div className=" flex flex-col justify-center items-center">
      <table className=" w-full  bg-white  border-[0.5px]   border-black/20  text-center">
        <thead>
          <tr className="    ">
            {TableInhalt.map((data, index) => {
              if (data?.checkbox) {
                return (
                  <th key={uuid()} className=" w-[25px] whitespace-nowrap  ">
                    <input type="checkbox" />
                  </th>
                );
              } else if (data?.Number) {
                return (
                  data?.Number && (
                    <th
                      key={uuid()}
                      className=" text-[13px] p-3 font-InterSemiBold font-medium  w-[25px] relative"
                    >
                      Nr
                    </th>
                  )
                );
              }
              return (
                <th
                  key={uuid()}
                  className={` ${data?.style} text-[13px] p-3 font-InterSemiBold font-medium`}
                >
                  {data.field}
                </th>
              );
            })}

            {AddButton && (
              <th className=" text-[13px] p-3 font-InterSemiBold font-medium  ">
                Add
              </th>
            )}

            {EditButton && (
              <th className=" text-[13px] p-3 font-InterSemiBold font-medium  ">
                Edit
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {currentPosts?.map((result, index) => (
            <tr key={uuid()} className="  h-[25px]">
              {TableInhalt[0]?.checkbox ? (
                <td className="p-3  overflow-hidden whitespace-nowrap relative  after:content-[''] after:absolute after:top-[0px]   after:w-[calc(100%-20px)]  after:h-[1px] after:bg-black/10 after:right-0 after:left-auto  text-[14px]  font-InterSemiBold font-medium ">
                  <input type="checkbox" />
                </td>
              ) : (
                <td className="p-2  overflow-hidden whitespace-nowrap relative  after:content-[''] after:absolute after:top-[0px]   after:w-[calc(100%-20px)]  after:h-[1px] after:bg-black/10 after:right-0 after:left-auto  text-[14px]  font-InterSemiBold font-medium ">
                  {index + 1 + Counter}
                </td>
              )}

              {CrruentColum.map((Column, index1) => (
                <td
                  key={uuid()}
                  className="  p-3  overflow-hidden whitespace-nowrap relative  after:content-[''] after:absolute after:top-[0px]  after:left-0  after:w-full after:h-[1px] after:bg-black/10   text-[14px]  font-InterSemiBold font-medium "
                >
                  {Column?.Image ? (
                    <img
                      key={uuid()}
                      src={process.env.REACT_APP_BACKEND + result[Column.field]}
                      alt={result[Column.field]}
                      className=" h-[23px] w-[23px] rounded-full  translate-x-6  "
                    />
                  ) : (
                    result[Column.field]
                  )}
                </td>
              ))}

              {AddButton && (
                <td
                  key={uuid()}
                  className=" w-[25px]   p-3  relative  after:content-[''] after:absolute after:top-[0px]  after:left-0  after:w-[calc(100%-20px)] after:h-[1px] after:bg-black/10   text-[14px]  font-InterSemiBold font-medium "
                >
                  <button
                    type="button"
                    className="    px-3  bg-[#007FC3]  border shadow-sm rounded-md w-full    py-1     text-white  font-InterSemiBold   font-medium  "
                    onClick={() => {
                      ShowPopup(true);
                      getSelectData(result);
                    }}
                  >
                    Add
                  </button>
                </td>
              )}

              {EditButton && (
                <td
                  key={uuid()}
                  className=" w-[25px]   p-3  relative  after:content-[''] after:absolute after:top-[0px]  after:left-0  after:w-[calc(100%-20px)] after:h-[1px] after:bg-black/10   text-[14px]  font-InterSemiBold font-medium "
                >
                  <button
                    type="button"
                    className="    px-3  bg-[#007FC3]  border shadow-sm rounded-md w-full    py-1     text-white  font-InterSemiBold   font-medium  "
                    onClick={() => {
                      ShowPopup(true);
                      getSelectData(result);
                    }}
                  >
                    Edit
                  </button>
                </td>
              )}

              {Delete && (
                <td
                  key={uuid()}
                  className=" w-[25px]   p-3  relative  after:content-[''] after:absolute after:top-[0px]  after:left-0  after:w-[calc(100%-20px)] after:h-[1px] after:bg-black/10   text-[14px]  font-InterSemiBold font-medium "
                >
                  <button className=" bg-[#007FC3] border shadow-sm rounded-md   w-[40px] h-[32px] flex items-center p-3  ">
                    <AAA className="h-[13px] w-[13px]  fill-white " />
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        pageNumber={pagCountNumber}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};
