import type { Meta, StoryObj } from "@storybook/react-vite"
import Button from "./Button"

const meta = {
  title: "components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      options: ["default", "secondary", "outline", "ghost"],
      control: { type: "select" },
    },
    size: {
      options: ["default", "sm", "lg"],
      control: { type: "select" },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Button",
    variant: "default",
    size: "default",
  },
}
