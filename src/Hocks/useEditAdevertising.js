import { useState, useEffect } from "react";

import { useMutation, useQueryClient } from "react-query";
import Apii from "../Api/api";
const useAddAdvertising = (getSelectedValue, setClose, setMessage, Trigger) => {
  const [values, setValues] = useState({
    ProductName: null,
    PriceBefordiscount: null,
    PriceAfterDiscount: null,
    AdvertisingStartDate: null,
    AdvertisingEndDate: null,
    ShopName: "anas",
  });

  const fillDataToCompentens = () => {
    setValues({
      ...values,
      ProductName: getSelectedValue?.ProductName
        ? getSelectedValue?.ProductName
        : null,
      PriceBefordiscount: getSelectedValue?.PriceBefordiscount
        ? getSelectedValue?.PriceBefordiscount
        : null,

      PriceAfterDiscount: getSelectedValue?.PriceAfterDiscount
        ? getSelectedValue?.PriceAfterDiscount
        : null,

      AdvertisingStartDate: getSelectedValue?.AdvertisingStartDate
        ? getSelectedValue?.AdvertisingStartDate
        : null,
      AdvertisingEndDate: getSelectedValue?.AdvertisingEndDate
        ? getSelectedValue?.AdvertisingEndDate
        : null,

      ShopName: "anas",
    });
  };

  useEffect(() => {
    fillDataToCompentens();
  }, [Trigger]);

  const [errors, setErrors] = useState({
    ProductName: null,
    PriceBefordiscount: null,
    PriceAfterDiscount: null,
    AdvertisingStartDate: null,
    AdvertisingEndDate: null,
  });

  ////////-------------------------------------------------------------------

  const queryClient = useQueryClient();

  const updateAdvertisingMutation = useMutation(
    async (data) =>
      await Apii.post(
        `Advertising/${getSelectedValue._id && getSelectedValue?._id}`,
        data
      ),
    {
      onSuccess: (data, variables, response) => {
        queryClient.invalidateQueries("getAds");
      },
    }
  );

  ////////-------------------------------------------------------------------

  const handleChange = (value, name) => {
    setValues({
      ...values,
      [name]: value,
    });
    queryClient.invalidateQueries("getSubCategory");
  };

  const NumberOnly = (e) => {};

  const ClearEverythink = () => {
    setValues({
      ProductName: null,
      PriceBefordiscount: null,
      PriceAfterDiscount: null,
      AdvertisingStartDate: null,
      AdvertisingEndDate: null,
      ShopName: "anas",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors({
      ProductName: values.ProductName ? null : "this field is required",
      PriceBefordiscount: values.PriceBefordiscount
        ? null
        : "this field is required",
      PriceAfterDiscount: values.PriceAfterDiscount
        ? null
        : "this field is required",
      AdvertisingStartDate: values.AdvertisingStartDate
        ? null
        : "this field is required",
      AdvertisingEndDate: values.AdvertisingEndDate
        ? null
        : "this field is required",
    });

    const errorValues = Object.values(values);
    const emptyError = errorValues.some((key) => key === null);

    if (!emptyError) {
      await updateAdvertisingMutation.mutate(values);

      ClearEverythink();
      setMessage(true);

      setClose(false);
    }
  };

  return {
    handleChange,

    handleSubmit,
    NumberOnly,

    values,

    errors,
  };
};

export default useAddAdvertising;
