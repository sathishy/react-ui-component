import { DeviceBreakPointKeys, PartialCSSPropertiesHyphen, StylesProps, ThemeKeyName } from "styled-system/types";
import { DEVICE } from "constants/mediaQueries.constants";

/**
 * returns whether a css-styled-object is empty or not
 */
export const isCSSObjectEmpty = (cssPropertiesHyphenObject?: PartialCSSPropertiesHyphen) => {
  return cssPropertiesHyphenObject && Object?.keys(cssPropertiesHyphenObject)?.length === 0;
};

/**
 * return css string with css properties hyphen
 */
export const getCSSOnlyStringValueFromCSSProperties = (
  props: any,
  cssPropertiesArray: string[],
  themeKeyName?: ThemeKeyName,
) => {
  let cssValue: string | number = "";
  cssPropertiesArray.forEach((cssProperty) => {
    const cssValueFromProp = (props as any)?.[cssProperty];
    if (typeof cssValueFromProp !== "object" && (cssValueFromProp || cssValueFromProp === 0)) {
      let cssValueFromTheme = "";
      if (themeKeyName) {
        /** return only if value is present in theme object */
        cssValueFromTheme = (props as any)?.theme?.[themeKeyName]?.[(props as any)?.[cssValueFromProp]];
      }
      cssValue = cssValueFromTheme || cssValueFromProp;
    }
  });
  return cssValue;
};

/**
 * iterates over keys of cssPropertiesHyphenObject
 * returns string of applied css
 *
 * ex: "margin-bottom: 10px;padding-top: 10px;"
 */
export const getAppliedCssValues = (cssPropertiesHyphenObject?: PartialCSSPropertiesHyphen) => {
  let appliedCssValues: string[] = []; // ex: ['margin-bottom: 10px;', 'padding-top: 10px;']
  if (
    cssPropertiesHyphenObject &&
    typeof cssPropertiesHyphenObject === "object" &&
    !isCSSObjectEmpty(cssPropertiesHyphenObject)
  ) {
    Object?.entries(cssPropertiesHyphenObject).forEach(([cssKey, cssValue]) => {
      if (cssValue || cssValue === 0) {
        appliedCssValues.push(`${cssKey}: ${cssValue};`);
      }
    });
  }

  return appliedCssValues.join("") || "";
};

/** @returns {string} `@media screen and ${(DEVICE as any)?.[breakPointKey]}{${cssValues}};` */
export const getMediaQueryString = (cssValues: string, breakPointKey: DeviceBreakPointKeys) => {
  if ((DEVICE as any)?.[breakPointKey] && cssValues) {
    return `@media screen and ${(DEVICE as any)?.[breakPointKey]}{${cssValues}};`;
  }
  return "";
};

/** returns css value of a breakpoint */
export const getBreakPointCSSValueFromArrayOfCSSProperties = (
  props: StylesProps,
  cssValuesArray: any[],
  breakpoint: DeviceBreakPointKeys,
  themeKeyName?: ThemeKeyName,
) => {
  let finalValue = "";
  for (let cssPropertyKey of cssValuesArray) {
    let cssValueFromTheme = "";
    const cssValueFromProp = (props as any)?.[cssPropertyKey]?.[breakpoint];
    if (themeKeyName) {
      /** return only if value is present in theme object */
      cssValueFromTheme = (props as any)?.theme?.[themeKeyName]?.[(props as any)?.[cssPropertyKey]?.[breakpoint]];
    }
    finalValue = cssValueFromTheme || cssValueFromProp;
    /** when cssValue is present */
    if (finalValue) break;
  }
  return finalValue || "";
};
