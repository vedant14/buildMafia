import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";

export const Wrapper = styled.div`
    width: 80%;
    margin: 80px auto;
    text-align: left;
    display: grid;
    grid-template-columns: 1fr 3fr 3fr;
    grid-gap: 20px;
    > div#info {
        display: flex;
        justify-content: space-between;
        border-right: 1px solid ${colors.primaryBlue};
        > div#details {
            width: 400px;
            margin-right: 50px;
            strong {
            }
            > p {
                margin: 0px;
            }
            > p#tagline {
                opacity: 0.7;
                padding-top: 3px;
            }
            > div#tags {
                width: fit-content;
                opacity: 0.7;
                margin-top: 10px;
                display: flex;
                justify-content: space-between;
                > small,
                span {
                    padding-right: 10px;
                }
            }
        }
        > div#votes {
            background: ${colors.white};
            width: 60px;
            height: 80px;
            margin: auto;
            border-radius: 4px;
            border: 1px solid ${colors.darkGrey};
            margin-right: 20px;
            display: grid;
            > p,
            img {
                margin: auto;
            }
            > img {
                padding-top: 5px;
            }
        }
    }
    &:hover {
        transition-delay: 5s;
        > div#info {
            border-radius: 4px;
            border-right: 1px solid rgba(2, 131, 255, 0.2);

            background: linear-gradient(
                270deg,
                rgba(2, 131, 255, 0.2) 0%,
                rgba(255, 255, 255, 0) 47.92%
            );
        }
    }
`;

export const BuilderCard = styled.div`
    background: ${colors.secondaryBlue};
    display: flex;
    padding: 5px 10px;
    margin: 0px 0px 8px 0px;
    border-radius: 10px;
    width: fit-content;
    .ph-avatar {
        width: 35px;
        height: 35px;
        border-radius: 40px;
    }
    > p {
        margin: auto;
        padding-left: 5px;
        padding-top: 3px;
    }
`;
