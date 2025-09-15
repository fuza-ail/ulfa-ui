import { cva, type VariantProps } from "class-variance-authority"
import clsx from "clsx"
import { forwardRef, type ComponentProps } from "react"
import { cn } from "../../libs/utils"

const buttonVariants = cva(
  clsx(
    "inline-flex items-center relative justify-center gap-2 cursor-pointer text-foreground rounded-lg text-sm font-normal z-10 whitespace-nowrap",
    "before:content-[''] before:w-full before:absolute before:inset-0 before:bg-inherit before:-z-10 before:[border-radius:inherit] before:transform-all before:duration-200 transform-all duration-200"
  ),
  {
    variants: {
      variant: {
        default:
          "text-primary-foreground bg-primary hover:before:scale-105 hover:before:shadow-lg active:before:scale-100",
        outline:
          "bg-background border border-primary hover:drop-shadow-lg active:before:bg-secondary",
        secondary:
          "bg-secondary text-secondary-foreground hover:before:scale-105 hover:before:shadow-lg active:before:scale-100",
        ghost:
          "before:opacity-0 text-foreground before:scale-60 hover:before:scale-100 before:bg-secondary hover:before:opacity-100 active:before:scale-60 active:before:opacity-0 hover:foreground",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "px-3 py-1 text-xs",
        lg: "px-6 py-2 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)
type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    disabled?: boolean
  }

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, disabled = false, ...props }, ref) => {
    return (
      <button
        disabled={disabled}
        ref={ref}
        className={cn(
          buttonVariants({ variant, size, className }),
          disabled && "pointer-events-none opacity-50"
        )}
        {...props}
      ></button>
    )
  }
)

export default Button
