import styled from "styled-components";
import { PACKAGE_STYLES } from "styles/package.styles";
import { StylesProps } from "styled-system/types";
import { mediaQueries, styles } from "styled-system/utils";

export interface InputProps extends StylesProps {
  /** TODO: fix type for height */
  height?: string | number | any | undefined;
  width?: string | number | any | undefined;
  color?: string | number | any | undefined;
}

export const Input = styled.input<InputProps>`
  /* TODO: add focus/hover cases */
  outline: none;
  ::placeholder {
    color: ${PACKAGE_STYLES.input.DEFAULT.COMMON.placeholderColor};
    opacity: 1;
  }

  ${styles}
  ${mediaQueries}
`;
