import { StylesProps } from "styled-system/types";
import { COLORS, PACKAGE_STYLES } from "styles/package.styles";
const {
  button: {
    DEFAULT: { COMMON, DESKTOP, MOBILE },
  },
} = PACKAGE_STYLES;

export const STYLES: { [key: string]: StylesProps } = {
  default: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.375rem",
    margin: 0,
    width: COMMON.width,
    p: COMMON.padding,
    border: COMMON.border,
    fontWeight: COMMON.fontWeight,
    bgColor: COMMON.color,
    color: COLORS.white_1,
    height: DESKTOP.height,
    fontSize: DESKTOP.fontSize,
  },
  primary: {
    bgColor: COLORS.blue_1,
    border: COMMON.border,
    color: COLORS.white_1,
  },
  outlined: {
    bg: "inherit",
    border: COMMON.border,
    color: COLORS.blue_1,
  },
  disabled: {
    bgColor: COLORS.grey_3,
    color: COLORS.white_1,
    border: `0.06rem solid ${COLORS.grey_3}`,
  },
  ghost: {
    bg: "inherit",
    color: COLORS.black_1,
    border: "none",
  },
};
