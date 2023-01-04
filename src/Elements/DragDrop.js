import React, { useRef, useState } from "react";

export const DragDropNormal = ({ onChange, errorsMessage, value }) => {
  const wrapperRef = useRef(null);
  const onDragEnter = () => wrapperRef.current.classList.add("dragover");
  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");
  const onDrop = () => wrapperRef.current.classList.remove("dragover");

  const [ImageList, setImageList] = useState({
    ImageName: null,
    Imageype: null,
    ImageSize: null,
    src: null,
  });

  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      let reader = new FileReader();
      reader.readAsDataURL(newFile);
      reader.addEventListener("load", () => {
        setImageList({
          ImageName: newFile,
          src: reader.result,
        });
      });
    }
  };

  return (
    <div
      ref={wrapperRef}
      className=" w-full h-full  relative  "
      onDragEnd={onDragEnter}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <label className="flex justify-center w-full h-full  px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
        {ImageList.src || value ? (
          <React.Fragment>
            <img
              src={
                !value ? ImageList.src : process.env.REACT_APP_BACKEND + value
              }
              alt="..."
              className=" p-1 w-[370px] h-full"
            />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <span className="flex items-center space-x-2 flex-col justify-center">
              <div className=" flex space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <span className="font-Nunito font-bold">
                  Drop files to Attach, or
                  <span className="text-blue-600 underline"> browse</span>
                </span>
              </div>

              <div className=" text-red-700/70 text-[10px] font-bold">
                {errorsMessage && <p>{errorsMessage}</p>}
              </div>
            </span>
            <input
              type="file"
              name="file_upload"
              className=" opacity-0   absolute h-full w-full cursor-pointer"
              onChange={(e) => {
                onFileDrop(e);
                onChange(e);
              }}
              multiple={true}
            />
          </React.Fragment>
        )}
      </label>
    </div>
  );
};
