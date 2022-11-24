import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { StyledSystemBox as Box, BoxProps } from "./StyledSystemBox";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Styled System Box",
  component: Box,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // TODO: have better argTypes
  argTypes: { backgroundColor: { control: "color" } },
} as ComponentMeta<typeof Box>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Box> = (args: BoxProps) => <Box {...args} />;

export const Primary = Template.bind({});

export const Custom = Template.bind({});
Custom.parameters = {};
// TODO: configure prop types
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Custom.args = {
  borderRadius: "8px",
  h: "200px",
  w: "200px",
  // responsive behaviour
  bgColor: { xxs: "red", xs: "yellow", sm: "blue", md: "lightGreen" },
};
