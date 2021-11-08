import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";

export const Wrapper = styled.ul`
    .input-email {
        width: 100%;
        height: 30px;
        background: ${colors.white};
        border: 1px solid ${colors.primaryBlack};
        border-radius: 4px;
        padding-inline-start: 10px;
        font-family: "Inter", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        @media screen and (min-width: 768px) {
            font-size: 16px;
        }
    }
    .error {
        font-weight: 400;
        padding-inline-start: 5px;
        font-size: 12px;
        line-height: 15px;
        color: rgb(178, 1, 16);
        margin-top: 5px;
        margin-bottom: 0px;
    }
    > button {
        padding: 4px 10px;
    }
`;
