import { useQuery } from "react-query";
import { getAllProduct } from "../Api/api";

const useAdvertising = () => {
  const { isLoading: loadingAllProduct, data: dataAllProduct } = useQuery(
    "getAllProduct",
    getAllProduct
  );

  const Columns = [
    { checkbox: true },
    {
      field: "Photos",
      headerName: "Image",
      style: " w-[25px] ",
      Image: true,
    },
    { field: "ProductName", headerName: "Product Name" },
    {
      field: "Price",
      headerName: "Price",
      style: " w-[25px] ",
    },
    {
      field: "Unit",
      headerName: "Unit",
      style: " w-[25px] ",
    },
    {
      field: "ProductBarcode",
      headerName: "Barcode",
    },
    { field: "Link", headerName: "Link" },
  ];

  const SerachField = [
    "ProductName",
    "Price",
    "Unit",
    "ProductBarcode",
    "ProductBarcode",
  ];

  return {
    loadingAllProduct,
    dataAllProduct,

    Columns,
    SerachField,
  };
};

export default useAdvertising;
