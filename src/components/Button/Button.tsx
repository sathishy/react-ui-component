import React from "react";
import { Box, PrimitiveButton } from "styled-system/primitives";
import { PrimitiveButtonProps } from "styled-system/primitives/PrimitiveButton";
import { STYLES } from "./Button.styles";

type ElementType = string | React.ReactNode;

export type ButtonProps = PrimitiveButtonProps & {
  leftIcon?: ElementType;
  rightIcon?: ElementType;
  variant?: "primary" | "outlined";
};

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
