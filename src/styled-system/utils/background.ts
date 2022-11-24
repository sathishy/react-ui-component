import * as CSS from "csstype";
import { getAppliedCssValues, getCSSOnlyStringValueFromCSSProperties } from "./helpers";
import { BackgroundProps, PartialCSSPropertiesHyphen } from "styled-system/types";

export const background = (props: BackgroundProps) => {
  const getCSSValue = (cssPropertiesArray: string[]) =>
    getCSSOnlyStringValueFromCSSProperties(props, cssPropertiesArray);

  const cssObject: PartialCSSPropertiesHyphen = {
    "background-image": getCSSValue(["bgImg", "backgroundImage"]),
    "background-size": getCSSValue(["bgSize", "backgroundSize"]) as CSS.Property.BackgroundSize<string | 0>,
    "background-position": getCSSValue(["bgPos", "backgroundPosition"]) as CSS.Property.BackgroundPosition<string | 0>,
    "background-repeat": getCSSValue(["bgRepeat", "backgroundRepeat"]),
    background: getCSSValue(["bg", "background"]) as CSS.Property.Background<string | 0>,
  };

  return getAppliedCssValues(cssObject);
};
