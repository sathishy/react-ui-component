import * as CSS from "csstype";
import { getAppliedCssValues, getCSSOnlyStringValueFromCSSProperties } from "./helpers";
import { FlexboxProps, PartialCSSPropertiesHyphen } from "styled-system/types";

export const flexbox = (props: FlexboxProps) => {
  const getCSSValue = (cssPropertiesArray: string[]) =>
    getCSSOnlyStringValueFromCSSProperties(props, cssPropertiesArray);

  const cssObject: PartialCSSPropertiesHyphen = {
    "align-items": getCSSValue(["alignItems"]),
    "align-content": getCSSValue(["alignContent"]),
    "justify-items": getCSSValue(["justifyItems"]),
    "justify-content": getCSSValue(["justifyContent"]),
    "flex-wrap": getCSSValue(["flexWrap"]) as CSS.Property.FlexWrap,
    "flex-basis": getCSSValue(["flexBasis"]) as CSS.Property.FlexBasis<string | 0>,
    "flex-direction": getCSSValue(["flexDirection"]) as CSS.Property.FlexDirection,
    flex: getCSSValue(["flex"]) as CSS.Property.Flex<string | 0>,
    "justify-self": getCSSValue(["justifySelf"]),
    "align-self": getCSSValue(["alignSelf"]),
    order: getCSSValue(["order"]) as CSS.Property.Order,
    "flex-grow": getCSSValue(["flexGrow"]) as CSS.Property.FlexGrow,
    "flex-shrink": getCSSValue(["flexShrink"]) as CSS.Property.FlexShrink,
    gap: getCSSValue(["gap"]) as CSS.Property.Gap<string | 0>,
    "row-gap": getCSSValue(["rowGap"]) as CSS.Property.RowGap<string | 0>,
    "column-gap": getCSSValue(["columnGap"]) as CSS.Property.ColumnGap<string | 0>,
  };

  return getAppliedCssValues(cssObject);
};
