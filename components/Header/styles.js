import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";

export const HeaderWrapper = styled.header`
  position: fixed;
  background: ${colors.primaryBlue};
  top: 0;
  color: ${colors.white};
  z-index: 999;
  width: 100%;
  > div {
    display: flex;
    height: 80px;
    padding-top: 4px;
    margin-top: auto;
    margin-bottom: auto;
  }
`;

export const LogoWrapper = styled.h4`
  cursor: pointer;
  margin: auto 0px;
  font-weight: 900;
  @media screen and (min-width: 1080px) {
    margin: auto 0px;
  }
`;
