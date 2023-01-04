import React, { useState } from "react";
import { ReactComponent as Iconsearch } from "../../Images/search.svg";
import { ReactComponent as Indexing } from "../../Images/indexing.svg";
import { ReactComponent as Delete } from "../../Images/delete.svg";

import { DataTableV2 } from "../../Elements/DataTable";
import useAdvertising from "../../Hocks/useAdvertising";
import AddAdvertising from "./Popup/AddAdvertising";

import { Alertbox } from "../../Elements/Alertbox";

function Advertising() {
  const { loadingAllProduct, dataAllProduct, Columns, SerachField } =
    useAdvertising();

  const [searchValue, setSearch] = useState("");
  const serachedValue = (e) => {
    setSearch(e.target.value);
  };
  const [selectedValue, setSelectedValue] = useState();

  const [popUpAddAdvertising, setPopUpAddAdvertising] = useState(false);

  const [Alertboxwach, setAlertboxwach] = useState(false);

  return (
    <React.Fragment>
      <AddAdvertising
        Trigger={popUpAddAdvertising}
        getSelectValue={selectedValue}
        setClose={setPopUpAddAdvertising}
        setMessage={setAlertboxwach}
      />

      <Alertbox
        trigger={Alertboxwach}
        setclose={setAlertboxwach}
        delay={2500}
        message="Saved succed"
        type="SUCCESS"
      />

      <div className=" flex flex-col p-16">
        <div className=" flex flex-wrap justify-between items-center">
          <div className=" space-x-4  flex flex-wrap justify-between items-center">
            <div className="group">
              <button className=" bg-white  border shadow-sm rounded-md   w-[40px] h-[32px] flex items-center p-3  group-hover:bg-[#007FC3]  duration-200 ">
                <Indexing className="h-[13px] w-[13px]  fill-[#464F60] group-hover:fill-white duration-200 " />
              </button>
            </div>
            <div className=" relative">
              <input
                onChange={serachedValue}
                value={searchValue}
                className=" pl-10  w-[300px] h-[32px]  bg-white border shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 
                 focus:ring-sky-500 block  rounded-md  text-sm focus:ring-1 "
                type="text"
                placeholder="Search ....."
              />
              <Iconsearch
                className=" absolute top-[10px]  left-3  fill-[#868FA0] text-cyan-600  AAA"
                height="15px"
                width="15px"
              />
            </div>
          </div>
          <div className=" flex flex-wrap justify-between">
            <button className=" bg-[#007FC3] border shadow-sm rounded-md   w-[40px] h-[32px] flex items-center p-3 ">
              <Delete className="h-[13px] w-[13px]  fill-white " />
            </button>
          </div>
        </div>
        <div className=" mt-5 ">
          <DataTableV2
            TableInhalt={Columns}
            Image={true}
            AddButton={true}
            getSerachedValue={searchValue}
            Data={!loadingAllProduct ? dataAllProduct.data.result : []}
            SerachField={SerachField}
            ShowPopup={setPopUpAddAdvertising}
            getSelectData={(Value) => setSelectedValue(Value)}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Advertising;
