import React from "react";
import styled from "styled-components";
import { StylesProps } from "styled-system/types";
import { styles, mediaQueries } from "styled-system/utils";

const StyledDiv = styled.div<BoxProps>`
  ${styles}
  ${mediaQueries}
`;

export type ReactDivType = Omit<React.HTMLAttributes<HTMLDivElement>, "color">;

export interface BoxProps extends ReactDivType, StylesProps {
  as?: any;
}

/**
 * an example component to show usage of the package
 */
export const StyledSystemBox = (props: BoxProps) => {
  return (
    <StyledDiv as={"div"} {...props}>
      {props?.children}
    </StyledDiv>
  );
};
