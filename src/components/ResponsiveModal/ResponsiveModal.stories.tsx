import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ModalProps, Modal } from "./ResponsiveModal";
import { Box, Flex } from "../../styled-system/primitives";
import { Button } from "../ResponsiveButton";
import { PACKAGE_STYLES } from "../../styles/package.styles";
import { AiOutlineMessage } from "react-icons/ai";
import Theme from "../../styles/Theme";
import { BoxProps } from "../../styled-system/primitives/Box";
const {
  button: {
    DEFAULT: { COMMON, DESKTOP, MOBILE },
  },
} = PACKAGE_STYLES;

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Component/Modal",
  component: Modal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // TODO: configure Type of args
  argTypes: { backgroundColor: { control: "color" } },
} as ComponentMeta<typeof Modal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = (args: ModalProps) => {
  return <Modal {...args} />;
};

export const ModalPopup = Template.bind({});
ModalPopup.args = {
  show: false,
  title: "Modal Title",
  handleClose: () => console.log("CLosed!!"),
  modalHeader: "Modal Header",
  modalBody: "Hi this is children",
  modalFooter: (
    <Flex>
      <Button variant="primary" borderRadius={"0.375rem"} width={"25%"} mr={"0.375rem"}>
        {/* issue with css props on button */}
        Submit
      </Button>
    </Flex>
  ),
  width: "100%",
};
