import React, { useState, useEffect } from "react";
import { Wrapper } from "./styles";
import { ProductHuntCard } from "../ProductHuntCard";
import dummyData from "../../content/dummyData.json";
import { supabase } from "../../services/supabaseClient";

export function AllProducts({ productData, setProductData }) {
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const { data: Product, loading, error } = await supabase
            .from("Product")
            .select(
                `id, name, slug, tagline, description, vote_count, thumbnail, product_links, BuilderProducts( Builders(id, name, profile_link, profile_image, twitter_username))`
            );
        setProductData(Product);
    };
    return (
        <Wrapper className="Container">
            <h2>All Our Products</h2>
            {productData && (
                <div>
                    {productData.map((post) => (
                        <ProductHuntCard
                            key={post.id}
                            name={post.name}
                            thumbnail={post.thumbnail}
                            tagline={post.tagline}
                            paid={dummyData[0].paid}
                            link={post.product_links[0]}
                            votes={post.vote_count}
                            topic={dummyData[0].topic}
                            builders={post.BuilderProducts}
                        />
                    ))}
                </div>
            )}
        </Wrapper>
    );
}
