import * as CSS from "csstype";
import { getAppliedCssValues, getCSSOnlyStringValueFromCSSProperties } from "./helpers";
import { BorderProps, PartialCSSPropertiesHyphen } from "styled-system/types";

export const border = (props: BorderProps) => {
  const getCSSValue = (cssPropertiesArray: string[]) =>
    getCSSOnlyStringValueFromCSSProperties(props, cssPropertiesArray);

  const cssObject: PartialCSSPropertiesHyphen = {
    // border width
    "border-width": getCSSValue(["borderWidth"]) as CSS.Property.BorderWidth<string | 0>,
    "border-top-width": getCSSValue(["borderTopWidth"]) as CSS.Property.BorderTopWidth<string | 0>,
    "border-bottom-width": getCSSValue(["borderBottomWidth"]) as CSS.Property.BorderBottomWidth<string | 0>,
    "border-left-width": getCSSValue(["borderLeftWidth"]) as CSS.Property.BorderLeftWidth<string | 0>,
    "border-right-width": getCSSValue(["borderRightWidth"]) as CSS.Property.BorderRightWidth<string | 0>,
    // border style
    "border-style": getCSSValue(["borderStyle"]),
    "border-top-style": getCSSValue(["borderTopStyle"]) as CSS.Property.BorderTopStyle,
    "border-bottom-style": getCSSValue(["borderBottomStyle"]) as CSS.Property.BorderBottomStyle,
    "border-left-style": getCSSValue(["borderLeftStyle"]) as CSS.Property.BorderLeftStyle,
    "border-right-style": getCSSValue(["borderRightStyle"]) as CSS.Property.BorderRightStyle,
    // border color
    "border-color": getCSSValue(["borderColor"]),
    "border-top-color": getCSSValue(["borderTopColor"]),
    "border-bottom-color": getCSSValue(["borderBottomColor"]),
    "border-left-color": getCSSValue(["borderLeftColor"]),
    "border-right-color": getCSSValue(["borderRightColor"]),
    // border radius
    "border-radius": getCSSValue(["borderRadius"]) as CSS.Property.BorderRadius<string | 0>,
    "border-top-left-radius": getCSSValue(["borderTopLeftRadius"]) as CSS.Property.BorderTopLeftRadius<string | 0>,
    "border-top-right-radius": getCSSValue(["borderTopRightRadius"]) as CSS.Property.BorderTopRightRadius<string | 0>,
    "border-bottom-left-radius": getCSSValue(["borderBottomLeftRadius"]) as CSS.Property.BorderBottomLeftRadius<
      string | 0
    >,
    "border-bottom-right-radius": getCSSValue(["borderBottomRightRadius"]) as CSS.Property.BorderBottomRightRadius<
      string | 0
    >,
    // border position
    "border-top": getCSSValue(["borderTop"]) as CSS.Property.BorderTop<string | 0>,
    "border-right": getCSSValue(["borderRight"]) as CSS.Property.BorderRight<string | 0>,
    "border-bottom": getCSSValue(["borderBottom"]) as CSS.Property.BorderBottom<string | 0>,
    "border-left": getCSSValue(["borderLeft"]) as CSS.Property.BorderLeft<string | 0>,
    // border
    border: getCSSValue(["border"]),
  };

  return getAppliedCssValues(cssObject);
};
