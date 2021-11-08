import React from "react";
import { Wrapper, BuilderCard } from "./styles";

export function ProductHuntCard({
    name,
    thumbnail,
    tagline,
    paid,
    link,
    votes,
    builders,
    topic,
}) {
    return (
        <a href={link} target="_blank">
            <Wrapper>
                <div id="thumbnail">
                    <img src={thumbnail} alt={name} />
                </div>
                <div id="info">
                    <div id="details">
                        <p id="title">
                            <strong>{name}</strong>
                        </p>
                        <p id="tagline">{tagline}</p>
                        <div id="tags">
                            <small>{paid}</small>
                            <span>•</span>
                            <small>{topic}</small>
                        </div>
                    </div>
                    <div id="votes">
                        <img src="/icons/upvote_grey.svg" alt="Votes" />
                        <p>{votes}</p>
                    </div>
                </div>
                <div>
                    {builders.map((builder) => (
                        <BuilderCard key={builder.Builders.id}>
                            <img src={builder.Builders.profile_image} />
                            <p>{builder.Builders.name}</p>
                        </BuilderCard>
                    ))}
                </div>
            </Wrapper>
        </a>
    );
}
