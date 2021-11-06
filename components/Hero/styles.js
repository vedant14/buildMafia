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
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
    margin-top: 80px;
    margin-bottom: 80px;
    padding: 0px 100px;
    > div#statCard {
        padding: 40px;
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
                > div#statIcon {
                    position: absolute;
                    right: 0;
                    background: ${colors.white};
                    height: 60px;
                    width: 60px;
                    border-radius: 60px;
                    display: flex;
                    > img {
                        width: 30px;
                        margin: auto;
                        padding-bottom: 6px;
                    }
                    > span#statIndicator {
                        color: ${colors.primaryBlue};
                        font-weight: 500;
                        font-size: 32px;
                        line-height: 32px;
                        text-align: center;
                        margin: auto;
                    }
                }
                background: ${colors.primaryBlue};
                width: 200px;
                height: 200px;
                border-radius: 200px;
                margin: auto;
                display: flex;
                > span#statMain {
                    margin: auto;
                    color: white;
                    font-weight: bold;
                    font-size: 72px;
                    line-height: 84px;
                    padding-top: 10px;
                }
            }
        }
    }
`;
