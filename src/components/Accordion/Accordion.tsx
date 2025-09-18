import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { cva, type VariantProps } from "class-variance-authority"
import clsx from "clsx"
import { ChevronDown } from "lucide-react"
import React, {
  createContext,
  forwardRef,
  useContext,
  type ComponentRef,
} from "react"
import { cn } from "../../libs/utils"

const accordionVariants = cva("", {
  variants: {
    variant: {
      default: "",
      splitted: "space-y-2",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

const accordionItemVariants = cva("", {
  variants: {
    variant: {
      default: "border-b border-border last:border-b-0",
      splitted: "border border-border rounded-xl overflow-hidden",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

const accordionTriggerVariants = cva(
  "flex flex-row items-center justify-between w-full cursor-pointer text-foreground font-normal",
  {
    variants: {
      variant: {
        default: "py-4 hover:underline",
        splitted:
          "p-4 hover:bg-border/40 transition-colors duration-200 ease-in-out",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const accordionContentVariants = cva(clsx(""), {
  variants: {
    variant: {
      default: "",
      splitted: "px-4",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

// Create context for variant
const AccordionContext = createContext<{ variant?: "default" | "splitted" }>({
  variant: "default",
})

type AccordionProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Root
> &
  VariantProps<typeof accordionVariants>

const Accordion = forwardRef<
  ComponentRef<typeof AccordionPrimitive.Root>,
  AccordionProps
>(({ className, variant: variantProp, ...props }, ref) => {
  const variant = variantProp === null ? undefined : variantProp || "default"
  return (
    <AccordionContext.Provider value={{ variant }}>
      <AccordionPrimitive.Root
        className={cn(accordionVariants({ variant }), className)}
        ref={ref}
        {...props}
      />
    </AccordionContext.Provider>
  )
})

const AccordionItem = forwardRef<
  ComponentRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => {
  const { variant } = useContext(AccordionContext)
  return (
    <AccordionPrimitive.Item
      className={cn(accordionItemVariants({ variant }), className)}
      ref={ref}
      {...props}
    />
  )
})

const AccordionTrigger = forwardRef<
  ComponentRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  const { variant } = useContext(AccordionContext)
  return (
    <AccordionPrimitive.Header className="w-full">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          accordionTriggerVariants({ variant }),
          "group",
          className
        )}
        {...props}
      >
        <span>{children}</span>
        <ChevronDown className="ml-2 h-4 w-4 text-foreground transition-transform duration-300 ease group-data-[state=open]:rotate-180" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
})

const AccordionContent = forwardRef<
  ComponentRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  const { variant } = useContext(AccordionContext)
  return (
    <AccordionPrimitive.Content
      className="group overflow-hidden text-foreground text-sm data-[state=open]:animate-accordion-up  data-[state=closed]:animate-accordion-down"
      ref={ref}
      {...props}
    >
      <div
        className={cn(
          "py-2 group-data-[state=open]:animate-fade-in delay-200",
          accordionContentVariants({ variant }),
          className
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  )
})

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
