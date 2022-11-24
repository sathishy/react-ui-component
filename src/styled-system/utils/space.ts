import * as CSS from "csstype";
import { getAppliedCssValues, getCSSOnlyStringValueFromCSSProperties } from "./helpers";
import { SpaceProps, PartialCSSPropertiesHyphen } from "styled-system/types";

export const space = (props: SpaceProps) => {
  const getCSSValue = (cssPropertiesArray: string[]) =>
    getCSSOnlyStringValueFromCSSProperties(props, cssPropertiesArray);

  const cssObject: PartialCSSPropertiesHyphen = {
    // margin values
    margin: getCSSValue(["m", "margin"]) as CSS.Property.Margin<string | 0>,
    "margin-top": getCSSValue(["mt", "marginTop"]) as CSS.Property.MarginTop<string | 0>,
    "margin-right": getCSSValue(["mr", "marginRight"]) as CSS.Property.MarginRight<string | 0>,
    "margin-bottom": getCSSValue(["mb", "marginBottom"]) as CSS.Property.MarginBottom<string | 0>,
    "margin-left": getCSSValue(["ml", "marginLeft"]) as CSS.Property.MarginLeft<string | 0>,

    // padding values
    padding: getCSSValue(["p", "padding"]) as CSS.Property.Padding<string | 0>,
    "padding-top": getCSSValue(["pt", "paddingTop"]) as CSS.Property.PaddingTop<string | 0>,
    "padding-right": getCSSValue(["pr", "paddingRight"]) as CSS.Property.PaddingRight<string | 0>,
    "padding-bottom": getCSSValue(["pb", "paddingBottom"]) as CSS.Property.PaddingBottom<string | 0>,
    "padding-left": getCSSValue(["pl", "paddingLeft"]) as CSS.Property.PaddingLeft<string | 0>,
  };

  return getAppliedCssValues(cssObject);
};
