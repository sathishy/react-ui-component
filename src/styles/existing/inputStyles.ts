import { Colors } from "../Theme";

/**
 * Source
 * /vz-client-ui/src/components/TextBox/InputStyles.ts
 *
 * TODO: (optional) clean - once button is finalised
 */

// eslint-disable-next-line import/prefer-default-export
export const inputTheme = (colors: Colors) => ({
  sizes: {
    middle: {
      fontSize: "1rem",
      fontWeight: "500",
      lineHeight: "1.9rem",
      padding: "0.6rem 1.2rem",
      height: "3.75rem",
      iconSize: "1.6rem",
    },
  },
  borderRadius: "8px",
  color: colors.primary,
  states: {
    default: "#D4E5FE",
    hover: colors.secondary,
    active: colors.secondary,
    disabled: colors.gray,
    success: colors.green,
    failure: colors.red,
  },
});
