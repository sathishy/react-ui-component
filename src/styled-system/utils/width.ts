import * as CSS from "csstype";
import { getAppliedCssValues, getCSSOnlyStringValueFromCSSProperties } from "./helpers";
import { WidthProps, PartialCSSPropertiesHyphen } from "styled-system/types";

export const width = (props: WidthProps) => {
  const getCSSValue = (cssPropertiesArray: string[]) =>
    getCSSOnlyStringValueFromCSSProperties(props, cssPropertiesArray);

  const cssObject: PartialCSSPropertiesHyphen = {
    width: getCSSValue(["w", "width"]) as CSS.Property.Width<string | 0>,
    "min-width": getCSSValue(["minW", "minWidth"]) as CSS.Property.MinWidth<string | 0>,
    "max-width": getCSSValue(["maxW", "maxWidth"]) as CSS.Property.MaxWidth<string | 0>,
  };

  return getAppliedCssValues(cssObject);
};
