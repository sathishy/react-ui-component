import * as CSS from "csstype";
import { getAppliedCssValues, getCSSOnlyStringValueFromCSSProperties } from "./helpers";
import { LayoutProps, PartialCSSPropertiesHyphen } from "styled-system/types";

export const layout = (props: LayoutProps) => {
  const getCSSValue = (cssPropertiesArray: string[]) =>
    getCSSOnlyStringValueFromCSSProperties(props, cssPropertiesArray);

  const cssObject: PartialCSSPropertiesHyphen = {
    // width
    width: getCSSValue(["w", "width"]) as CSS.Property.Width<string | 0>,
    "min-width": getCSSValue(["minW", "minWidth"]) as CSS.Property.MinWidth<string | 0>,
    "max-width": getCSSValue(["maxW", "maxWidth"]) as CSS.Property.MaxWidth<string | 0>,
    // height
    height: getCSSValue(["h", "height"]) as CSS.Property.Height<string | 0>,
    "min-height": getCSSValue(["minH", "minHeight"]) as CSS.Property.MinHeight<string | 0>,
    "max-height": getCSSValue(["maxH", "maxHeight"]) as CSS.Property.MaxHeight<string | 0>,
    // display
    display: getCSSValue(["display"]),
    // vertical align
    "vertical-align": getCSSValue(["verticalAlign"]) as CSS.Property.VerticalAlign<string | 0>,
    // overflow
    overflow: getCSSValue(["overflow"]),
    "overflow-x": getCSSValue(["overflowX"]) as CSS.Property.OverflowX,
    "overflow-y": getCSSValue(["overflowY"]) as CSS.Property.OverflowY,
  };

  return getAppliedCssValues(cssObject);
};
