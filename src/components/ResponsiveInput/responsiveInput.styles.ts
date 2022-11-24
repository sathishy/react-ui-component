import styled from "styled-components";
import { COLORS } from "styles/package.styles";
import { Flex } from "styled-system/primitives";
import { BoxProps } from "styled-system/primitives/Box";

export const StyledInputContainer = styled(Flex)<BoxProps>`
  transition: all 0.6s ease-out;

  input:hover:enabled {
    border-color: ${COLORS.blue_1};
    transition: all 0.6s ease-out;
  }

  input:focus:enabled {
    outline: 0;
    /* TODO: confirm box-shadow */
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    transition: all 0.6s ease-out;
  }

  input:disabled {
    outline: 0;
    cursor: no-drop;
    opacity: 0.6;
    transition: all 0.6s ease-out;
  }
`;
