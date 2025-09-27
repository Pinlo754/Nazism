import { Slot } from '@radix-ui/react-slot';
import { Children, isValidElement } from 'react';
import type { ReactNode, ElementType, ComponentPropsWithoutRef } from 'react';

type ConditionalProps<T> = {
  actual: T;
  expected: T;
  children: ReactNode;
};

type WrapperProps<T extends ElementType = 'div'> = {
  children: ReactNode;
  asChild?: boolean;
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, 'children'>;

function Wrapper<T extends ElementType = 'div'>({ as, children, asChild, ...props }: WrapperProps<T>) {
  const Comp = asChild ? Slot : as || 'div';
  return <Comp {...props}>{asChild ? <>{children}</> : children}</Comp>;
}

function If<T extends ElementType = 'div'>(props: WrapperProps<T>) {
  return <Wrapper {...props} />;
}

function Else<T extends ElementType = 'div'>(props: WrapperProps<T>) {
  return <Wrapper {...props} />;
}

function Always<T extends ElementType = 'div'>(props: WrapperProps<T>) {
  return <Wrapper {...props} />;
}

function Conditional<T>({ actual, expected, children }: ConditionalProps<T>) {
  const match = actual === expected;

  const childArray = Children.toArray(children).filter(isValidElement);

  return (
    <>
      {childArray.map((child) => {
        if (match && child.type !== Else) {
          return child;
        } else if (!match && child.type !== If) {
          return child;
        }
        return null;
      })}
    </>
  );
}

export { Conditional, If, Else, Always };
