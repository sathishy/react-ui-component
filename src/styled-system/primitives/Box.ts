import styled from "styled-components";
import * as CSS from "csstype";
import { StylesProps } from "styled-system/types";
import { mediaQueries, styles } from "styled-system/utils";

export interface BoxProps extends StylesProps {
  cursor?: CSS.Properties["cursor"];
  color?: any;
}

export const Box = styled.div<BoxProps>`
  box-sizing: border-box;
  cursor: ${(props) => props?.cursor || "default"};

  ${styles}
  ${mediaQueries}
`;
