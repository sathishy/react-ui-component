import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { config } from "storybook-addon-designs";
import { IInputProps, ResponsiveInput } from "./ResponsiveInput";
// TODO: add variants

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/ResponsiveInput",
  component: ResponsiveInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // TODO: configure Type of args
  argTypes: { backgroundColor: { control: "color" } },
} as ComponentMeta<typeof ResponsiveInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ResponsiveInput> = (args: IInputProps) => {
  return <ResponsiveInput {...args} />;
};

export const Primary = Template.bind({});
const CLIENT_ONBOARDING_FIGMA_LINK =
  "https://www.figma.com/file/vVRtIYqhRLMf8EQoSeRu9L/Venwiz-Discovery-Sprint-43-44?node-id=113%3A1055&t=0Ccwkgx4T05uiXZk-0";
Primary.parameters = {
  design: config({ type: "figma", url: CLIENT_ONBOARDING_FIGMA_LINK }),
};

export const Custom = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Custom.args = {
  bgColor: "lightGreen",
};
