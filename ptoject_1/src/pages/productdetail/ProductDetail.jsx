import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetailView from "./ProductDetailView";

export default function ProductDetail() {
  const [data, setData] = useState();
  const { id } = useParams();

  const ambilData = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setData(response.data);
  };

  useEffect(() => {
    ambilData();
    console.log(id);
    console.log(data);
  }, []);

  return <ProductDetailView data={data} />;
}