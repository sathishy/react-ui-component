import { StylesProps } from "styled-system/types";
import { COLORS, PACKAGE_STYLES } from "styles/package.styles";

export const DEFAULT_STYLES: { [key: string]: StylesProps } = {
  backgroundContainer: {
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    height: "auto",
    padding: "0 0.8rem", //0 14px
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    opacity: 1,
    zIndex: 999,
    background: "#00000080",
  },

  modalContainer: {
    position: "relative",
    maxW: "500px",
    w: "60%",
    h: "max-content",
    background: COLORS.white_1,
    borderRadius: "8px",
    margin: "10px auto",
  },
  modalSubContainer: {
    // bgColor: COLORS.white_1,
    // borderRadius: "6px",
  },
  modalHeader: {
    padding: "15px",
    textAlign: "center",
  },
  modalBody: {
    // position: "relative",
    // padding: "15px",
  },
  modalFooter: {
    position: "absolute",
    padding: "15px",
    width: "100%",
    bottom: "0",
    textAlign: "center",
    left: "0px",
  },
};
