import { useQuery } from "react-query";
import { getAds } from "../Api/api";

const useAdvertisingBrowser = () => {
  const { isLoading: loadingdataGetAdds, data: dataGetAdds } = useQuery(
    "getAds",
    getAds
  );

  const modifiedData = dataGetAdds?.data?.result.map((item) => ({
    AdvertisingEndDate: new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hourCycle: "h23",
    }).format(new Date(item.AdvertisingEndDate)),
    AdvertisingStartDate: new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hourCycle: "h23",
    }).format(new Date(item.AdvertisingStartDate)),
    PriceAfterDiscount: item.PriceAfterDiscount,
    PriceBefordiscount: item.PriceBefordiscount,
    ProductName: item.ProductID.ProductName,
    Shop_ID: item.Shop_ID,
    _id: item._id,
  }));

  const Columns = [
    { checkbox: true },

    { field: "ProductName", headerName: "Product Name" },
    {
      field: "PriceBefordiscount",
      headerName: "PriceBefordiscount",
      style: " w-[25px] ",
    },
    {
      field: "PriceAfterDiscount",
      headerName: "PriceAfterDiscount",
      style: " w-[25px] ",
    },
    {
      field: "AdvertisingStartDate",
      headerName: "AdvertisingStartDate",
    },
    { field: "AdvertisingEndDate", headerName: "AdvertisingEndDate" },
  ];

  const SerachField = [
    "ProductName",
    "PriceBefordiscount",
    "PriceAfterDiscount",
    "AdvertisingStartDate",
    "AdvertisingEndDate",
  ];

  return {
    loadingdataGetAdds,
    modifiedData,
    Columns,
    SerachField,
  };
};

export default useAdvertisingBrowser;
