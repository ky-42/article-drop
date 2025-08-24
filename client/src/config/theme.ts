import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    margin: 0;
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.primary};
    font-family: Arial, Helvetica, sans-serif;
    overflow: hidden;
  }

  button {
    all: unset;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
  }
`;

const theme = {
  colors: {
    primary: "#FEF3E2",
    lightAccent: "#FAB12F",
    mildAccent: "#FA812F",
    darkAccent: "#FA4032",
    text: "#1F2421",
  },
  border: {
    borderWidth: "3px",
    borderRadius: "10px",
  },
  textSize: {
    sm: "12px",
    md: "17px",
    lg: "36px",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },
  breakpoints: {
    sm: "475px",
    md: "650px",
  },
};

export { GlobalStyle };
export default theme;
