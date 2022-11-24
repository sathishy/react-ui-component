import { StylesProps } from "styled-system/types";
import { space, color, typography, layout, flexbox, grid, background, border, position } from "styled-system/utils";

/** cotains all css styles */
export const styles = (props: StylesProps) => {
  const allStyles = [
    space(props),
    color(props),
    typography(props),
    layout(props),
    flexbox(props),
    grid(props),
    background(props),
    border(props),
    position(props),
  ];

  return allStyles;
};
