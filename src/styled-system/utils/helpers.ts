import { DeviceBreakPointKeys, PartialCSSPropertiesHyphen, StylesProps, ThemeKeyName } from "styled-system/types";
import { DEVICE } from "constants/mediaQueries.constants";
import { ThemeProps } from "styled-components";
import {theme} from "styles/Theme";

/**
 * returns whether a css-styled-object is empty or not
 */
export const isCSSObjectEmpty = (cssPropertiesHyphenObject?: PartialCSSPropertiesHyphen) => {
  return cssPropertiesHyphenObject && Object?.keys(cssPropertiesHyphenObject)?.length === 0;
};

export const getCSSOnlyStringValueFromCSSProperties = (props: any, cssPropertiesArray: string[], themeKeyName?: ThemeKeyName) => {
  let cssValue: string | number = "";
  cssPropertiesArray.forEach((cssProperty) => {
    const CSS_VALUE = (props as any)?.[cssProperty];
    if (typeof CSS_VALUE !== "object" && (CSS_VALUE || CSS_VALUE === 0)){
      cssValue =  themeKeyName ? (props as any)?.theme?.[themeKeyName]?.[(props as any)?.[CSS_VALUE]] : CSS_VALUE;
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
  themeKeyName?: ThemeKeyName
) => {
  let finalValue = "";
  cssValuesArray.forEach((cssPropertyKey) => {
    const VALUE = themeKeyName ? (props as any)?.theme?.[themeKeyName]?.[(props as any)?.[cssPropertyKey]?.[breakpoint]] : (props as any)?.[cssPropertyKey]?.[breakpoint];
    if (VALUE) finalValue = VALUE;
  });
  return finalValue || "";
};
