import React from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import ProductDetail from "../components/Products/ProductDetail";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { productData } from "../static/data";
import SuggestedProduct from "../components/Products/SuggestedProduct";
import { useSelector } from "react-redux";

const ProductDetailPage = () => {
  const { allProducts } = useSelector((state) => state.products);
  // const { allEvents } = useSelector((state) => state.events);
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    // if (eventData !== null) {
    //   const data = allEvents && allEvents.find((i) => i._id === id);
    //   setData(data);
    // } else {
    const data = allProducts && allProducts.find((i) => i._id === id);
    setData(data);
    // }
  }, [allProducts]);

  return (
    <div>
      <Header />
      <ProductDetail data={data} />
      {data && <SuggestedProduct data={data} />}
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
