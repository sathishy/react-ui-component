import React, { HTMLAttributes } from "react";
import styled from "styled-components";
import * as CSS from "csstype";
import { StylesProps } from "styled-system/types";
import { mediaQueries, styles } from "styled-system/utils";

export type IHTMLDiv = Omit<HTMLAttributes<HTMLDivElement>, "height" | "width" | "color">;
export interface BoxProps extends IHTMLDiv, StylesProps {
  cursor?: CSS.Properties["cursor"];
  color?: any;
}

export const Box = styled.div<BoxProps>`
  box-sizing: border-box;
  cursor: ${(props) => props?.cursor || "default"};

  ${styles}
  ${mediaQueries}
`;
