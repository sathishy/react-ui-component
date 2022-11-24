import * as CSS from "csstype";
import { getAppliedCssValues, getCSSOnlyStringValueFromCSSProperties } from "./helpers";
import { HeightProps, PartialCSSPropertiesHyphen } from "styled-system/types";

export const height = (props: HeightProps) => {
  const getCSSValue = (cssPropertiesArray: string[]) =>
    getCSSOnlyStringValueFromCSSProperties(props, cssPropertiesArray);

  const cssObject: PartialCSSPropertiesHyphen = {
    height: getCSSValue(["h", "height"]) as CSS.Property.Height<string | 0>,
    "min-height": getCSSValue(["minH", "minHeight"]) as CSS.Property.MinHeight<string | 0>,
    "max-height": getCSSValue(["maxH", "maxHeight"]) as CSS.Property.MaxHeight<string | 0>,
  };

  return getAppliedCssValues(cssObject);
};
