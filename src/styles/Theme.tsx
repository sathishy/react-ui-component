import React from "react";
import { ThemeProvider } from "styled-components";
import { SCREENS } from "../constants/mediaQueries.constants";

import { buttonTheme } from "./existing/ButtonStyles";
import { inputTheme } from "./existing/inputStyles";

export const colors = {
  blue_1: "lightblue",
  primary: "#011759",
  secondary: "#215EC9",
  tertiary: "#47C882",
  black: "#161616",
  blackLight: "#1C252B",
  blue: "#112B7A",
  green: "#47C882",
  red: "#BE000B",
  orange: "#FFAC39",
  white: "#FFFFFF",
  whiteFifty: "rgba(255, 255, 255, 0.5)",
  grayLight: "#B5C3C9",
  gray: "#98A6AD",
  grayDark: "#4A5A65",
  orangeDark: "#F78E50",
  inputPlaceholderColor: "lightGray",
} as const;

export type Colors = typeof colors;

export const globalStyles = {
  fontFamily: "Poppins",
  baseFontSize: "16px",
  bodyBG: "#FFFFFF",
  baseFontColor: "#11151A",
};

const fontSizes = {
  hero: {
    fontSize: "3.2rem",
    lineHeight: "4.7rem",
  },
  h1: {
    fontSize: "1.25rem",
    lineHeight: "2.9rem",
  },
  h2: {
    fontSize: "1.12rem",
    lineHeight: "2.7rem",
  },
  h3: {
    fontSize: "1rem",
    lineHeight: "2.4rem",
  },
  body: {
    fontSize: "0.87rem",
    lineHeight: "1.9rem",
  },
  body2: {
    fontSize: "0.75rem",
    lineHeight: "1.8rem",
  },
  caption: {
    fontSize: "0.75rem",
    lineHeight: "1.12rem",
  },
  px: "1px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem",
};

const fontWeights = {
  light: "300",
  regular: "400",
  medium: "500",
  bold: "600",
};

// breakpoint values should always be strings
const breakpoints = [SCREENS.xxs, SCREENS.xs, SCREENS.sm, SCREENS.md, SCREENS.lg, SCREENS.xl, SCREENS.xxl];

export const theme = {
  colors,
  button: { ...buttonTheme(colors) },
  input: { ...inputTheme(colors) },
  fontSizes,
  fontWeights,
  breakpoints,
} as const;

// Breakpoint aliases
(theme.breakpoints as any).xxs = breakpoints[0];
(theme.breakpoints as any).xs = breakpoints[1];
(theme.breakpoints as any).sm = breakpoints[2];
(theme.breakpoints as any).md = breakpoints[3];
(theme.breakpoints as any).lg = breakpoints[4];
(theme.breakpoints as any).xl = breakpoints[5];
(theme.breakpoints as any).xxl = breakpoints[6];

const Theme = ({ children }: any) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
