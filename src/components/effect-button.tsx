'use client';
import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  defaultEffect?: boolean;
  position?: `[--x:${string}] [--y:${string}]`;
  clearEffect?: boolean;
}

const defaultPosition = '[--x:50%] [--y:50%]';
const btnPseudoPosition = 'relative before:absolute before:inset-0';
const btnPseudoBg = 'before:bg-[radial-gradient(circle_at_var(--x)_var(--y),white,transparent_80%)]';
const btnPseudoContent = "before:content-[''] before:opacity-60 before:pointer-events-none";

const EffectButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      defaultEffect = false,
      clearEffect = false,
      position = defaultPosition,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';

    const btnEffectPosition = defaultEffect ? position : '';

    return (
      <Comp
        className={cn(
          buttonVariants({
            variant,
            size,
            className: cn(btnEffectPosition, btnPseudoPosition, btnPseudoBg, btnPseudoContent, className),
          }),
        )}
        ref={ref}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          e.currentTarget.style.setProperty('--x', `${x}px`);
          e.currentTarget.style.setProperty('--y', `${y}px`);
        }}
        onMouseLeave={(e) => {
          if (clearEffect) {
            e.currentTarget.style.removeProperty('--x');
            e.currentTarget.style.removeProperty('--y');
          } else if (defaultEffect) {
            const match = position.match(/\[--x:([^ ]+)] \[--y:([^ ]+)]/);
            // Extract x and y values from the position string
            if (match) {
              e.currentTarget.style.setProperty('--x', match[1]);
              e.currentTarget.style.setProperty('--y', match[2]);
            }
          }
        }}
        {...props}
      />
    );
  },
);
EffectButton.displayName = 'EffectButton';

export { EffectButton, buttonVariants };
