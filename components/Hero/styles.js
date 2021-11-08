import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";

export const Wrapper = styled.div`
    background: ${colors.primaryBlue};
    color: ${colors.white};
    text-align: center;
    overflow: hidden;
    padding-bottom: 100px;
    > div {
        > h1 {
            margin-top: 100px;
            margin-bottom: 20px;
        }
        > h3 {
            opacity: 0.7;
        }
    }
`;

export const StatsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
    margin-top: 80px;
    margin-bottom: 80px;
    @media screen and (min-width: 1080px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 40px;
        padding: 0px 100px;
    }
    > div#statCard {
        padding: 20px;
        @media screen and (min-width: 1080px) {
            padding: 40px;
        }
        background: ${colors.secondaryBlue};
        border-radius: 20px;
        color: ${colors.primaryBlack};
        filter: drop-shadow(6px 7px 10px rgba(0, 0, 0, 0.25));
        > div#statHelper {
            opacity: 0.7;
        }
        > div#statContainer {
            margin: 40px;
            > div#statCircle {
                position: relative;
                background: ${colors.primaryBlue};
                width: 100px;
                height: 100px;
                border-radius: 100px;

                @media screen and (min-width: 1080px) {
                    width: 200px;
                    height: 200px;
                    border-radius: 200px;
                }
                margin: auto;
                display: flex;
                > div#statIcon {
                    position: absolute;
                    background: ${colors.white};
                    height: 40px;
                    width: 40px;
                    border-radius: 40px;
                    display: flex;
                    right: -20%;
                    @media screen and (min-width: 1080px) {
                        right: 0;
                        height: 60px;
                        width: 60px;
                        border-radius: 60px;
                    }
                    > img {
                        width: 20px;
                        margin: auto;
                        padding-bottom: 6px;
                        @media screen and (min-width: 1080px) {
                            width: 30px;
                        }
                    }
                    > span#statIndicator {
                        color: ${colors.primaryBlue};
                        font-weight: 500;
                        text-align: center;
                        margin: auto;
                        font-size: 20px;
                        @media screen and (min-width: 1080px) {
                            font-size: 32px;
                        }
                    }
                }
                > span#statMain {
                    margin: auto;
                    color: white;
                    font-weight: bold;
                    padding-top: 10px;
                    font-size: 38px;
                    @media screen and (min-width: 1080px) {
                        font-size: 72px;
                        line-height: 84px;
                    }
                }
            }
        }
    }
`;
