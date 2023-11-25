import type { Meta, StoryObj } from "@storybook/react";

import {Button} from "./Button"

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  args: {
    children: "Button",
    clear: false,
    round: false,
    large: false,
    disabled: false,
  },
  argTypes: {
    clear: { control: 'boolean', defaultValue: false },
    round: { control: 'boolean', defaultValue: false },
    large: { control: 'boolean', defaultValue: false },
    disabled: { control: 'boolean', defaultValue: false },
  }
} as Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {}

export const Clear: Story = {
  args: {
    clear: true
  },
}
export const Round: Story = {
  args: {
    round: true
  }
}
export const Large: Story = {
  args: {
    large: true
  }
}
export const Disabled: Story = {
  args: {
    disabled: true
  }
}
export const Icon: Story = {
  args: {
    icon: "true"
  }
}