import React from "react";
import { Wrapper } from "./styles";
import { ProductHuntCard } from "../ProductHuntCard";
import dummyData from "../../content/dummyData.json";

export function AllProducts({ productData }) {
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
                            builders={post.builder_products}
                        />
                    ))}
                </div>
            )}
        </Wrapper>
    );
}
