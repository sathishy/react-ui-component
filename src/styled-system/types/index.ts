import * as CSS from "csstype";
import { BREAK_POINTS_ENUM, DEVICE } from "constants/mediaQueries.constants";
import { theme } from "styles/Theme";

export type PartialCSSPropertiesHyphen = Partial<CSS.PropertiesHyphen>;

export type ResponsiveValue<TObj> = TObj | { [keys in BREAK_POINTS_ENUM]?: TObj };

export type ThemeKeyName = keyof typeof theme;

// TODO: check documentation comments

/**
 * Space
 */
export interface SpaceProps {
  // margin
  /** Margin on top, left, bottom and right */
  m?: ResponsiveValue<CSS.Properties["margin"]>;
  /** Margin on top, left, bottom and right */
  margin?: ResponsiveValue<CSS.Properties["margin"]>;
  /** Margin on top */
  mt?: ResponsiveValue<CSS.Properties["marginTop"]>;
  /** Margin on top */
  marginTop?: ResponsiveValue<CSS.Properties["marginTop"]>;
  /** Margin on right */
  mr?: ResponsiveValue<CSS.Properties["marginRight"]>;
  /** Margin on right */
  marginRight?: ResponsiveValue<CSS.Properties["marginRight"]>;
  /** Margin on bottom */
  mb?: ResponsiveValue<CSS.Properties["marginBottom"]>;
  /** Margin on bottom */
  marginBottom?: ResponsiveValue<CSS.Properties["marginBottom"]>;
  /** Margin on left */
  ml?: ResponsiveValue<CSS.Properties["marginLeft"]>;
  /** Margin on left */
  marginLeft?: ResponsiveValue<CSS.Properties["marginLeft"]>;

  // padding
  /** Padding on top, left, bottom and right */
  p?: ResponsiveValue<CSS.Properties["padding"]>;
  /** Padding on top, left, bottom and right */
  padding?: ResponsiveValue<CSS.Properties["padding"]>;
  /** Padding on top */
  pt?: ResponsiveValue<CSS.Properties["paddingTop"]>;
  /** Padding on top */
  paddingTop?: ResponsiveValue<CSS.Properties["paddingTop"]>;
  /** Padding on right */
  pr?: ResponsiveValue<CSS.Properties["paddingRight"]>;
  /** Padding on right */
  paddingRight?: ResponsiveValue<CSS.Properties["paddingRight"]>;
  /** Padding on bottom */
  pb?: ResponsiveValue<CSS.Properties["paddingBottom"]>;
  /** Padding on bottom */
  paddingBottom?: ResponsiveValue<CSS.Properties["paddingBottom"]>;
  /** Padding on left */
  pl?: ResponsiveValue<CSS.Properties["paddingLeft"]>;
  /** Padding on left */
  paddingLeft?: ResponsiveValue<CSS.Properties["paddingLeft"]>;
}

/**
 * Width
 */
export interface WidthProps {
  /** Width Property */
  w?: ResponsiveValue<CSS.Properties["width"]>;
  /** Width Property */
  width?: ResponsiveValue<CSS.Properties["width"]>;
  /** Min-Width Property */
  minW?: ResponsiveValue<CSS.Properties["minWidth"]>;
  /** Min-Width Property */
  minWidth?: ResponsiveValue<CSS.Properties["minWidth"]>;
  /** Max-Width Property */
  maxW?: ResponsiveValue<CSS.Properties["maxWidth"]>;
  /** Max-Width Property */
  maxWidth?: ResponsiveValue<CSS.Properties["maxWidth"]>;
}

/**
 * Height
 */
export interface HeightProps {
  /** Height Property */
  h?: ResponsiveValue<CSS.Properties["height"]>;
  /** Height Property */
  height?: ResponsiveValue<CSS.Properties["height"]>;
  /** Min-Height Property */
  minH?: ResponsiveValue<CSS.Properties["minHeight"]>;
  /** Min-Height Property */
  minHeight?: ResponsiveValue<CSS.Properties["minHeight"]>;
  /** Max-Height Property */
  maxH?: ResponsiveValue<CSS.Properties["maxHeight"]>;
  /** Max-Height Property */
  maxHeight?: ResponsiveValue<CSS.Properties["maxHeight"]>;
}

/**
 * Layout
 */
export interface DisplayProps {
  display?: ResponsiveValue<CSS.Properties["display"]>;
}

export interface VerticalAlignProps {
  verticalAlign?: ResponsiveValue<CSS.Properties["verticalAlign"]>;
}

export interface OverflowProps {
  /**
   * The overflow CSS property sets what to do when an element's content is too big to fit in its block
   * formatting context. It is a shorthand for overflow-x and overflow-y.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow)
   */
  overflow?: ResponsiveValue<CSS.Properties["overflow"]>;
  /**
   * The overflow-x CSS property sets what shows when content overflows a block-level element's left
   * and right edges. This may be nothing, a scroll bar, or the overflow content.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-x)
   */
  overflowX?: ResponsiveValue<CSS.Properties["overflowX"]>;
  /**
   * The overflow-y CSS property sets what shows when content overflows a block-level element's top
   * and bottom edges. This may be nothing, a scroll bar, or the overflow content.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-y)
   */
  overflowY?: ResponsiveValue<CSS.Properties["overflowY"]>;
}

export interface LayoutProps extends WidthProps, HeightProps, DisplayProps, VerticalAlignProps, OverflowProps {}

/**
 * Color
 */
export interface ColorProps {
  /**
   * Color palettes can be configured with the ThemeProvider to use keys as prop values, with support for dot notation.
   * Array values are converted into responsive values.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
   */
  textColor?: ResponsiveValue<CSS.Properties["color"]>;
  color?: ResponsiveValue<CSS.Properties["color"]>;
  /**
   * Color palettes can be configured with the ThemeProvider to use keys as prop values, with support for dot notation.
   * Array values are converted into responsive values.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color)
   */
  bgColor?: ResponsiveValue<CSS.Properties["backgroundColor"]>;
  backgroundColor?: ResponsiveValue<CSS.Properties["backgroundColor"]>;
  /**
   * The opacity CSS property sets the transparency of an element or the degree to which content
   * behind an element is visible.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity)
   */
  opacity?: ResponsiveValue<CSS.Properties["opacity"]>;
}

/**
 * Background
 */
export interface BackgroundProps {
  /**
   * The background-image CSS property sets one or more background images on an element.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background-image)
   */
  bgImg?: ResponsiveValue<CSS.Properties["backgroundImage"]>;
  backgroundImage?: ResponsiveValue<CSS.Properties["backgroundImage"]>;
  /**
   * The background-size CSS property sets the size of the element's background image. The
   * image can be left to its natural size, stretched, or constrained to fit the available space.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size)
   */
  bgSize?: ResponsiveValue<CSS.Properties["backgroundSize"]>;
  backgroundSize?: ResponsiveValue<CSS.Properties["backgroundSize"]>;
  /**
   * The background-position CSS property sets the initial position for each background image. The
   * position is relative to the position layer set by background-origin.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position)
   */
  bgPos?: ResponsiveValue<CSS.Properties["backgroundPosition"]>;
  backgroundPosition?: ResponsiveValue<CSS.Properties["backgroundPosition"]>;
  /**
   * The background-repeat CSS property sets how background images are repeated. A background
   * image can be repeated along the horizontal and vertical axes, or not repeated at all.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat)
   */
  bgRepeat?: ResponsiveValue<CSS.Properties["backgroundRepeat"]>;
  backgroundRepeat?: ResponsiveValue<CSS.Properties["backgroundRepeat"]>;
  /**
   * The background shorthand CSS property sets all background style properties at once,
   * such as color, image, origin and size, repeat method, and others.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background)
   */
  bg?: ResponsiveValue<CSS.Properties["background"]>;
  background?: ResponsiveValue<CSS.Properties["background"]>;
}

/**
 * z-Index
 */
export interface ZIndexProps {
  /**
   * The z-index CSS property sets the z-order of a positioned element and its descendants or
   * flex items. Overlapping elements with a larger z-index cover those with a smaller one.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)
   */
  zIndex?: ResponsiveValue<CSS.Properties["zIndex"]>;
}

/**
 * Position
 */
export interface PositionProps extends ZIndexProps {
  /**
   * The top CSS property participates in specifying the vertical position of a
   * positioned element. It has no effect on non-positioned elements.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/top)
   */
  top?: ResponsiveValue<CSS.Properties["top"]>;
  /**
   * The right CSS property participates in specifying the horizontal position of a
   * positioned element. It has no effect on non-positioned elements.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/right)
   */
  right?: ResponsiveValue<CSS.Properties["right"]>;
  /**
   * The bottom CSS property participates in specifying the vertical position of a
   * positioned element. It has no effect on non-positioned elements.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/top)
   */
  bottom?: ResponsiveValue<CSS.Properties["bottom"]>;
  /**
   * The left CSS property participates in specifying the horizontal position
   * of a positioned element. It has no effect on non-positioned elements.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/left)
   */
  left?: ResponsiveValue<CSS.Properties["left"]>;
  /**
   * The position CSS property specifies how an element is positioned in a document.
   * The top, right, bottom, and left properties determine the final location of positioned elements.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
   */
  pos?: ResponsiveValue<CSS.Properties["position"]>;
  position?: ResponsiveValue<CSS.Properties["position"]>;
}

export interface GapProps {
  /**
   * The gap CSS property sets the gaps (gutters) between rows and columns.
   * It is a shorthand for row-gap and column-gap.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/gap)
   */
  gap?: ResponsiveValue<CSS.Properties["gap"]>;
  /**
   * The row-gap CSS property sets the size of the gap (gutter) between an element's rows.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap)
   */
  rowGap?: ResponsiveValue<CSS.Properties["rowGap"]>;
  /**
   * The column-gap CSS property sets the size of the gap (gutter) between an element's columns.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap)
   */
  columnGap?: ResponsiveValue<CSS.Properties["columnGap"]>;
}

/**
 * Flex Layout
 * A convenience style group containing props related to flexbox.
 *
 * - String values are passed as raw CSS values.
 * - Array values are converted into responsive values.
 */
export interface FlexboxProps extends GapProps {
  /**
   * The CSS align-items property sets the align-self value on all direct children as a group. The align-self
   * property sets the alignment of an item within its containing block.
   *
   * In Flexbox it controls the alignment of items on the Cross Axis, in Grid Layout it controls the alignment
   * of items on the Block Axis within their grid area.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)
   */
  alignItems?: ResponsiveValue<CSS.Properties["alignItems"]>;
  /**
   * The CSS align-content property sets how the browser distributes space between and around content items
   * along the cross-axis of a flexbox container, and the main-axis of a grid container.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content)
   */
  alignContent?: ResponsiveValue<CSS.Properties["alignContent"]>;
  /**
   * The CSS justify-items property defines the default justify-self for all items of the box, giving them all
   * a default way of justifying each box along the appropriate axis.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items)
   */
  justifyItems?: ResponsiveValue<CSS.Properties["justifyItems"]>;
  /**
   * The CSS justify-content property defines how the browser distributes space between and around content items
   * along the main-axis of a flex container, and the inline axis of a grid container.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)
   */
  justifyContent?: ResponsiveValue<CSS.Properties["justifyContent"]>;
  /**
   * The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines.
   * If wrapping is allowed, it sets the direction that lines are stacked.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap)
   */
  flexWrap?: ResponsiveValue<CSS.Properties["flexWrap"]>;
  /**
   * he flex-basis CSS property sets the initial main size of a flex item.
   * It sets the size of the content box unless otherwise set with box-sizing.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis)
   */
  flexBasis?: ResponsiveValue<CSS.Properties["flexBasis"]>;
  /**
   * The flex-direction CSS property specifies how flex items are placed in the flex container defining the main
   * axis and the direction (normal or reversed).
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction)
   */
  flexDirection?: ResponsiveValue<CSS.Properties["flexDirection"]>;
  /**
   * The flex CSS property specifies how a flex item will grow or shrink so as to fit the space available in
   * its flex container. This is a shorthand property that sets flex-grow, flex-shrink, and flex-basis.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)
   */
  flex?: ResponsiveValue<CSS.Properties["flex"]>;
  /**
   * The CSS justify-self property set the way a box is justified inside its alignment container along
   * the appropriate axis.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self)
   */
  justifySelf?: ResponsiveValue<CSS.Properties["justifySelf"]>;
  /**
   * The align-self CSS property aligns flex items of the current flex line overriding the align-items value.
   *
   * If any of the item's cross-axis margin is set to auto, then align-self is ignored. In Grid layout align-self
   * aligns the item inside the grid area.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self)
   */
  alignSelf?: ResponsiveValue<CSS.Properties["alignSelf"]>;
  /**
   * The order CSS property sets the order to lay out an item in a flex or grid container. Items in a container
   * are sorted by ascending order value and then by their source code order.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/order)
   */
  order?: ResponsiveValue<CSS.Properties["order"]>;
  /**
   * The flex-grow CSS property sets the flex grow factor of a flex item main size. It specifies how much of the
   * remaining space in the flex container should be assigned to the item (the flex grow factor).
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow)
   */
  flexGrow?: ResponsiveValue<CSS.Properties["flexGrow"]>;
  /**
   * The flex-shrink CSS property sets the flex shrink factor of a flex item. If the size of all flex items is larger
   * than the flex container, items shrink to fit according to flex-shrink.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink)
   */
  flexShrink?: ResponsiveValue<CSS.Properties["flexShrink"]>;
}

/**
 * Grid Layout
 * A convenience style group containing props related to grid.
 *
 * - String values are passed as raw CSS values.
 * - Array values are converted into responsive values.
 */
export interface GridProps extends GapProps {
  /**
   * The grid-column CSS property is a shorthand property for grid-column-start and grid-column-end specifying
   * a grid item's size and location within the grid column by contributing a line, a span, or nothing (automatic)
   * to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column)
   */
  gridColumn?: ResponsiveValue<CSS.Properties["gridColumn"]>;
  /**
   * The grid-row CSS property is a shorthand property for grid-row-start and grid-row-end specifying a grid item’s
   * size and location within the grid row by contributing a line, a span, or nothing (automatic) to its grid
   * placement, thereby specifying the inline-start and inline-end edge of its grid area.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row)
   */
  gridRow?: ResponsiveValue<CSS.Properties["gridRow"]>;
  /**
   * The grid-auto-flow CSS property controls how the auto-placement algorithm works, specifying exactly
   * how auto-placed items get flowed into the grid.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow)
   */
  gridAutoFlow?: ResponsiveValue<CSS.Properties["gridAutoFlow"]>;
  /**
   * The grid-auto-columns CSS property specifies the size of an implicitly-created grid column track.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns)
   */
  gridAutoColumns?: ResponsiveValue<CSS.Properties["gridAutoColumns"]>;
  /**
   * The grid-auto-rows CSS property specifies the size of an implicitly-created grid row track.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows)
   */
  gridAutoRows?: ResponsiveValue<CSS.Properties["gridAutoRows"]>;
  /**
   * The grid-template-columns CSS property defines the line names and track sizing functions of the grid columns.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns)
   */
  gridTemplateColumns?: ResponsiveValue<CSS.Properties["gridTemplateColumns"]>;
  /**
   * The grid-template-rows CSS property defines the line names and track sizing functions of the grid rows.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/row-template-rows)
   */
  gridTemplateRows?: ResponsiveValue<CSS.Properties["gridTemplateRows"]>;
  /**
   * The grid-template-areas CSS property specifies named grid areas.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas)
   */
  gridTemplateAreas?: ResponsiveValue<CSS.Properties["gridTemplateAreas"]>;
  /**
   * The grid-area CSS property is a shorthand property for grid-row-start, grid-column-start, grid-row-end
   * and grid-column-end, specifying a grid item’s size and location within the grid row by contributing a line,
   * a span, or nothing (automatic) to its grid placement, thereby specifying the edges of its grid area.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area)
   */
  gridArea?: ResponsiveValue<CSS.Properties["gridArea"]>;
}

/**
 * Border
 */

export interface BorderWidthProps {
  /**
   * The border-width shorthand CSS property sets the width of all sides of an element's border.
   *
   * [MDN * reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-width)
   */
  borderWidth?: ResponsiveValue<CSS.Properties["borderWidth"]>;
  /**
   * The border-top-width CSS property sets the width of the top border of an element.
   *
   * [MDN * reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-width)
   */
  borderTopWidth?: ResponsiveValue<CSS.Properties["borderTopWidth"]>;
  /**
   * The border-bottom-width CSS property sets the width of the bottom border of an element.
   *
   * [MDN * reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-width)
   */
  borderBottomWidth?: ResponsiveValue<CSS.Properties["borderBottomWidth"]>;
  /**
   * The border-left-width CSS property sets the width of the left border of an element.
   *
   * [MDN * reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-width)
   */
  borderLeftWidth?: ResponsiveValue<CSS.Properties["borderLeftWidth"]>;
  /**
   * The border-right-width CSS property sets the width of the right border of an element.
   *
   * [MDN * reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-width)
   */
  borderRightWidth?: ResponsiveValue<CSS.Properties["borderRightWidth"]>;
}

export interface BorderStyleProps {
  /**
   * The border-style shorthand CSS property sets the style of all sides of an element's border.
   *
   * [MDN * reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style)
   */
  borderStyle?: ResponsiveValue<CSS.Properties["borderStyle"]>;
  /**
   * The border-top-style CSS property sets the line style of an element's top border.
   *
   * [MDN * reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-style)
   */
  borderTopStyle?: ResponsiveValue<CSS.Properties["borderTopStyle"]>;
  /**
   * The border-bottom-style CSS property sets the line style of an element's bottom border.
   *
   * [MDN * reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-style)
   */
  borderBottomStyle?: ResponsiveValue<CSS.Properties["borderBottomStyle"]>;
  /**
   * The border-left-style CSS property sets the line style of an element's left border.
   *
   * [MDN * reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-style)
   */
  borderLeftStyle?: ResponsiveValue<CSS.Properties["borderLeftStyle"]>;
  /**
   * The border-right-style CSS property sets the line style of an element's right border.
   *
   * [MDN * reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-style)
   */
  borderRightStyle?: ResponsiveValue<CSS.Properties["borderRightStyle"]>;
}

export interface BorderColorProps {
  /**
   * The border-color shorthand CSS property sets the color of all sides of an element's border.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color)
   */
  borderColor?: ResponsiveValue<CSS.Properties["borderColor"]>;
  /**
   * The border-top-color CSS property sets the color of an element's top border. It can also be set with the shorthand CSS properties border-color or border-top.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-color)
   */
  borderTopColor?: ResponsiveValue<CSS.Properties["borderTopColor"]>;
  /**
   * The border-bottom-color CSS property sets the color of an element's bottom border. It can also be set with the shorthand CSS properties border-color or border-bottom.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-color)
   */
  borderBottomColor?: ResponsiveValue<CSS.Properties["borderBottomColor"]>;
  /**
   * The border-left-color CSS property sets the color of an element's left border. It can also be set with the shorthand CSS properties border-color or border-left.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-color)
   */
  borderLeftColor?: ResponsiveValue<CSS.Properties["borderLeftColor"]>;
  /**
   * The border-right-color CSS property sets the color of an element's right border. It can also be set with the shorthand CSS properties border-color or border-right.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-color)
   */
  borderRightColor?: ResponsiveValue<CSS.Properties["borderRightColor"]>;
}

export interface BorderRadiusProps {
  /**
   * The border-radius CSS property rounds the corners of an element's outer border edge. You can set a single
   * radius to make circular corners, or two radii to make elliptical corners.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius)
   */
  borderRadius?: ResponsiveValue<CSS.Properties["borderRadius"]>;
  /**
   * The border-top-left-radius CSS property rounds the top-left corner of an element.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-left-radius)
   */
  borderTopLeftRadius?: ResponsiveValue<CSS.Properties["borderTopLeftRadius"]>;
  /**
   * The border-top-right-radius CSS property rounds the top-right corner of an element.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-right-radius)
   */
  borderTopRightRadius?: ResponsiveValue<CSS.Properties["borderTopRightRadius"]>;
  /**
   * The border-bottom-left-radius CSS property rounds the bottom-left corner of an element.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-left-radius)
   */
  borderBottomLeftRadius?: ResponsiveValue<CSS.Properties["borderBottomLeftRadius"]>;
  /**
   * The border-bottom-right-radius CSS property rounds the bottom-right corner of an element.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius)
   */
  borderBottomRightRadius?: ResponsiveValue<CSS.Properties["borderBottomRightRadius"]>;
}

export interface BorderPositionProps {
  /**
   * The border-top CSS property is a shorthand that sets the values of border-top-width, border-top-style,
   * and border-top-color. These properties describe an element's top border.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top)
   */
  borderTop?: ResponsiveValue<CSS.Properties["borderTop"]>;
  /**
   * The border-right CSS property is a shorthand that sets border-right-width, border-right-style,
   * and border-right-color. These properties set an element's right border.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right)
   */
  borderRight?: ResponsiveValue<CSS.Properties["borderRight"]>;
  /**
   * The border-bottom CSS property sets an element's bottom border. It's a shorthand for
   * border-bottom-width, border-bottom-style and border-bottom-color.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom)
   */
  borderBottom?: ResponsiveValue<CSS.Properties["borderBottom"]>;
  /**
   * The border-left CSS property is a shorthand that sets the values of border-left-width,
   * border-left-style, and border-left-color. These properties describe an element's left border.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left)
   */
  borderLeft?: ResponsiveValue<CSS.Properties["borderLeft"]>;
}

export interface BorderProps
  extends BorderWidthProps,
    BorderStyleProps,
    BorderColorProps,
    BorderRadiusProps,
    BorderPositionProps {
  /**
   * The border CSS property sets an element's border. It's a shorthand for border-width, border-style,
   * and border-color.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border)
   */
  border?: ResponsiveValue<CSS.Properties["border"]>;
}

/**
 * Typography Props
 * A convenience style group containing props related to typography such as fontFamily, fontSize, fontWeight, etc.
 *
 * - String values are passed as raw CSS values.
 * - Array values are converted into responsive values.
 */
export interface TypographyProps {
  /**
   * The fontSize utility parses a component's `fontSize` prop and converts it into a CSS font-size declaration.
   *
   * - Numbers from 0-8 (or `theme.fontSizes.length`) are converted to values on the [font size scale](#default-theme).
   * - Numbers greater than `theme.fontSizes.length` are converted to raw pixel values.
   * - String values are passed as raw CSS values.
   * - And array values are converted into responsive values.
   *
   */
  fontSize?: ResponsiveValue<CSS.Properties["fontSize"]>;
  /**
   * The font-family CSS property specifies a prioritized list of one or more font family names and/or generic family names for the selected element.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family)
   */
  fontFamily?: ResponsiveValue<CSS.Properties["fontFamily"]>;
  /**
   * The font-weight CSS property specifies the weight (or boldness) of the font.
   *
   * The font weights available to you will depend on the font-family you are using. Some fonts are only available in normal and bold.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight)
   */
  fontWeight?: ResponsiveValue<CSS.Properties["fontWeight"]>;
  /**
   * The line-height CSS property sets the amount of space used for lines, such as in text. On block-level elements,
   * it specifies the minimum height of line boxes within the element.
   *
   * On non-replaced inline elements, it specifies the height that is used to calculate line box height.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)
   */
  lineHeight?: ResponsiveValue<CSS.Properties["lineHeight"]>;
  /**
   * The text-align CSS property specifies the horizontal alignment of an inline or table-cell box.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)
   */
  textAlign?: ResponsiveValue<CSS.Properties["textAlign"]>;
  /**
   * The font-style CSS property specifies whether a font should be styled with a normal, italic,
   * or oblique face from its font-family.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style)
   */
  fontStyle?: ResponsiveValue<CSS.Properties["fontStyle"]>;
  /**
   * The letter-spacing CSS property sets the spacing behavior between text characters.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing)
   */
  letterSpacing?: ResponsiveValue<CSS.Properties["letterSpacing"]>;

}

/**
 * contains all style props
 */
export interface StylesProps
  extends SpaceProps,
    ColorProps,
    TypographyProps,
    LayoutProps,
    FlexboxProps,
    GridProps,
    BackgroundProps,
    BorderProps,
    PositionProps {}

export type DeviceBreakPointKeys = keyof typeof DEVICE;
