import React, { useState, useEffect } from "react";
import { Layout, UploadData } from "../components";
import { supabase } from "../services/supabaseClient";
const Upload = () => {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data: submissions, loading, error } = await supabase
      .from("submissions")
      .select(`id, url`)
      .eq("is_approved", true);
    setProductData(submissions);
  };

  return (
    <Layout>
      <h1>Uploading Data</h1>

      {productData && (
        <div>
          {productData.map((product) => (
            <UploadData
              key={product.id}
              slugLink={product.url}
              id={product.id}
            />
          ))}
        </div>
      )}
    </Layout>
  );
};

export default Upload;
