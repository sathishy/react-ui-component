import * as CSS from "csstype";
import { DeviceBreakPointKeys, PartialCSSPropertiesHyphen, StylesProps } from "styled-system/types";
import { getAppliedCssValues, getMediaQueryString, getBreakPointCSSValueFromArrayOfCSSProperties } from "./helpers";
import { ThemeKeyName } from "styled-system/types";
const COLORS: ThemeKeyName = "colors";
/** returns media queries based on theme and breakpoints */
export const mediaQueries = (props: StylesProps) => {
  /** returns cssPropertiesHyphenObject for a specific breakpoint */
  const getBreakPointCSSProperties = (breakpointKey: DeviceBreakPointKeys) => {
    const getResponsiveCSSPropertyValue = (stylePropsArray: any[], themeKeyName?: ThemeKeyName) => {
      return getBreakPointCSSValueFromArrayOfCSSProperties(props, stylePropsArray, breakpointKey, themeKeyName);
    };

    const CSS_PROPERTIES_HYPHEN_OBJECT: PartialCSSPropertiesHyphen = {
      /** Space */
      // margin
      margin: getResponsiveCSSPropertyValue(["m", "margin"]),
      "margin-top": getResponsiveCSSPropertyValue(["mt", "marginTop"]),
      "margin-right": getResponsiveCSSPropertyValue(["mr", "marginRight"]),
      "margin-bottom": getResponsiveCSSPropertyValue(["mb", "marginBottom"]),
      "margin-left": getResponsiveCSSPropertyValue(["ml", "marginLeft"]),
      // padding
      padding: getResponsiveCSSPropertyValue(["p", "padding"]),
      "padding-top": getResponsiveCSSPropertyValue(["pt", "paddingTop"]),
      "padding-right": getResponsiveCSSPropertyValue(["pr", "paddingRight"]),
      "padding-bottom": getResponsiveCSSPropertyValue(["pb", "paddingBottom"]),
      "padding-left": getResponsiveCSSPropertyValue(["pl", "paddingLeft"]),

      /** Layout*/
      // WidthProps
      width: getResponsiveCSSPropertyValue(["w", "width"]),
      "min-width": getResponsiveCSSPropertyValue(["minW", "minWidth"]),
      "max-width": getResponsiveCSSPropertyValue(["maxW", "maxWidth"]),
      // HeightProps
      height: getResponsiveCSSPropertyValue(["h", "height"]),
      "min-height": getResponsiveCSSPropertyValue(["minH", "minHeight"]),
      "max-height": getResponsiveCSSPropertyValue(["maxH", "maxHeight"]),
      // DisplayProps
      display: getResponsiveCSSPropertyValue(["display"]),
      // VerticalAlignProps
      "vertical-align": getResponsiveCSSPropertyValue(["verticalAlign"]),
      // OverflowProps
      overflow: getResponsiveCSSPropertyValue(["overflow"]),
      "overflow-x": getResponsiveCSSPropertyValue(["overflowX"]) as CSS.Property.OverflowX,
      "overflow-y": getResponsiveCSSPropertyValue(["overflowY"]) as CSS.Property.OverflowY,

      /** Color */
      opacity: getResponsiveCSSPropertyValue(["opacity"]),
      color: getResponsiveCSSPropertyValue(["color", "textColor"], COLORS),
      "background-color": getResponsiveCSSPropertyValue(["bgColor", "backgroundColor"], COLORS),

      /** Background */
      "background-image": getResponsiveCSSPropertyValue(["bgImg", "backgroundImage"]),
      "background-size": getResponsiveCSSPropertyValue(["bgSize", "backgroundSize"]),
      "background-position": getResponsiveCSSPropertyValue(["bgPos", "backgroundPosition"]),
      "background-repeat": getResponsiveCSSPropertyValue(["bgRepeat", "backgroundRepeat"]),
      background: getResponsiveCSSPropertyValue(["bg", "background"]),

      /** z-Index */
      "z-index": getResponsiveCSSPropertyValue(["zIndex"]) as CSS.Property.ZIndex,

      /** Position */
      top: getResponsiveCSSPropertyValue(["top"]),
      right: getResponsiveCSSPropertyValue(["right"]),
      bottom: getResponsiveCSSPropertyValue(["bottom"]),
      left: getResponsiveCSSPropertyValue(["left"]),
      position: getResponsiveCSSPropertyValue(["position", "position"]) as CSS.Property.Position,

      // GapProps
      gap: getResponsiveCSSPropertyValue(["gap"]),
      "row-gap": getResponsiveCSSPropertyValue(["rowGap"]),
      "column-gap": getResponsiveCSSPropertyValue(["columnGap"]),

      /** Flex Layout */
      "align-items": getResponsiveCSSPropertyValue(["alignItems"]),
      "align-content": getResponsiveCSSPropertyValue(["alignContent"]),
      "justify-items": getResponsiveCSSPropertyValue(["justifyItems"]),
      "justify-content": getResponsiveCSSPropertyValue(["justifyContent"]),
      "flex-wrap": getResponsiveCSSPropertyValue(["flexWrap"]) as CSS.Property.FlexWrap,
      "flex-basis": getResponsiveCSSPropertyValue(["flexBasis"]),
      "flex-direction": getResponsiveCSSPropertyValue(["flexDirection"]) as CSS.Property.FlexDirection,
      flex: getResponsiveCSSPropertyValue(["flex"]),
      "justify-self": getResponsiveCSSPropertyValue(["justifySelf"]),
      "align-self": getResponsiveCSSPropertyValue(["alignSelf"]),
      order: getResponsiveCSSPropertyValue(["order"]) as CSS.Property.Order,
      "flex-grow": getResponsiveCSSPropertyValue(["flexGrow"]) as CSS.Property.FlexGrow,
      "flex-shrink": getResponsiveCSSPropertyValue(["flexShrink"]) as CSS.Property.FlexShrink,

      /** Grid Layout */
      "grid-column": getResponsiveCSSPropertyValue(["gridColumn"]),
      "grid-row": getResponsiveCSSPropertyValue(["gridRow"]),
      "grid-auto-flow": getResponsiveCSSPropertyValue(["gridAutoFlow"]),
      "grid-auto-columns": getResponsiveCSSPropertyValue(["gridAutoColumns"]),
      "grid-auto-rows": getResponsiveCSSPropertyValue(["gridAutoRows"]),
      "grid-template-columns": getResponsiveCSSPropertyValue(["gridTemplateColumns"]),
      "grid-template-rows": getResponsiveCSSPropertyValue(["gridTemplateRows"]),
      "grid-template-areas": getResponsiveCSSPropertyValue(["gridTemplateAreas"]),
      "grid-area": getResponsiveCSSPropertyValue(["gridArea"]),

      /** Border */
      // border width
      "border-width": getResponsiveCSSPropertyValue(["borderWidth"]),
      "border-top-width": getResponsiveCSSPropertyValue(["borderTopWidth"]),
      "border-bottom-width": getResponsiveCSSPropertyValue(["borderBottomWidth"]),
      "border-left-width": getResponsiveCSSPropertyValue(["borderLeftWidth"]),
      "border-right-width": getResponsiveCSSPropertyValue(["borderRightWidth"]),
      // border style
      "border-style": getResponsiveCSSPropertyValue(["borderStyle"]),
      "border-top-style": getResponsiveCSSPropertyValue(["borderTopStyle"]) as CSS.Property.BorderTopStyle,
      "border-bottom-style": getResponsiveCSSPropertyValue(["borderBottomStyle"]) as CSS.Property.BorderBottomStyle,
      "border-left-style": getResponsiveCSSPropertyValue(["borderLeftStyle"]) as CSS.Property.BorderLeftStyle,
      "border-right-style": getResponsiveCSSPropertyValue(["borderRightStyle"]) as CSS.Property.BorderRightStyle,
      // border color
      "border-color": getResponsiveCSSPropertyValue(["borderColor"], COLORS),
      "border-top-color": getResponsiveCSSPropertyValue(["borderTopColor"], COLORS),
      "border-bottom-color": getResponsiveCSSPropertyValue(["borderBottomColor"], COLORS),
      "border-left-color": getResponsiveCSSPropertyValue(["borderLeftColor"], COLORS),
      "border-right-color": getResponsiveCSSPropertyValue(["borderRightColor"], COLORS),
      // border radius
      "border-radius": getResponsiveCSSPropertyValue(["borderRadius"]),
      "border-top-left-radius": getResponsiveCSSPropertyValue(["borderTopLeftRadius"]),
      "border-top-right-radius": getResponsiveCSSPropertyValue(["borderTopRightRadius"]),
      "border-bottom-left-radius": getResponsiveCSSPropertyValue(["borderBottomLeftRadius"]),
      "border-bottom-right-radius": getResponsiveCSSPropertyValue(["borderBottomRightRadius"]),
      // border position
      "border-top": getResponsiveCSSPropertyValue(["borderTop"]),
      "border-right": getResponsiveCSSPropertyValue(["borderRight"]),
      "border-bottom": getResponsiveCSSPropertyValue(["borderBottom"]),
      "border-left": getResponsiveCSSPropertyValue(["borderLeft"]),
      // border
      border: getResponsiveCSSPropertyValue(["border"]),

      /** Typography Props */
      "font-size": getResponsiveCSSPropertyValue(["fontSize"], "fontSizes"),
      "font-family": getResponsiveCSSPropertyValue(["fontFamily"]),
      "font-weight": getResponsiveCSSPropertyValue(["fontWeight"], "fontWeights") as CSS.Property.FontWeight,
      "line-height": getResponsiveCSSPropertyValue(["lineHeight"]),
      "text-align": getResponsiveCSSPropertyValue(["textAlign"]) as CSS.Property.TextAlign,
      "font-style": getResponsiveCSSPropertyValue(["fontStyle"]),
      "letter-spacing": getResponsiveCSSPropertyValue(["letterSpacing"]),
    };

    return CSS_PROPERTIES_HYPHEN_OBJECT;
  };

  // TODO: (optional) consume values from a constants
  /** Order is important */
  const CHRONOLOGICAL_BREAKPOINTS: DeviceBreakPointKeys[] = ["xxs", "xs", "sm", "md", "lg", "xl", "xxl"];

  let mediaQueriesForAppliedValues: string[] = [];
  CHRONOLOGICAL_BREAKPOINTS.forEach((breakPointKey) => {
    const CSS_PROPERTIES_HYPHEN_STRING = getAppliedCssValues(getBreakPointCSSProperties(breakPointKey));
    if (CSS_PROPERTIES_HYPHEN_STRING) {
      const CSS_PROPERTIES_HYPHEN_FOR_MEDIA_QUERIES = getMediaQueryString(CSS_PROPERTIES_HYPHEN_STRING, breakPointKey);
      if (CSS_PROPERTIES_HYPHEN_FOR_MEDIA_QUERIES)
        mediaQueriesForAppliedValues.push(CSS_PROPERTIES_HYPHEN_FOR_MEDIA_QUERIES);
    }
  });

  return mediaQueriesForAppliedValues?.join("") || "";
};
