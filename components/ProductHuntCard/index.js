import React from "react";
import { Wrapper, BuilderCard } from "./styles";
import Image from "next/image";
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
                    <Image
                        src={thumbnail}
                        alt={name}
                        width={100}
                        height={100}
                        quality={100}
                    />
                </div>
                <div id="info">
                    <div id="details">
                        <p id="title">
                            <strong>{name}</strong>
                        </p>
                        <p id="tagline">{tagline}</p>
                        <div id="tags">{/* <small>{topic}</small> */}</div>
                    </div>
                    <div id="votes">
                        <img src="/icons/upvote_grey.svg" alt="Votes" />
                        <p>{votes}</p>
                    </div>
                </div>
                <div id="buildercard">
                    {builders.map((builder) => (
                        <BuilderCard key={builder.builders.id}>
                            <Image
                                src={builder.builders.profile_image}
                                width={30}
                                height={30}
                                className="ph-avatar"
                            />
                            <p>{builder.builders.name}</p>
                        </BuilderCard>
                    ))}
                </div>
            </Wrapper>
        </a>
    );
}
