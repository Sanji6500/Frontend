import { useState } from "react";

import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  getHauptCategory,
  getSubCategory,
  getSuggest,
  insertNewProducts,
} from "../Api/api";
const useAddProduct = (setAlert, setClose, setAlertboxfailed) => {
  const [values, setValues] = useState({
    mainCategory: null,
    subCategoryName: null,
    ProductName: null,
    Link: null,
    unit: null,
    infos: "",
    suggestName: null,
    ImagePath: null,
    shopName: "anas",
    ProductBarcode: null,
    Price: null,
  });

  // const configData = {
  //   header: { "Content-Type": "multipart/form-data" },
  // };
  const [errors, setErrors] = useState({
    mainCategory: null,
    subCategoryName: null,
    ProductName: null,
    Link: null,
    unit: null,
    ProductBarcode: null,

    Price: null,
    ImagePath: null,
  });

  ////////-------------------------------------------------------------------

  const queryClient = useQueryClient();
  const { isLoading: loadingSubCategory, data: dataSubCategory } = useQuery(
    ["getSubCategory", values.mainCategory ? values.mainCategory : null],
    () => getSubCategory(values.mainCategory)
  );

  const { isLoading: loadingHauptcategory, data: dataHauptcategory } = useQuery(
    "getHauptCategory",
    getHauptCategory
  );
  const { isLoading: loadingGetSuggest, data: dataGetSuggest } = useQuery(
    "getSuggest",
    getSuggest
  );

  const addTodoMutation = useMutation(insertNewProducts, {
    onSuccess: (data, variables, response) => {
      // Invalidates cache and refetch
      queryClient.invalidateQueries("getAllProduct");
    },
  });

  ////////-------------------------------------------------------------------

  const handleChange = (value, name) => {
    setValues({
      ...values,
      [name]: value,
    });
    queryClient.invalidateQueries("getSubCategory");
  };

  const ClearSubCategory = () => {
    setValues({ ...values, subCategory: null });
  };

  const getFilePath = (e) => {
    setValues({
      ...values,
      ImagePath: e.target.files[0],
    });
  };

  const NumberOnly = (e) => {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };

  const ClearEverythink = () => {
    setValues({
      mainCategory: null,
      subCategoryName: null,
      ProductName: null,
      Link: null,
      unit: null,
      infos: "",
      ProductBarcode: null,
      ImagePath: null,
      Price: null,
      shopName: "anas",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors({
      mainCategory: values.mainCategory ? null : "this field is required",
      subCategoryName: values.subCategoryName ? null : "this field is required",
      ProductName: values.ProductName ? null : "this field is required",
      Link: values.Link ? null : "this field is required",
      unit: values.unit ? null : "this field is required",
      ImagePath: values.ImagePath ? null : "this field is required",
      Price: values.Price ? null : "this field is required",
      suggestName: values.suggestName ? null : "this field is required",
      ProductBarcode: values.ProductBarcode ? null : "this field is required",
    });

    const errorValues = Object.values(values);
    const emptyError = errorValues.some((key) => key === null);

    if (!emptyError) {
      const formData = new FormData();
      const Values = Object.values(values);
      const objectBody = Object.keys(values);
      for (let i = 0; i < objectBody.length; i++)
        formData.append(objectBody[i], Values[i]);

      await addTodoMutation.mutate(formData);

      const a =
        !addTodoMutation.isLoading &&
        (await addTodoMutation.data?.data.Success);

      console.log(a);

      if (a === false) return setAlertboxfailed(true);

      ClearEverythink();
      setAlert(true);
      setClose(false);
    }
  };

  return {
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
  };
};

export default useAddProduct;

// await axios
// .post("http://localhost:43210/Product/AddProduct", formData, configData)
// .then((result) => console.log(result.data))
// .catch((error) => console.log(error));
