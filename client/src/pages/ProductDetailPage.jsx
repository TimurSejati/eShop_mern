import React from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import ProductDetail from "../components/Products/ProductDetail";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { productData } from "../static/data";

const ProductDetailPage = () => {
  const { name } = useParams();
  const [data, setData] = useState(null);
  const productName = name.replace(/-/g, " ");

  useEffect(() => {
    const data = productData.find((i) => i.name === productName);
    setData(data);
  }, []);

  return (
    <div>
      <Header />
      <ProductDetail data={data} />
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
