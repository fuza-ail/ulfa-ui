import type { Meta, StoryObj } from "@storybook/react-vite"
import { Card, CardHeader } from "./Card"

const meta = {
  title: "components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      options: ["default", "border-glow"],
      control: "select",
    },
    children: { table: { disable: true } },
    disabled: { table: { disable: true } },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <CardHeader>Header</CardHeader>
      </>
    ),
    variant: "default",
  },
}
