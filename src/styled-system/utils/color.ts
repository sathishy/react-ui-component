import * as CSS from "csstype";
import { getAppliedCssValues, getCSSOnlyStringValueFromCSSProperties } from "./helpers";
import { ColorProps, PartialCSSPropertiesHyphen } from "styled-system/types";

export const color = (props: ColorProps) => {
  const getCSSValue = (cssPropertiesArray: string[]) =>
    getCSSOnlyStringValueFromCSSProperties(props, cssPropertiesArray, "colors");

  const cssObject: PartialCSSPropertiesHyphen = {
    opacity: getCSSValue(["opacity"]) as CSS.Property.Opacity,
    color: getCSSValue(["color", "textColor"]),
    "background-color": getCSSValue(["bgColor", "backgroundColor"]),
  };

  return getAppliedCssValues(cssObject);
};
