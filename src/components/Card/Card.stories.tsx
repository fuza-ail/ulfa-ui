import type { Meta, StoryObj } from "@storybook/react-vite"
import { Button } from "../Button"
import { Card, CardContent, CardFooter, CardHeader } from "./Card"

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
        <CardHeader>
          <p className="text-lg font-semibold text-foreground">
            Lifetime access
          </p>
          <p className="text-muted-foreground text-sm">
            Get lifetime access to all features
          </p>
          <p className="text-4xl font-bold">$99.99</p>
          <div className="h-[1px] w-full bg-primary/40"></div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 list-disc list-inside text-accent-foreground">
            <li>All features included</li>
            <li>Lifetime access</li>
            <li>24/7 support</li>
            <li>Unlimited users</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full" variant={"default"}>
            Purchase
          </Button>
        </CardFooter>
      </>
    ),
    variant: "default",
    className: "w-80",
  },
}
