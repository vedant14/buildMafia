import React, { useState, useEffect } from "react";
import { Layout, Hero, AllProducts } from "../components";
import { supabase } from "../services/supabaseClient";
const Home = () => {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data: Product, loading, error } = await supabase
      .from("Product")
      .select(
        `id, name, slug, tagline, description, vote_count, thumbnail, product_links, BuilderProducts( Builders(id, name, profile_link, profile_image, twitter_username))`
      );
    if (loading) {
      return <h1>Loading</h1>;
    }
    setProductData(Product);
  };
  return (
    <Layout>
      <Hero
        count={productData?.length}
        total={productData?.reduce((a, v) => (a = a + v.vote_count), 0)}
      />
      <AllProducts productData={productData} setProductData={setProductData} />
    </Layout>
  );
};

export default Home;
