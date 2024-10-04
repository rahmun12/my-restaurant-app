import axios from "axios";
import ProductView from "./ProductView";
import { useEffect, useState } from "react";

export default function Product() {
  const [data, setData] = useState();

  const ambilData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setData(response.data);
  };

  useEffect(() => {
    ambilData();
  }, []);

  return <ProductView products={data} />;
}