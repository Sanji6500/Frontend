import { useEffect, useState } from "react";
import axios from "axios";

export function useAxiosGet(url) {
  const [request, setRequest] = useState({
    loading: false,
    data: null,
    error: false,
  });

  useEffect(async () => {
    setRequest({
      loading: true,
      data: null,
      error: false,
    });

    const config = {
      header: { "Content-Type": "application/json" },
    };
    await axios
      .get(url)
      .then(async (result) => {
        setRequest({ loading: false, data: result.data, error: false });
      })
      .catch((e) => {
        setRequest({ loading: true, data: null, error: true });
      });
  }, [url]);
  return request;
}
