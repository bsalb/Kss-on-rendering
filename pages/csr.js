import { useEffect, useState } from "react";

import Card from "@/components/Card";
import { fetchData } from "@/utils/fetch";

const CSRPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData("/api/data").then((jsonData) => {
      setData(jsonData);
    });
  }, []);

  return (
    <div className="text-center text-gray-700 flex flex-col gap-4 ">
      <h1 className="font-bold text-xl">CSR Page</h1>
      <p className=" font-semibold text-sm">
        This page is rendered using Client-Side Rendering (CSR).
      </p>

      <div className="mt-10 flex flex-grow gap-4">
        {data.map((item) => (
          <Card user={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default CSRPage;
