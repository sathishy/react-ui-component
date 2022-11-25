import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { PACKAGE_STYLES } from "styles/package.styles";
import { StylesProps } from "styled-system/types";
import { mediaQueries, styles } from "styled-system/utils";

export type HTMLButtonElementType = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "height" | "width" | "color">;

export type PrimitiveButtonProps = HTMLButtonElementType &
  StylesProps & {
    /** TODO: fix type for height */
    height?: string | number | any | undefined;
    width?: string | number | any | undefined;
    color?: string | number | any | undefined;
  };

export const PrimitiveButton = styled.button<PrimitiveButtonProps>`
  margin: 0px;
  padding: 0px;
  cursor: pointer;
  ${styles}
  ${mediaQueries}
`;
