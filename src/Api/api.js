// Need to use the React-specific entry point to import createApi
import axios from "axios";

const Apii = axios.create({ baseURL: process.env.REACT_APP_BACKEND });

// const configData = {
//   header: { "Content-Type": "multipart/form-data" },
// };

export const getHauptCategory = async () => {
  const respnese = await Apii.get("Product/getHauptcategory");
  return respnese;
};

export const getSubCategory = async (mainCategory) => {
  const respnese = await Apii.get(
    `Product/getSubCategory/${mainCategory && mainCategory}`
  );
  return respnese;
};
export const getSuggest = async () => {
  const respnese = await Apii.get("Suggest/getSuggest");
  return respnese;
};
export const getAllProduct = async () => {
  const respnese = await Apii.get("Product/Allproducts");
  return respnese;
};

export const getAds = async () => {
  const respnese = await Apii.get("Advertising/All-ads");
  return respnese;
};

export const insertNewProducts = async (formData) => {
  const result = await Apii.post("Product/AddProduct", formData);

  return result;
};

export const insertAdvertising = async (data) => {
  const result = await Apii.post("/Advertising/AddProductAdvertising", data);

  return result;
};

export const updateAdvertising = async ({ id, data }) => {
  const result = await Apii.post(`Advertising/${id && id}`, data);

  return result;
};

/// we need to find something
export const updateProducts = async (formData, id) => {
  const result = await Apii.patch(`Product/${id && id}`, formData);
  return result;
};

// Define a service using a base URL and expected endpoints

export default Apii;
