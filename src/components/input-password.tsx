'use client';
import clsx from 'clsx';
import { Eye, EyeOff } from 'lucide-react';
import { useState, forwardRef } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import type { ForwardedRef, ComponentPropsWithoutRef } from 'react';

interface InputPasswordProps extends ComponentPropsWithoutRef<'input'> {
  placeholder?: string;
  className?: string;
  defaultShow?: boolean;
  iconClassName?: string;
  inputClassName?: string;
  buttonClassName?: string;
}

function InputRef(
  { placeholder, className, iconClassName, inputClassName, buttonClassName, defaultShow, ...rest }: InputPasswordProps,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const [show, setShow] = useState(defaultShow || false);

  return (
    <div className={clsx('relative w-full', className)}>
      <Input
        // forward ref từ RHF (react-hook-form) / Radix vào thẳng Input
        // forward ref from RHF (react-hook-form) / Radix directly into Input
        ref={ref}
        type={show ? 'text' : 'password'}
        placeholder={placeholder}
        className={clsx('peer pr-10', inputClassName)}
        // mọi props còn lại (id, name, onChange, ...) truyền thẳng vào Input
        // all other props (id, name, onChange, ...) pass directly into Input
        {...rest}
      />
      <Button
        tabIndex={-1}
        variant="ghost"
        type="button"
        className={clsx(
          'absolute right-1 top-1/2 -translate-y-1/2 py-0 pl-1 pr-1.5 border-l-1 rounded-none',
          'hover:bg-transparent dark:hover:bg-transparent hover:cursor-pointer',
          'peer-aria-invalid:border-destructive peer-aria-invalid:text-destructive!',
          'h-auto text-primary hover:text-primary',
          buttonClassName,
        )}
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? (
          <EyeOff className={clsx('size-4', iconClassName)} />
        ) : (
          <Eye className={clsx('size-4', iconClassName)} />
        )}
      </Button>
    </div>
  );
}

const InputPassword = forwardRef(InputRef);
InputPassword.displayName = 'InputPassword';

export { InputPassword };
