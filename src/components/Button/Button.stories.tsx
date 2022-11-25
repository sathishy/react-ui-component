import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ButtonProps, Button } from "./Button";
import { PACKAGE_STYLES } from "../../styles/package.styles";
import { AiOutlineMessage } from "react-icons/ai";
import Theme from "../../styles/Theme";
const {
  button: {
    DEFAULT: { COMMON, DESKTOP, MOBILE },
  },
} = PACKAGE_STYLES;

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // TODO: configure Type of args
  argTypes: { backgroundColor: { control: "color" } },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args: ButtonProps) => {
  return <Button color={{ xxs: "red" }} {...args} />;
};

const ThemeTemplate: ComponentStory<typeof Button> = (args: ButtonProps) => {
  return (
    <Theme>
      <Button {...args} />
    </Theme>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  leftIcon: <AiOutlineMessage />,
  children: "Button",
  variant: "primary",
  borderRadius: { xxs: MOBILE.borderRadius, xs: MOBILE.borderRadius, md: DESKTOP.borderRadius },
};

export const OutLined = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OutLined.args = {
  // TODO: consume icon here
  // leftIcon: <AiOutlineMessage />,
  variant: "outlined",
  children: "Button",
};

export const Default = Template.bind({});
Default.args = {
  leftIcon: <AiOutlineMessage />,
  children: "Button",
};

export const Disabled = Template.bind({});
Disabled.args = {
  leftIcon: <AiOutlineMessage />,
  disabled: true,
  children: "Button",
};

export const ThemeStyled = ThemeTemplate.bind({});
ThemeStyled.args = {
  fontSize: { xxs: "1", xs: "4", sm: "6" },
  leftIcon: <AiOutlineMessage />,
  children: "Button",
  variant: "primary",
  borderRadius: { xxs: MOBILE.borderRadius, xs: MOBILE.borderRadius, md: DESKTOP.borderRadius },
};
