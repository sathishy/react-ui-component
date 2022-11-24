import * as CSS from "csstype";
import { getAppliedCssValues, getCSSOnlyStringValueFromCSSProperties } from "./helpers";
import { GridProps, PartialCSSPropertiesHyphen } from "styled-system/types";

export const grid = (props: GridProps) => {
  const getCSSValue = (cssPropertiesArray: string[]) =>
    getCSSOnlyStringValueFromCSSProperties(props, cssPropertiesArray);

  const cssObject: PartialCSSPropertiesHyphen = {
    "grid-column": getCSSValue(["gridColumn"]) as CSS.Property.GridColumn,
    "grid-row": getCSSValue(["gridRow"]) as CSS.Property.GridRow,
    "grid-auto-flow": getCSSValue(["gridAutoFlow"]),
    "grid-auto-columns": getCSSValue(["gridAutoColumns"]) as CSS.Property.GridAutoColumns<string | 0>,
    "grid-auto-rows": getCSSValue(["gridAutoRows"]) as CSS.Property.GridAutoRows<string | 0>,
    "grid-template-columns": getCSSValue(["gridTemplateColumns"]) as CSS.Property.GridTemplateColumns<string | 0>,
    "grid-template-rows": getCSSValue(["gridTemplateRows"]) as CSS.Property.GridTemplateRows<string | 0>,
    "grid-template-areas": getCSSValue(["gridTemplateAreas"]),
    "grid-area": getCSSValue(["gridArea"]) as CSS.Property.GridArea,
    gap: getCSSValue(["gap"]) as CSS.Property.Gap<string | 0>,
    "row-gap": getCSSValue(["rowGap"]) as CSS.Property.RowGap<string | 0>,
    "column-gap": getCSSValue(["columnGap"]) as CSS.Property.ColumnGap<string | 0>,
  };

  return getAppliedCssValues(cssObject);
};
