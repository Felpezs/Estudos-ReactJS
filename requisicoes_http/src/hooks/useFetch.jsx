import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const json = await res.json;
      setData(json);
    };
    fetchData();
  }, [url]);

//   useEffect(() => {
//     if (method === "POST") {
//       let fetchOptions = [url, config];
//       const res = awai fetch(...fetchOptions)
//     }
//   }, [config]);

  return { data };
};
