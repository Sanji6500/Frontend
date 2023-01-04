import React from "react";

function Table({
  pagCountNumber,
  paginate,
  currentPage,
  TableContents,
  TableHeader,
}) {
  return (
    <div className=" flex flex-col justify-center items-center">
      <table className=" w-full  bg-white  border-[0.5px]   border-black/20  text-center">
        <thead>
          <tr className="     ">
            {TableHeader.checkbox && (
              <th className=" w-[25px] whitespace-nowrap">
                <input type="checkbox" />
              </th>
            )}
            {TableHeader.img && (
              <th className=" text-[13px] p-3 font-InterSemiBold font-medium  w-[25px] relative  whitespace-nowrap ">
                image
              </th>
            )}
            {TableHeader.HeaderName.map((result, index) => (
              <th
                key={index}
                className={
                  " text-[13px] p-3 font-InterSemiBold font-medium  whitespace-nowrap " +
                  result.Style
                }
              >
                {result.columnName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TableContents.map((result, index) => (
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

              <td className=" p-4 overflow-hidden whitespace-nowrap relative  after:content-[''] after:absolute after:top-[0px]  after:left-0  after:w-full after:h-[1px] after:bg-black/10   text-[14px]  font-InterSemiBold font-medium ">
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
}

export default Table;
