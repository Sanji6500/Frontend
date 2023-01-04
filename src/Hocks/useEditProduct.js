import { useState, useEffect } from "react";

import { useQuery, useMutation, useQueryClient } from "react-query";
import Apii, { getHauptCategory, getSubCategory, getSuggest } from "../Api/api";
const useEditProduct = (
  setAlert,
  setClose,
  setAlertboxfailed,
  getSelectedValue,
  Trigger
) => {
  const [getIDProduct, setGetIDProduct] = useState();
  const [values, setValues] = useState({
    mainCategory: null,
    subCategoryName: null,
    ProductName: null,
    Link: null,
    unit: null,
    infos: "",
    suggestName: null,

    shopName: "anas",
    ProductBarcode: null,
    Price: null,
    Photos: "",
  });

  const lolo = Object.values(
    getSelectedValue === undefined ? "" : getSelectedValue
  );

  const fillDataToCompentens = () => {
    setValues({
      mainCategory: getSelectedValue?.SubCategory_ID.HauptCategory_ID
        .categoryNameBasic
        ? getSelectedValue?.SubCategory_ID.HauptCategory_ID.categoryNameBasic
        : null,
      subCategoryName: getSelectedValue?.SubCategory_ID.SubCategoryName
        ? getSelectedValue?.SubCategory_ID.SubCategoryName
        : null,
      ProductName: getSelectedValue?.ProductName
        ? getSelectedValue?.ProductName
        : null,
      Link: getSelectedValue?.Link ? getSelectedValue?.Link : null,
      unit: getSelectedValue?.Unit ? getSelectedValue?.Unit : null,
      infos: getSelectedValue?.infos ? getSelectedValue?.infos : "",
      suggestName: getSelectedValue?.Suggestions_ID[0].SuggestionsName
        ? getSelectedValue?.Suggestions_ID[0].SuggestionsName
        : null,

      shopName: "anas",
      ProductBarcode: getSelectedValue?.ProductBarcode
        ? getSelectedValue?.ProductBarcode
        : null,
      Price: getSelectedValue?.Price ? getSelectedValue?.Price : null,

      Photos: getSelectedValue?.Photos[0] ? getSelectedValue?.Photos[0] : "",
    });
    setGetIDProduct(getSelectedValue?._id);
  };

  useEffect(() => {
    fillDataToCompentens();
  }, [Trigger]);

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
    () => getSubCategory(values.mainCategory),
    { refetchOnWindowFocus: false }
  );

  const { isLoading: loadingHauptcategory, data: dataHauptcategory } = useQuery(
    "getHauptCategory",
    getHauptCategory,
    { refetchOnWindowFocus: false }
  );
  const { isLoading: loadingGetSuggest, data: dataGetSuggest } = useQuery(
    "getSuggest",
    getSuggest,
    { refetchOnWindowFocus: false }
  );

  const updateProductsMutation = useMutation(
    async (formData) => await Apii.post(`Product/${getIDProduct}`, formData),
    {
      onSuccess: (data, variables, response) => {
        queryClient.invalidateQueries("getAllProduct");
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
      suggestName: null,

      shopName: "anas",
      ProductBarcode: null,
      Price: null,
      Photos: "",
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
      ImagePath: values.Photos ? null : "this field is required",
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
      await updateProductsMutation.mutate(formData);

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

export default useEditProduct;

// await axios
// .post("http://localhost:43210/Product/AddProduct", formData, configData)
// .then((result) => console.log(result.data))
// .catch((error) => console.log(error));
