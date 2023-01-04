import React from "react";
import { Textbox, Daterange } from "../../../Elements/boxs.js";
import useEditAdevertising from "../../../Hocks/useEditAdevertising";

import { NormalButton, SubmitButton } from "../../../Elements/Buttons";

function EditAdevertising({ Trigger, setClose, getSelectValue, setMessage }) {
  const {
    handleChange,
    handleSubmit,

    values,
    errors,
  } = useEditAdevertising(getSelectValue, setClose, setMessage, Trigger);

  return Trigger ? (
    <div>
      <div className="overflow-y-auto overflow-x-hidden fixed    z-20 w-full md:inset-0 h-modal md:h-full flex justify-center items-center">
        <div className="relative  ">
          <div
            className={` border-0  rounded-lg shadow-lg relative
      flex flex-col  w-[500px] h-full p-6 bg-white outline-none focus:outline-none  ${
        Trigger ? " animate-popup" : null
      } `}
          >
            <div className="flex justify-between items-center font-Nunito font-bold text-[29px]  my-2  rounded-t">
              <h3 className="text-xl font-medium text-gray-900 ">
                Edit Advertising
              </h3>
            </div>

            <form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
              className=" md:w-full  "
            >
              <Textbox
                label="Product Name"
                name="ProductName"
                value={values.ProductName}
                errorsMessage={errors.ProductName}
                onChange={(values, name) => {
                  handleChange(values, name);
                }}
                readOnly={true}
              />
              <Textbox
                label="Price Befor discount"
                name="PriceBefordiscount"
                value={values.PriceBefordiscount}
                errorsMessage={errors.PriceBefordiscount}
                onChange={(values, name) => {
                  handleChange(values, name);
                }}
                Numberonly={true}
                readOnly={true}
              />
              <Textbox
                label="Price After discount"
                name="PriceAfterDiscount"
                value={values.PriceAfterDiscount}
                errorsMessage={errors.PriceAfterDiscount}
                onChange={(values, name) => {
                  handleChange(values, name);
                }}
                Numberonly={true}
              />
              <Daterange
                labelStartDate="Start Date "
                labelEndeDate="End Date "
                nameDateRange1="AdvertisingStartDate"
                nameDateRange2="AdvertisingEndDate"
                getValueStarDate={(Values, name) => handleChange(Values, name)}
                getValueEndDate={(Values, name) => handleChange(Values, name)}
                errorsMessageStartDate={errors.AdvertisingStartDate}
                errorsMessageEndetDate={errors.AdvertisingEndDate}
                valueStartDate={values.AdvertisingStartDate}
                valueEndDate={values.AdvertisingEndDate}
              />

              <div className=" w-full mt-2 h-[90px] flex  flex-col justify-between   ">
                <NormalButton value="Cancel" onClick={() => setClose(false)} />
                <SubmitButton value="Update " />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-10 bg-black"></div>
    </div>
  ) : null;
}

export default EditAdevertising;
