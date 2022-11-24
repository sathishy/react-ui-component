import { width } from "styled-system/utils";

// TODO: make default color pallet
export const COLORS = {
  // blue
  blue_1: "#215EC9",
  blue_2: "#011759",
  blue_3: "#112B7A",

  // red
  red_1: "#D91515",

  // grey
  grey_1: "#9FAFDF",
  grey_2: "#00000040",
  grey_3: "#979A9D",

  // white
  white_1: "#ffffff",
  white_2: "#f5f5f5",

  // green
  green_1: "#47C882",

  //black
  black_1: "black",
} as const;

// TODO: if possible - move these to theme object
export const PACKAGE_STYLES = {
  button: {
    DEFAULT: {
      COMMON: {
        fontWeight: 500,
        placeholderColor: "#9FAFDF",
        color: COLORS.white_1,
        bgColor: COLORS.blue_1,
        padding: "0 1.875rem", // "0 30px"
        border: `0.06rem solid ${COLORS.blue_1}`,
        width: "100%",
      },
      DESKTOP: {
        borderRadius: "0.25rem", // 4px
        fontSize: "0.8rem", // 14px
        height: "2.5rem", // 40px,
      },
      MOBILE: {
        borderRadius: "1.5rem", // 24px
        fontSize: "0.75rem", // 12px
        height: "1.75rem", // 28px
      },
    },
  },
  input: {
    DEFAULT: {
      COMMON: {
        width: "100%",
        fontWeight: 400,
        placeholderColor: "#9FAFDF",
        color: COLORS.blue_2,
        borderRadius: "0.25rem", // 4px
        padding: "0 0.75rem", // "0 12px"
        border: `1px solid ${COLORS.grey_1}`,
      },
      DESKTOP: {
        fontSize: "0.875rem", // 14px
        height: "2.5rem", // 40px,
      },
      MOBILE: {
        fontSize: "0.75rem", // 12px
        height: "1.75rem", // 28px
      },
    },
    FIELD_DESCRIPTION: {
      DESKTOP: {
        fontSize: "0.75rem", // 12px
        fontWeight: 500,
      },
      MOBILE: {
        fontSize: "0.625rem", // 8px
        fontWeight: 400,
      },
    },
  },
} as const;
