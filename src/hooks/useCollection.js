import { useEffect, useState } from "react";

export const useCollection = (collectionName) => {
  const [data, setData] = useState(null);

  useEffect(() => {}, [collectionName]);

  return { data };
};
