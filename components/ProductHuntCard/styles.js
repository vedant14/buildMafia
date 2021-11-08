import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";

export const Wrapper = styled.div`
    margin: 80px auto;
    text-align: left;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 10px;
    /*grid-template-areas: 
    "header header header header"
    "main main . sidebar"
    "footer footer footer footer";*/
    @media screen and (min-width: 1080px) {
        width: 80%;
        grid-template-columns: 1fr 3fr 3fr;
        grid-gap: 20px;
    }
    > div#thumbnail {
        min-width: 60px;
    }
    > div#buildercard {
        grid-column: 1/3;
        @media screen and (min-width: 1080px) {
            grid-column: 3/3;
        }
    }
    > div#info {
        display: flex;

        justify-content: space-between;
        @media screen and (min-width: 1080px) {
            border-right: 1px solid ${colors.primaryBlue};
        }
        > div#details {
            @media screen and (min-width: 1080px) {
                width: 400px;
                margin-right: 50px;
            }
            > p {
                margin: 0px;
            }
            > p#tagline {
                opacity: 0.7;
                padding-top: 3px;
                padding-right: 5px;
            }
            > div#tags {
                width: fit-content;
                opacity: 0.7;
                margin-top: 10px;
                display: none;
                @media screen and (min-width: 1080px) {
                    display: flex;
                    justify-content: space-between;
                }
                > small,
                span {
                    padding-right: 10px;
                }
            }
        }
        > div#votes {
            background: ${colors.white};
            width: 60px;
            height: 60px;
            border-radius: 4px;
            margin: 0px auto;
            @media screen and (min-width: 1080px) {
                height: 80px;
                margin: auto;
                border: 1px solid ${colors.darkGrey};
                margin-right: 20px;
            }
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
            @media screen and (min-width: 1080px) {
                border-radius: 4px;
                border-right: 1px solid rgba(2, 131, 255, 0.2);

                background: linear-gradient(
                    270deg,
                    rgba(2, 131, 255, 0.2) 0%,
                    rgba(255, 255, 255, 0) 47.92%
                );
            }
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
        text-transform: capitalize;
        margin: auto;
        padding-left: 5px;
        padding-top: 3px;
    }
`;
