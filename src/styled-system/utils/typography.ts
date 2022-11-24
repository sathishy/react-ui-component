import * as CSS from "csstype";
import { getAppliedCssValues, getCSSOnlyStringValueFromCSSProperties } from "./helpers";
import { TypographyProps, PartialCSSPropertiesHyphen } from "styled-system/types";
import {ThemeKeyName} from "styled-system/types"

export const typography = (props: TypographyProps) => {
  const getCSSValue = (cssPropertiesArray: string[], themeKeyName?: ThemeKeyName) =>
    getCSSOnlyStringValueFromCSSProperties(props, cssPropertiesArray, themeKeyName);

  const cssObject: PartialCSSPropertiesHyphen = {
    "font-size": getCSSValue(["fontSize"], "fontSizes") as CSS.Property.FontSize<string | 0>,
    "font-family": getCSSValue(["fontFamily"]),
    "font-weight": getCSSValue(["fontWeight"], "fontWeights") as CSS.Property.FontWeight,
    "line-height": getCSSValue(["lineHeight"]) as CSS.Property.LineHeight<string | 0>,
    "text-align": getCSSValue(["textAlign"]) as CSS.Property.TextAlign,
    "font-style": getCSSValue(["fontStyle"]),
    "letter-spacing": getCSSValue(["letterSpacing"]) as CSS.Property.LetterSpacing<string | 0>,
  };

  return getAppliedCssValues(cssObject);
};
