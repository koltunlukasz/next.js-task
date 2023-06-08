import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    white: "#FFFFFF",
    black: "#000000",
    red: "#FF5353",
    lightGrey: "F3F4F6",
    grey: "#3E4958",
    yellow: "#FFB932",
    lightBlue: "#C7E7F5",
    blue: "#3068DE",
    mobileButton: "rgba(48, 104, 222, 0.25)",
  },
  fontSizes: {
    xs: "12px",
    s: "13px",
    m: "14px",
    l: "15px",
    xl: "16px",
    haloMobile: "24px",
    headMobile: "20px",
    haloDesk: "32px",
  },

  fontWeights: {
    thin: 500,
    regular: 600,
    bold: 700,
  },
};

export const GlobalStyles = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Inter', sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

*, *::before, *::after {
  box-sizing: border-box;
}
`;
