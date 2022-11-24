import React, { InputHTMLAttributes } from "react";
import { BoxProps } from "styled-system/primitives/Box";
import { Box, Grid, Input } from "styled-system/primitives";
import { COLORS, PACKAGE_STYLES } from "styles/package.styles";
import { StyledInputContainer } from "./responsiveInput.styles";
import { StylesProps } from "styled-system/types";
const {
  input: {
    DEFAULT: { COMMON, DESKTOP, MOBILE },
  },
} = PACKAGE_STYLES;

export type IHTMLInputElementType = Omit<InputHTMLAttributes<HTMLInputElement>, "height" | "width" | "color">;
export type elementType = string | React.ReactNode;

export interface IInputProps extends IHTMLInputElementType, StylesProps {
  error?: boolean;
  leftIcon?: elementType;
  rightIcon?: elementType;
  fieldDescription?: elementType;
  containerProps?: BoxProps;
}

export const ResponsiveInput = (props: IInputProps) => {
  const {
    // custom props
    error,
    leftIcon,
    rightIcon,
    fieldDescription,
    // style props
    width,
    size,
    color,
    borderColor,
    containerProps,
    ...remainingProps
  } = props;

  const inputStyles: StylesProps = {
    margin: 0,
    bg: "inherit",
    width: COMMON.width,
    p: COMMON.padding,
    border: COMMON.border,
    fontWeight: COMMON.fontWeight,
    color: color || COMMON.color,
    borderRadius: COMMON.borderRadius,
    height: { xxs: MOBILE.height, sm: DESKTOP.height },
    fontSize: { xxs: MOBILE.fontSize, sm: DESKTOP.fontSize },
  };

  return (
    <>
      {/* parent container */}
      <Grid
        position={"relative"}
        gap={"0.25rem"} // 4px
        marginBottom={{
          xxs: "0.75rem", // 12px
          sm: "0.875rem", // 14px
        }}
        {...containerProps}
      >
        <StyledInputContainer position={"relative"}>
          {leftIcon && <Box>{leftIcon}</Box>}
          <Input
            {...inputStyles}
            {...remainingProps}
            borderColor={error ? COLORS.red_1 : props.borderColor}
            color={remainingProps.disabled ? COLORS.grey_2 : color}
            bg={remainingProps.disabled ? COLORS.white_2 : remainingProps.bg}
          />
          {rightIcon && <Box>{rightIcon}</Box>}
        </StyledInputContainer>

        {/* error/description container */}
        {fieldDescription && (
          // TODO: replace with typography component
          <Box
            color={error ? COLORS.red_1 : COLORS.blue_1}
            fontSize={{
              xxs: PACKAGE_STYLES.input.FIELD_DESCRIPTION.MOBILE.fontSize,
              sm: PACKAGE_STYLES.input.FIELD_DESCRIPTION.DESKTOP.fontSize,
            }}
          >
            {fieldDescription}
          </Box>
        )}
      </Grid>
    </>
  );
};
