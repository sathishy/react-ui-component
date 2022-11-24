import * as CSS from "csstype";
import { getAppliedCssValues, getCSSOnlyStringValueFromCSSProperties } from "./helpers";
import { PositionProps, PartialCSSPropertiesHyphen } from "styled-system/types";

export const position = (props: PositionProps) => {
  const getCSSValue = (cssPropertiesArray: string[]) =>
    getCSSOnlyStringValueFromCSSProperties(props, cssPropertiesArray);

  const cssObject: PartialCSSPropertiesHyphen = {
    "z-index": getCSSValue(["zIndex"]) as CSS.Property.ZIndex,
    top: getCSSValue(["top"]) as CSS.Property.Top<string | 0>,
    right: getCSSValue(["right"]) as CSS.Property.Right<string | 0>,
    bottom: getCSSValue(["bottom"]) as CSS.Property.Bottom<string | 0>,
    left: getCSSValue(["left"]) as CSS.Property.Left<string | 0>,
    position: getCSSValue(["pos", "position"]) as CSS.Property.Position,
  };

  return getAppliedCssValues(cssObject);
};
