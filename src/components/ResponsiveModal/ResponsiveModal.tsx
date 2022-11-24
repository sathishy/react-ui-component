import React from "react";
import { Box, Button } from "styled-system/primitives";
import { BoxProps } from "styled-system/primitives/Box";
import { StylesProps } from "styled-system/types";
import { DEFAULT_STYLES } from "./responsiveModal.styles";

export type elementType = string | React.ReactNode;

export interface ModalProps extends BoxProps {
  show: boolean;
  handleClose: () => void;
  title?: elementType;
  closeIcon?: elementType;
  modalHeader?: elementType;
  modalBody?: elementType;
  modalFooter?: elementType;
  backgroundStyles?: BoxProps;
}

export const Modal = (props: ModalProps) => {
  const {
    show,
    handleClose,
    closeIcon,
    title,
    modalHeader,
    modalBody,
    modalFooter,
    backgroundStyles,
    ...remainingProps
  } = props;
  return (
    <>
      {show && (
        <Box {...DEFAULT_STYLES.backgroundContainer} {...backgroundStyles}>
          <Box {...DEFAULT_STYLES.modalContainer} {...remainingProps}>
            <Box border={"0"} bg={"inherit"} position={"absolute"} top={"0"} right={"0"} margin={"0.625rem"}>
              {props?.closeIcon || (
                <Button border={"0"} bg={"inherit"} onClick={handleClose}>
                  X
                </Button>
              )}
            </Box>
            {props?.modalHeader || <Box {...DEFAULT_STYLES.modalHeader}>{props?.title}</Box>}

            <Box {...DEFAULT_STYLES.modalBody}>
              {modalBody}
              {modalBody}
              {modalBody}
              {modalBody}
              {modalBody}
              {modalBody}
              {modalBody}
              {modalBody}
              {modalBody}
              {modalBody}
              {modalBody}
              {modalBody}
              {modalBody}
              {modalBody}
              {modalBody}
              {modalBody}
              {modalBody}
              {modalBody}
              {modalBody}
              {modalBody}
              {modalBody}
              {modalBody}
              {modalBody}
              {modalBody}
            </Box>

            {props?.modalFooter}
          </Box>
        </Box>
      )}
    </>
  );
};
