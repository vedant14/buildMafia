import React from "react";
import { Wrapper } from "./styles";
import { ProductHuntCard } from "../ProductHuntCard";
import dummyData from "../../content/dummyData.json";

export function AllProducts() {
    return (
        <Wrapper className="Container">
            <h2>All Our Products</h2>
            {dummyData.map((post) => (
                <ProductHuntCard
                    key={post.id}
                    name={post.name}
                    thumbnail={post.thumbnail}
                    tagline={post.tagline}
                    paid={post.paid}
                    link={post.link}
                    votes={post.votes}
                    topic={post.topic}
                    builders={post.builders}
                />
            ))}
        </Wrapper>
    );
}
