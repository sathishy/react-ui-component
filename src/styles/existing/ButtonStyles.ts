import { Colors } from "../Theme";

/** Source: Client UI
 * vz-client-ui/src/components/Button/ButtonStyles.ts
 *
 * TODO: (optional) clean - once button is finalised
 */

// eslint-disable-next-line import/prefer-default-export
export const buttonTheme = (colors: Colors) => ({
  sizes: {
    small: {
      fontSize: "0.87rem",
      lineHeight: "1.7rem",
      padding: "0.93rem 2.5rem",
      height: "2.6rem",
      iconSize: "1.4rem",
    },
    middle: {
      fontSize: "1.3rem",
      lineHeight: "1.9rem",
      padding: "0.6rem 1.2rem",
      height: "3.2rem",
      iconSize: "1.6rem",
    },
    large: {
      fontSize: "1.6rem",
      lineHeight: "2.4rem",
      padding: "0.8rem 1.6rem",
      height: "3.75rem",
      iconSize: "2rem",
    },
  },
  borderRadius: "100px",
  color: colors.white,
  states: {
    primary: {
      hover: "#40B9FF",
      active: "#0689D9",
      disabled: "#66C7FF",
    },
    secondary: {
      hover: "#626E74",
      active: "#27353D",
      disabled: "#B7C8E6",
    },
    white: {
      hover: "#FFFFFF",
      active: "#FFFFFF",
      disabled: "#828B90",
    },
    red: {
      hover: "#FFFFFF",
      active: "#BE000B",
      disabled: "#EECFD1",
    },
    blue: {
      hover: "#112B7A",
      active: "#112B7A",
      disabled: "#828B90",
    },
    tertiary: {
      hover: "#47C882",
      active: "#47C882",
      disabled: "#D7EADF",
    },
  },
});
