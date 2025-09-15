import type { Meta, StoryObj } from "@storybook/react-vite"
import Button from "./Button"

const meta = {
  title: "components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Button",
  },
}
