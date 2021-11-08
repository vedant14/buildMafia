import React, { useState } from "react";
import { Layout, Hero, AllProducts } from "../components";
const Home = () => {
  const [productData, setProductData] = useState(null);
  return (
    <Layout>
      <Hero productData={productData} />
      <AllProducts productData={productData} setProductData={setProductData} />
    </Layout>
  );
};

export default Home;
