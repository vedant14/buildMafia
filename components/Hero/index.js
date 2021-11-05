import React from "react";
import { Wrapper, StatsWrapper } from "./styles";
export function Hero() {
    return (
        <Wrapper>
            <div className="Container">
                <h1>
                    Build Mafia <br /> Product Hunt Tracker
                </h1>
                <h2>
                    Build is a community of some crazy people who like shipping
                    side projects. <br /> And we’ve been shipping and storming
                    Product Hunt for a while now.
                </h2>
                <StatsWrapper>
                    <div id="statCard">
                        <div id="statContainer">
                            <div id="statCircle">
                                <div id="statIcon">
                                    <span id="statIndicator">#</span>
                                </div>
                                <span id="statMain">140</span>
                            </div>
                        </div>
                        <div id="statHelper">
                            <h3>Total Launches</h3>
                        </div>
                    </div>
                    <div id="statCard">
                        <div id="statContainer">
                            <div id="statCircle">
                                <div id="statIcon">
                                    <img
                                        src="/icons/upvote_blue.svg"
                                        alt="upvotes"
                                    />
                                </div>
                                <span id="statMain">16K</span>
                            </div>
                        </div>
                        <div id="statHelper">
                            <h3>Total Upvotes</h3>
                        </div>
                    </div>
                </StatsWrapper>
            </div>
        </Wrapper>
    );
}
