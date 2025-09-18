import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./Accordion"

const meta = {
  title: "components/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    type: {
      options: ["single", "multiple"],
      control: "select",
    },
    collapsible: {
      control: {
        type: "boolean",
      },
    },
    variant: {
      options: ["default", "splitted"],
      control: "select",
    },
    children: { table: { disable: true } },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Accordion>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: "multiple",
    className: "w-80 bg-background p-8",
    children: (
      <>
        <AccordionItem value="item-1">
          <AccordionTrigger>Accordion Item 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Accordion Item 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </>
    ),
  },
}
