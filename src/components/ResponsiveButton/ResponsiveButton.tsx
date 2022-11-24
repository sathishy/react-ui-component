import React, { ButtonHTMLAttributes } from "react";
import { Box, Button as PrimitiveButton } from "styled-system/primitives";
import { PACKAGE_STYLES } from "styles/package.styles";
import { STYLES } from "./responsiveButton.styles";
import { StylesProps } from "styled-system/types";
const {
  button: {
    DEFAULT: { COMMON, DESKTOP, MOBILE },
  },
} = PACKAGE_STYLES;

export type BHTMLButtonElementType = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "height" | "width" | "color">;
export type elementType = string | React.ReactNode;

export interface ButtonProps extends BHTMLButtonElementType, StylesProps {
  leftIcon?: elementType;
  rightIcon?: elementType;
  variant?: "primary" | "outlined";
}

export const Button = (props: ButtonProps) => {
  const { primary, outlined, ghost } = STYLES;

  const variantStyles = (variant?: "primary" | "outlined") => {
    switch (variant) {
      case "primary":
        return primary;
      case "outlined":
        return outlined;
      default:
        return {};
    }
  };

  const applyDisabledStyles = props?.disabled ? STYLES.disabled : {};

  return (
    <PrimitiveButton {...STYLES.default} {...variantStyles(props?.variant)} {...props} {...applyDisabledStyles}>
      {props?.leftIcon && <Box>{props?.leftIcon}</Box>}
      {props?.children}
      {props?.rightIcon && <Box>{props?.rightIcon}</Box>}
    </PrimitiveButton>
  );
};
