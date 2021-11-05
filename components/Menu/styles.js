import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";

export const Nav = styled.ul`
  display: none;
  list-style-type: none;
  padding: 0;
  text-transform: uppercase;
  margin: auto 0px auto auto;
  li {
    display: inline-block;
    transition: opacity 0.5s ease;
    cursor: pointer;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;
    padding: 15px 0px;
    margin-right: 30px;
    margin-bottom: auto;
    :last-child {
      margin-right: 0px;
    }
    > a {
      padding-bottom: 2px;
      border-bottom: 3px solid ${colors.brandYellow};
    }
  }
  .profile-image {
    border-radius: 50px;
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
  }
`;
