import React from "react";
import { Wrapper, StatsWrapper } from "./styles";
import { supabase } from "../../services/supabaseClient";
export function Hero({ productData }) {
    const count = productData.length;
    const total = productData.reduce((a, v) => (a = a + v.vote_count), 0);

    function kFormatter(num) {
        return Math.abs(num) > 999
            ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
            : Math.sign(num) * Math.abs(num);
    }

    return (
        <Wrapper>
            <div className="Container">
                <h1>
                    Build Mafia <br /> Product Hunt Tracker
                </h1>
                <h3>
                    Build is a community of some crazy people who like shipping
                    side projects. <br /> And we’ve been shipping and storming
                    Product Hunt for a while now.
                </h3>
                <StatsWrapper>
                    <div id="statCard">
                        <div id="statContainer">
                            <div id="statCircle">
                                <div id="statIcon">
                                    <span id="statIndicator">#</span>
                                </div>
                                <span id="statMain">{count}</span>
                            </div>
                        </div>
                        <div id="statHelper">
                            <h4>Total Launches</h4>
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
                                <span id="statMain">{kFormatter(total)}</span>
                            </div>
                        </div>
                        <div id="statHelper">
                            <h4>Total Upvotes</h4>
                        </div>
                    </div>
                </StatsWrapper>
            </div>
        </Wrapper>
    );
}
