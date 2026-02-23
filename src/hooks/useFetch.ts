import { useEffect, useState } from "react";

function useFetch<T>(url: string) {
  const [data, setData] = useState<T[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const json: T[] = await res.json();
      setData(json);
    };
    fetchData();
  }, [url]);
  return data;
}

export default useFetch;
