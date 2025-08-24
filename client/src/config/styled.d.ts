import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      lightAccent: string;
      mildAccent: string;
      darkAccent: string;
      text: string;
    };
    border: {
      borderWidth: string;
      borderRadius: string;
    };
    textSize: {
      sm: string;
      md: string;
      lg: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    breakpoints: {
      sm: string;
      md: string;
    };
  }
}
