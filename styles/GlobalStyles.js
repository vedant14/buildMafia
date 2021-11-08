import { createGlobalStyle } from "styled-components";

export const colors = {
  primaryBlack: "#262626",
  darkGrey: "#6F6F6F",
  primaryBlue: "#0765FD",
  secondaryBlue: "#E4EFFF",
  white: "#FFFFFF",
};

export const GlobalStyles = createGlobalStyle`
  :root {
    --site-max-width: 1200px;
  }


  body {
    font-family: 'DM Sans', sans-serif;
    background-color: ${colors.white};
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }

  main {
    margin-right: auto;
    margin-left: auto;
    min-height: 80vh;
  }


  h1{    
    font-style: normal;
    font-weight: 900;
    font-size: 32px;
    line-height: 32px;
    letter-spacing: -1px;
    margin: 0px;
    @media screen and (min-width: 1080px) {
      font-size: 56px;
      line-height: 52px;
    }
  }

  h2{    
    font-style: normal;
    font-weight: 900;
    font-size: 28px;
    line-height: 30px;
    margin: 0px;
    @media screen and (min-width: 1080px) {
      font-size: 44px;
      line-height: 40px;
    }
  }

  h3{
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 30px;
    margin: 0px;
    @media screen and (min-width: 1080px) {
      font-size: 28x;
      line-height: 40px;
    }
  }

  h4 , button{    
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    margin: 0px;
    @media screen and (min-width: 1080px) {
      font-size: 22px;
      line-height: 20px;
    }
  }

  p, a, li {
    color: ${colors.washedBlack};
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 18px;
    @media screen and (min-width: 1080px) {
      font-size: 18px;
      line-height: 23px;
    }
  }

  li{
    margin-bottom: 20px;
  }

  small{
    font-style: normal;
    font-weight: 200;
    font-size: 14px;
    text-transform: uppercase;
    > a {
      font-size: 14px;
    }
  }

  a {
    font-weight: 500;
    text-decoration: none;
    color: ${colors.primaryBlack};
    &:hover {
      text-decoration: none; 
    }
  }

  button {
    color: ${colors.primaryBlue};
    background: ${colors.secondaryBlue};
    font-style: normal;
    font-weight: 500;
    cursor: pointer;
    padding: 10px 14px;
    /*margin: 5px 10px 5px 0px;*/
    border-radius: .25rem;
    border: none;
    @media screen and (min-width: 1080px) {
      padding: 12px 20px;
      /*margin: 10px 30px 10px 0px;*/
    }
  }

  .Container {
    margin-left: 30px;
    margin-right: 30px;
    @media screen and (min-width: 768px) {
      margin-left: 60px;
      margin-right: 60px;
    }
    @media screen and (min-width: 1024px) {
      margin-left: 60px;
      margin-right: 60px;
    }
    @media screen and (min-width: 1324px) {
      margin-left: 150px;
      margin-right: 150px;
    }
    @media screen and (min-width: 1920px) {
      max-width: 1600px;
      margin-left: auto;
      margin-right: auto;
    }
  }

`;
