import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";

export const Nav = styled.ul`
  display: none;
  list-style-type: none;
  padding: 0;
  margin: auto 0px auto auto;
  li {
    display: inline-block;
    transition: opacity 0.5s ease;
    cursor: pointer;
    padding: 15px 0px;
    margin-right: 30px;
    margin-bottom: auto;
    :last-child {
      margin-right: 0px;
    }
    > h4 {
      opacity: 0.7;
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
