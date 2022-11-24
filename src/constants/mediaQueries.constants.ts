export enum BREAK_POINTS_ENUM {
  xxs = "xxs",
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
  xxl = "xxl",
}

export const BREAK_POINTS = {
  xxs: 320, // small mobiles
  xs: 480, // medium mobiles
  sm: 640, // potrait tablets
  md: 768, // landscape tablets
  lg: 1024, // laptops/desktops
  xl: 1200, // large desktops
  xxl: 1440, // extra-large desktops
} as const;

export const SCREENS = {
  xxs: `${BREAK_POINTS.xxs}px`,
  xs: `${BREAK_POINTS.xs}px`,
  sm: `${BREAK_POINTS.sm}px`,
  md: `${BREAK_POINTS.md}px`,
  lg: `${BREAK_POINTS.lg}px`,
  xl: `${BREAK_POINTS.xl}px`,
  xxl: `${BREAK_POINTS.xxl}px`,
} as const;

export const DEVICE = {
  xxs: `(min-width: ${SCREENS.xxs})`,
  xs: `(min-width: ${SCREENS.xs})`,
  sm: `(min-width: ${SCREENS.sm})`,
  md: `(min-width: ${SCREENS.md})`,
  lg: `(min-width: ${SCREENS.lg})`,
  xl: `(min-width: ${SCREENS.xl})`,
  xxl: `(min-width: ${SCREENS.xxl})`,
} as const;
