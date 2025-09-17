import { cva, type VariantProps } from "class-variance-authority"
import { forwardRef, type HTMLAttributes } from "react"
import { cn } from "../../libs/utils"

const cardVariants = cva("relative rounded-xl  text-card-foreground ", {
  variants: {
    variant: {
      default:
        "bg-card border border-border shadow-sm flex flex-col justify-between text-left",
      "border-glow": cn(
        "overflow-hidden shadow-sm",
        "before:content-[''] before:scale-180 before:absolute before:inset-0 before:-z-20 before:rounded-xl",
        "before:bg-[conic-gradient(at_center,var(--primary),transparent,var(--primary))]",
        "after:content-[''] after:absolute after:inset-0  after:rounded-xl",
        "after:-z-10 after:bg-card after:m-[1px]",
        "before:animate-spin-slow"
      ),
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

type CardProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardVariants> & {
    disabled?: boolean
  }

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant }), className)}
        {...props}
      />
    )
  }
)

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col space-y-1.5 p-6", className)}
        {...props}
      />
    )
  }
)

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  }
)

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex items-center p-6 pt-0", className)}
        {...props}
      />
    )
  }
)

export { Card, CardContent, CardFooter, CardHeader }
