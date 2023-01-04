import React, { useState } from "react";
import { ReactComponent as Iconsearch } from "../../Images/search.svg";
import { ReactComponent as Indexing } from "../../Images/indexing.svg";
import { ReactComponent as Delete } from "../../Images/delete.svg";
import { ReactComponent as AddSomething } from "../../Images/AddSomtheing.svg";
import useProducts from "../../Hocks/useProducts";

import { DataTableV2 } from "../../Elements/DataTable";
import AddProducts from "./PopUp/AddProducts";
import { Alertbox } from "../../Elements/Alertbox";
import EditProduct from "./PopUp/EditProduct";

function Products() {
  const { loadingAllProduct, dataAllProduct, Columns, SerachField } =
    useProducts();

  const [searchValue, setSearch] = useState("");

  const serachedValue = (e) => {
    setSearch(e.target.value);
  };
  const [selectedValue, setSelectedValue] = useState();

  const [popUpAddProduct, setpopUpAddProduct] = useState(false);

  const [popUpEditProducttest, setpopUpEditProducttest] = useState(false);

  const [Alertboxwach, setAlertboxwach] = useState(false);

  const showPopUp = () => {
    setpopUpAddProduct(true);
  };

  return (
    <React.Fragment>
      <AddProducts
        Trigger={popUpAddProduct}
        setClose={setpopUpAddProduct}
        setAlert={setAlertboxwach}
      />
      <EditProduct
        Trigger={popUpEditProducttest}
        setClose={setpopUpEditProducttest}
        getSelectedValue={selectedValue}
        forcget={true}
        setAlert={setAlertboxwach}
      />
      <Alertbox
        trigger={Alertboxwach}
        setclose={setAlertboxwach}
        delay={2500}
        message="Saved succed"
        type="SUCCESS"
      />

      <div className=" flex flex-col  w-full py-16 px-8 ">
        <div className="  inline-flex flex-wrap justify-between items-center ">
          <div className=" space-x-4   flex flex-wrap justify-between items-center">
            <div className="group">
              <button className=" bg-white  border shadow-sm rounded-md   w-[40px] h-[32px] flex items-center p-3  group-hover:bg-[#007FC3]  duration-200 ">
                <Indexing className="h-[13px] w-[13px]  fill-[#464F60] group-hover:fill-white duration-200 " />
              </button>
            </div>
            <div className=" relative inline-flex">
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
            <button
              className=" bg-[#007FC3] border shadow-sm rounded-md   w-[40px] h-[32px] flex items-center p-3  "
              onClick={() => setpopUpEditProducttest(true)}
            >
              <Delete className="h-[13px] w-[13px]  fill-white " />
            </button>
            <button
              className="  bg-[#007FC3]  border shadow-sm rounded-md  w-[150px]  h-[32px] flex  items-center
               justify-center  p-3  text-white  font-InterSemiBold   font-medium text-[13px] hover:-translate-y-1  duration-300 ease-in-out "
              onClick={showPopUp}
            >
              <AddSomething className="h-[12px] w-[12px]  fill-white  mr-2 " />
              Add Products
            </button>
          </div>
        </div>
        <div className=" mt-5 ">
          <DataTableV2
            TableInhalt={Columns}
            Image={true}
            EditButton={true}
            getSerachedValue={searchValue}
            Data={!loadingAllProduct ? dataAllProduct.data.result : []}
            SerachField={SerachField}
            ShowPopup={setpopUpEditProducttest}
            getSelectData={(Value) => setSelectedValue(Value)}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Products;
