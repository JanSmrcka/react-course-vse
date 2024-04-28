import { useState, useEffect } from "react";

const localCache = {};

export default function useModelList(brand) {
  const [modelList, setModelList] = useState([]);

  useEffect(() => {
    if (!brand) {
      setModelList([]);
    } else if (localCache[brand]) {
      setModelList(localCache[brand]);
    } else {
      requestModelList();
    }

    async function requestModelList() {
      const res = await fetch(
        `https://vse-react-basic.vercel.app/api/models?brand=${brand}`,
      );

      const models = await res.json();
      localCache[brand] = models;
      setModelList(models);
    }
  }, [brand]);

  return [modelList];
}
