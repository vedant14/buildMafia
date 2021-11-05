import React from "react";
import { Wrapper, StatsWrapper } from "./styles";

export function Hero() {
    return (
        <Wrapper>
            <div className="Container">
                <h1>
                    Build Mafia <br /> Product Hunt Tracker
                </h1>
                <p>
                    Build is a community of some crazy people who like shipping
                    side projects. <br /> And we’ve been shipping and storming
                    Product Hunt for a while now.
                </p>
                <StatsWrapper>
                    <div id="statGrid">
                        <div id="statContainer">
                            <div id="statCircle">
                                <div id="statIcon">
                                    <span id="statIndicator">#</span>
                                </div>
                                <span id="statMain">140</span>
                            </div>
                        </div>
                        <div id="statHelper">
                            <h2># Product Hunt Launches</h2>
                        </div>
                    </div>
                    <div id="statGrid">
                        <div id="statContainer">
                            <div id="statCircle">
                                <div id="statIcon">
                                    <span id="statIndicator">
                                        <img
                                            src="/icons/upvote_blue.svg"
                                            alt="indicator"
                                        />
                                    </span>
                                </div>
                                <span id="statMain">16K</span>
                            </div>
                        </div>
                        <div id="statHelper">
                            <h2># of Upvotes for Build Mafia Products</h2>
                        </div>
                    </div>
                </StatsWrapper>
            </div>
        </Wrapper>
    );
}
