import React, { useState } from "react";
import { Combbox, MidTextbox, Textbox } from "../../../Elements/boxs.js";
import { NormalButton, SubmitButton } from "../../../Elements/Buttons";
import { DragDropNormal } from "../../../Elements/DragDrop.js";
import useEditProduct from "../../../Hocks/useEditProduct.js";
import { Alertbox } from "../../../Elements/Alertbox";
import { Unit } from "../../../Data/Data";

function EditProduct({ Trigger, setClose, setAlert, getSelectedValue }) {
  const [Alertboxfailed, setAlertboxfailed] = useState(false);
  const {
    handleChange,
    getFilePath,
    ClearSubCategory,
    handleSubmit,
    NumberOnly,

    loadingSubCategory,
    dataSubCategory,
    loadingHauptcategory,
    dataHauptcategory,
    loadingGetSuggest,
    dataGetSuggest,

    values,

    errors,
  } = useEditProduct(
    setAlert,
    setClose,
    setAlertboxfailed,
    getSelectedValue,
    Trigger
  );

  return Trigger ? (
    <div>
      <div className="overflow-y-auto overflow-x-hidden fixed    z-20 w-full md:inset-0 h-modal md:h-full flex justify-center items-center">
        <Alertbox
          trigger={Alertboxfailed}
          setclose={setAlertboxfailed}
          delay={2500}
          message="Item is already found"
          type="WARNING"
        />
        <div className="relative p-4  max-w-[750px] max-h-[1050px] h-full ">
          <div
            className={` border-0 rounded-lg shadow-lg relative  max-w-[750px]
           max-h-[1050px] flex flex-col w-full p-3 bg-white outline-none focus:outline-none  ${
             Trigger ? " animate-popup" : null
           } `}
          >
            <div className="flex justify-between items-center font-Nunito font-bold text-[29px]  my-2  rounded-t">
              <h3 className="text-xl font-medium text-gray-900 ">
                Update Product
              </h3>
            </div>

            <form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <div className=" flex flex-wrap  ">
                <div className="  flex  flex-wrap md:w-1/2   pr-2">
                  <div className=" flex w-full">
                    <Combbox
                      Data={
                        !loadingHauptcategory && dataHauptcategory.data.result
                      }
                      placeholder="Select Value"
                      label="Main Category"
                      name="mainCategory"
                      field="categoryNameBasic"
                      foucs="#0ea5e9"
                      errorsMessage={errors.mainCategory}
                      value={values.mainCategory}
                      onClick={(values, name) => {
                        ClearSubCategory();
                        handleChange(values, name);
                      }}
                    />
                    <Combbox
                      Data={
                        !loadingSubCategory ? dataSubCategory.data.result : []
                      }
                      placeholder="Select  subCategory"
                      field="SubCategoryName"
                      label="Sub Category"
                      errorsMessage={errors.subCategoryName}
                      value={values.subCategoryName}
                      name="subCategoryName"
                      foucs="#0ea5e9"
                      onClick={(values, name) => {
                        handleChange(values, name);
                      }}
                    />
                  </div>

                  <Textbox
                    label="Product Name"
                    name="ProductName"
                    value={values.ProductName}
                    errorsMessage={errors.ProductName}
                    onChange={(values, name) => {
                      handleChange(values, name);
                    }}
                  />
                  <Textbox
                    label="Link"
                    name="Link"
                    value={values.Link}
                    errorsMessage={errors.Link}
                    onChange={(values, name) => {
                      handleChange(values, name);
                    }}
                  />

                  <Textbox
                    label="Price"
                    name="Price"
                    value={values.Price}
                    errorsMessage={errors.Price}
                    onChange={(values, name, key) => {
                      handleChange(values, name);
                    }}
                    onKeyDown={(e) => NumberOnly(e)}
                  />

                  <Textbox
                    label="Barcode"
                    name="ProductBarcode"
                    value={values.ProductBarcode}
                    errorsMessage={errors.ProductBarcode}
                    onChange={(values, name) => {
                      handleChange(values, name);
                    }}
                    onKeyDown={(e) => NumberOnly(e)}
                  />

                  <Combbox
                    Data={Unit}
                    name="unit"
                    foucs="#0ea5e9"
                    placeholder="Select Unit"
                    label="Unit"
                    errorsMessage={errors.unit}
                    value={values.unit}
                    onClick={(values, name) => {
                      handleChange(values, name);
                    }}
                  />

                  <Combbox
                    Data={!loadingGetSuggest && dataGetSuggest.data.result}
                    name="suggestName"
                    foucs="#0ea5e9"
                    placeholder="Select Suggest"
                    field="SuggestionsName"
                    label="Sugget"
                    value={values.suggestName}
                    errorsMessage={errors.suggestName}
                    onClick={(values, name) => {
                      handleChange(values, name);
                    }}
                  />
                </div>

                <div className="md:w-1/2   h-[500px]   mb-2  ">
                  <DragDropNormal
                    onChange={(e) => getFilePath(e)}
                    errorsMessage={errors.ImagePath}
                    value={values.Photos}
                  />
                </div>

                <div className="md:w-1/2     mb-2  ">
                  <MidTextbox
                    name="infos"
                    label="Infos"
                    height="270px"
                    width="700px"
                    onChange={(values, name) => {
                      handleChange(values, name);
                    }}
                    value={values.infos}
                  />
                </div>
              </div>
              <div className=" flex  mt-2  float-right">
                <NormalButton
                  value="Cancel"
                  onClick={() => {
                    setClose(false);
                  }}
                  width="175px"
                />
                <SubmitButton value="update" width="175px" />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="opacity-25 fixed inset-0 z-10 bg-black"></div>
    </div>
  ) : null;
}

export default EditProduct;
